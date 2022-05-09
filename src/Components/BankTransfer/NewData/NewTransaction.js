import React from 'react';

import ChallanForm from './ChallanForm';
import './NewTransaction.css';

const NewTransaction = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ChallanForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewTransaction;