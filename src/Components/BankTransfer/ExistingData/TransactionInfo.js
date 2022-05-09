import React from 'react';

import TransactionDate from './TransactionDate';
import Card from '../UI/Card';
import './TransactionInfo.css';

const TransactionInfo = (props) => {
  return (
    
   <Card className='expense-item'>
      <TransactionDate date={props.date} />
      <div className='expense-item__description'>
        <h2 id='titlefont'>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default TransactionInfo;