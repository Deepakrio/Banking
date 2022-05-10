import React, { Component,useState } from "react";
import Cloudimg from "./assets/3.2.png";
import "./Styles/CreateAcc.css";
import Sideimg from "./assets/5.png";
import logimg from "./assets/login.png";
import { useNavigate } from "react-router-dom";


function CreateAcc() {
  let navigate = useNavigate();
  

  return (
    <div className="d-grid mt-3">
      {/* <button type="submit" className="btn btn-block btn-primary" id="loginbtn">Submit</button> */}
      <button
        type="submit"
        onClick=
        {() => {
          navigate("/home");
        }}
        id="loginbtn"
        class="btn btn-block btn-primary"
      >
        Submit
      </button>
    </div>
  );
}

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const validation = ({ error, ...rest }) => {
  let checkValidation = false;

  Object.values(error).forEach((val) => {
    if (val.length > 0) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      checkValidation = false;
    } else {
      checkValidation = true;
    }
  });

  return checkValidation;
};

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      error: {
        name: "",
        email: "",
        password: "",
      },
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (validation(this.state)) {
      console.log(this.state);
    } else {
      console.log("Error occured");
    }
  };

  formObject = (event) => {
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
        error.email = regularExpression.test(value) ? "" : "Email is not valid";
        break;
      case "password":
        error.password =
          value.length < 5 ? "Password should 5 characters long" : "";
        break;
      default:
        break;
    }

    // const OnSubmitData = () =>
    // {
    //   this.setState("");
    //             navigate("/home");

    // }

    this.setState({
      error,
      [name]: value,
    });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="row ">
        <div className="col-md-4 simg">
          <img src={logimg} alt="Contact Image" id="simg"></img>
        </div>

        <div className="container-fluid col-md-4 fullcard ">
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <div className="card mt-5 login">
            <center>
              <h1>Login</h1>
            </center>
            <form className="card-body login " onSubmit={this.onFormSubmit}>
              <div className="form-group mb-3">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Username"
                  id="loginame"
                  onChange={this.formObject}
                  className={
                    error.name.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                />

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
                  className={
                    error.email.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  onChange={this.formObject}
                />

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
                  className={
                    error.password.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  onChange={this.formObject}
                />

                {error.password.length > 0 && (
                  <span className="invalid-feedback">{error.password}</span>
                )}
              </div>
              <CreateAcc />
              {/* <div className="d-grid mt-3">
              <button type="submit" className="btn btn-block btn-primary" id="loginbtn">Submit</button>
              <button type="submit" onClick={() => {navigate("/home")}}  id="loginbtn" class="btn btn-block btn-primary">Submit</button>            
              </div> */}
              {/* <div className="col-md-4 cloudimg">
              <img src={Cloudimg} alt='Contact Image' id='cimg'></img>
              </div> */}
            </form>
          </div>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
