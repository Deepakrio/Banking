import React from 'react'
import './Styles/Contact.css'
import Cimg from './assets/3(1).png'
import { Component } from 'react'

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const regularExpression1 = RegExp(/^[0-9]{10}$/)


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
      lname: '',
      email: '',
      phone: '',
      address: '',

      error: {
        name: '',
        lname: '',
        email: '',
        phone: '',
        address: ''
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
      case "lname":
        error.lname = value.length < 3 ? "Lname should be 3 characters long" : "";
      case "email":
        error.email = regularExpression.test(value)
          ? ""
          : "Email is not valid";
        break;
      case "phone":
        error.phone = regularExpression1.test(value)
          ? ""
          : "Invalid Phone number";
      case "address":
        error.address = value.length < 4 ? "Enter full Address" : "";
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
                          <div className='col-md-6'>
                            <input type="text"
                              placeholder="Last Name*"
                              name='lname'
                              id='lname'
                              className={error.lname.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject}
                            />

                            {error.lname.length > 0 && (
                              <span className="errmsglname">
                                {error.lname}</span>
                            )}
                          </div>
                          <div className='col-md-12'>
                            <input type="text"
                              placeholder="Email*"
                              name='email'
                              id='email'
                              className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject} />

                            {error.email.length > 0 && (
                              <span className="errmsgemail">{error.email}</span>
                            )}
                          </div>
                          <div className='col-md-6'>
                            <input type="text"
                              placeholder="Phone*"
                              name='phone'
                              id='phone'
                              className={error.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject} />

                            {error.phone.length > 0 && (
                              <span className="errmsgphone">{error.phone}</span>
                            )}
                          </div>
                          <div className='col-md-6'>
                            <input type="text"
                              placeholder="Address*"
                              name='address'
                              id='address' 
                              className={error.address.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject}
                            />

                            {error.address.length > 0 && (
                              <span className="errmsgaddress">{error.address}</span>
                            )}
                          </div>
                          <div className='col-md-12'>
                            <input type="text"
                              placeholder="Write here..."
                              className='required'
                              name='write'
                              id='write' />
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