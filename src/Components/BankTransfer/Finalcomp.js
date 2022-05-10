import React, { useState } from "react";
import logimg from '../assets/login.png'

import Transaction from "../BankTransfer/ExistingData/Transaction";
import NewTransaction from "./NewData/NewTransaction";
const DUMMY_EXPENSES = [
  {
    id: "1",
    name: "Deepak C R",
    accno: 1898765564,
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "2",
    name: "Rohan  H K",
    accno: 2312765534,
    amount: 20500,
    date: new Date(2020, 7, 14),
  },
  {
    id: "3",
    name: "Sridhar A",
    accno: 9087765784,
    amount: 5000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "4",
    name: "Nishita K",
    accno: 1898765564,
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
          <div className="col-md-4 simg">
          <img src={logimg} alt="Contact Image" id="simg"></img>
        </div>
      <br></br>
      <br></br>
      <br></br>
      <NewTransaction onAddExpense={addExpenseHandler} />
      <br></br>
      <br></br>
      <Transaction items={expenses} />
    </div>
  );
};

export default App;
