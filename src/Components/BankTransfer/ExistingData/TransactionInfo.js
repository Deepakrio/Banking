import React from 'react';

import TransactionDate from './TransactionDate';
import Card from '../UI/Card';
import './TransactionInfo.css';

const TransactionInfo = (props) => {
  return (
    
    <div className='movecard'>
   <Card className='expense-item'>
      <TransactionDate date={props.date} />
      <div className='expense-item__description'>
        <h2 id='titlefont'>{props.name}</h2>
        <h2 id='titlefont'>{props.accno}</h2>
        <div className='expense-item__price'><i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;{props.amount}</div>
      </div>
    </Card></div>
  );
}

export default TransactionInfo;