import React, { useState } from "react";

import "./ChallanForm.css";



const ChallanForm = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredAccno, setenteredAccno] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredName: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const nameChangeHandler = (event) => {
    setenteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredName: event.target.value };
    // });
  };

  const accnoChangeHandler = (event) => {
    setenteredAccno(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const getDateTime = () => {
    let tempDate = new Date();
    let date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds(); 
    const currDate = "Current Date= "+date;
    return (
       {currDate}
    );
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: enteredName,
      accno: enteredAccno,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setenteredName("");
    setenteredAccno("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const alertMsg = () => {
    alert("Amount Transfered Sucessfully");
  };

  return (
    <div id="formlayout">
      <center>
        <h1 id="transfertitle">Online Money Transfer</h1>
      </center>

      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Account Number</label>
            <input
              type="number"
              value={enteredAccno}
              onChange={accnoChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-05-12"
              max="2022-05-12"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={alertMsg}>
            Transfer Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChallanForm;
