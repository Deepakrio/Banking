// import React from 'react'
// import './Styles/CreateAcc.css';


// export default function CreateAcc() {
//   return (
//      <>

//       <div className='container'>
//           <h1>Login</h1>
// <form>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary btnctrl">Submit</button>
// </form> 
// </div>
// </>
//  )
// }


import React, { Component } from "react";
import Cloudimg from './assets/3.2.png';
import './Styles/CreateAcc.css';
import Sideimg from './assets/5.png';
import logimg from './assets/login.png'

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const validation = ({ error, ...rest }) => {
  let checkValidation = false;

  Object.values(error).forEach(val => {
    if (val.length > 0) {
      checkValidation = false
    } else {
      checkValidation = true
    }
  });

  Object.values(rest).forEach(val => {
    if (val === null) {
      checkValidation = false
    } else {
      checkValidation = true
    }
  });

  return checkValidation;
};

export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      error: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  onFormSubmit = event => {
    event.preventDefault();

    if (validation(this.state)) {
      console.log(this.state)
    } else {
      console.log("Error occured");
    }
  };

  formObject = event => {
    //collaboration and debugging purposes, it’s always better to write the prevent function just below your function declaration. 
    //That way you won’t cause a bug by forgetting to put the prevent function.
    event.preventDefault();

    const { name, value } = event.target;
    let error = { ...this.state.error };

    switch (name) {
      case "name":
        error.name = value.length < 5 ? "Name should be 5 characters long" : "";
        break;
      case "email":
        error.email = regularExpression.test(value)
          ? ""
          : "Email is not valid";
        break;
      case "password":
        error.password =
          value.length < 5 ? "Password should 5 characters long" : "";
        break;
      default:
        break;
    }

    this.setState({
      error,
      [name]: value
    })
  };

  render() {

    const { error } = this.state;

    return (
      
      <div className="row ">

        <div className="col-md-4 simg">
        <img src={logimg} alt='Contact Image' id='simg'></img>
        </div>
        
        <div className="container-fluid col-md-4 fullcard ">
        <br></br><br></br><br></br>                      <br></br><br></br><br></br>


          <div className="card mt-5 login">
            <h1>Login</h1>
            <form className="card-body login " onSubmit={this.onFormSubmit}>

              <div className="form-group mb-3">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Username"
                  id="loginame"
                  onChange={this.formObject}
                  className={error.name.length > 0 ? "is-invalid form-control" : "form-control"} />

                {error.name.length > 0 && (
                  <span className="invalid-feedback">{error.name}</span>
                )}
              </div>

              <div className="form-group mb-3">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="loginemail"
                  className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                  onChange={this.formObject} />

                {error.email.length > 0 && (
                  <span className="invalid-feedback">{error.email}</span>
                )}
              </div>

              <div className="form-group mb-3">
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="loginpwd"
                  className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                  onChange={this.formObject} />

                {error.password.length > 0 && (
                  <span className="invalid-feedback">{error.password}</span>
                )}
              </div>

              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-block btn-primary" id="loginbtn">Submit</button>
              </div>
              {/* <div className="col-md-4 cloudimg">
              <img src={Cloudimg} alt='Contact Image' id='cimg'></img>
              </div> */}
            </form>
          </div>
          <br></br><br></br><br></br>                      <br></br><br></br><br></br>


        </div>
      </div>
    
      
    );
  }
}