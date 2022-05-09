import React, { useState } from 'react';

import TransactionInfo from './TransactionInfo';
import Card from '../UI/Card';
import TransactionFilter from './TransactionFilter';
import './Transaction.css';

const Transaction = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        {/* <TransactionFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> */}
        {props.items.map((expense) => (
          <TransactionInfo
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Transaction;