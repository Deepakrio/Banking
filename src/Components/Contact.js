import React from 'react'
import './Styles/Contact.css'
import Cimg from './assets/3(1).png'
import { Component } from 'react'

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

export default class Contact extends Component {

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

      <div><br></br><br></br>
        <div class="container-fluid">
          <div class="row">

            <div class="col-md-5 contxt">
              <br></br><br></br><br></br>

              <h1>
                Contact Us
              </h1>
              <h4>
                We are here to help you when you need your
                financial support. Fill the below Details we will
                get back to you as soon as possible
              </h4>
            </div>
            <div class="col-md-7">
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='formspace'>
                    <div className='row'>
                      <div className='col-md-7'>
                        <form action='#' method='post' onSubmit={this.onFormSubmit}>
                          <div className='col-md-6'>
                            <input
                              required
                              type="text"
                              name='name'
                              placeholder="First Name*"
                              id='fname'
                              className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject}
                               />

                            {error.name.length > 0 && (
                              <span className="errmsg">{error.name}</span>
                            )}
                          </div>
{/* 
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
                          </div> */}

                          <div className='col-md-6'>
                            <input type="text" placeholder="Last Name*" className='required' name='lname' id='lname' />
                          </div>
                          <div className='col-md-12'>
                            <input type="text" placeholder="Email*" className='required' name='email' id='email' />
                          </div>
                          <div className='col-md-6'>
                            <input type="text" placeholder="Phone*" className='required' name='phone' id='phone' />
                          </div>
                          <div className='col-md-6'>
                            <input type="text" placeholder="Address*" className='required' name='address' id='address' />
                          </div>
                          <div className='col-md-12'>
                            <input type="text" placeholder="Write here..." className='required' name='write' id='write' />
                          </div>
                          <div className='col-md-12'>
                            <button type="submit" class="btn btn-primary" id='conbtn'>Send Message</button>
                          </div>
                          <div className='col-md-6'>
                            <img src={Cimg} alt='Contact Image' id='cimg'></img>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                  <br></br><br></br><br></br>                      <br></br><br></br><br></br>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}