import React from 'react'
import './Styles/Signup.css'
import Cimg from './assets/3 (4).png'
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

export default class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      accnum: '',
      password: '',
      error: {
        name: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        accnum: '',
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
        case "password":
        error.password =
          value.length < 8 ? "Password should 8 characters long" : "";
        
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

            <div class="col-md-5 contxtsi">
              <br></br><br></br><br></br>

              <h1>
                Signup Now
              </h1>
              <h4>
               Register for our Online banking Service
               and Enjoy Investing
              </h4>
            </div>
            <div class="col-md-7">
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='formspacesi'>
                    <div className='row'>
                      <div className='col-md-7'>
                        <form action='#' method='post' onSubmit={this.onFormSubmit}>
                          <div className='col-md-6'>
                            <input
                              required
                              type="text"
                              name='name'
                              placeholder="First Name*"
                              id='fnamesi'
                              className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject}
                            />

                            {error.name.length > 0 && (
                              <span className="errmsgsi">{error.name}</span>
                            )}
                          </div>
                          <div className='col-md-6'>
                            <input type="text"
                              placeholder="Last Name*"
                              name='lname'
                              id='lnamesi'
                              className={error.lname.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject}
                            />

                            {error.lname.length > 0 && (
                              <span className="errmsglnamesi">
                                {error.lname}</span>
                            )}
                          </div>
                          <div className='col-md-12'>
                            <input type="text"
                              placeholder="Email*"
                              name='email'
                              id='emailsi'
                              className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject} />

                            {error.email.length > 0 && (
                              <span className="errmsgemailsi">{error.email}</span>
                            )}
                          </div>
                          <div className='col-md-6'>
                            <input type="text"
                              placeholder="Phone*"
                              name='phone'
                              id='phonesi'
                              className={error.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject} />

                            {error.phone.length > 0 && (
                              <span className="errmsgphonesi">{error.phone}</span>
                            )}
                          </div>
                          <div className='col-md-6'>
                            <input type="text"
                              placeholder="Address*"
                              name='address'
                              id='addresssi' 
                              className={error.address.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject}
                            />

                            {error.address.length > 0 && (
                              <span className="errmsgaddresssi">{error.address}</span>
                            )}
                          </div>
                          <div className='col-md-12'>
                            <input type="text"
                              placeholder="Acc Number*"
                              name='acc'
                              id='accsi'
                              className={error.accnum.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject} />

                            {error.accnum.length > 0 && (
                              <span className="errmsg">{error.accnum}</span>
                            )}
                          </div>
                          <div className='col-md-6'>
                            <input type="password"
                              placeholder="Password*"
                              name='password'
                              id='pwdsi'
                              className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject} />

                            {error.password.length > 0 && (
                              <span className="errmsgpwdsi">{error.password}</span>
                            )}
                          </div>
                          <div className='col-md-6'>
                            <input type="password"
                              placeholder="confirm Password*"
                              name='cnfpassword'
                              id='cnfpwdsi'
                              className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                              onChange={this.formObject} />

                            {error.password.length > 0 && (
                              <span className="errmsgpwdsi">{error.password}</span>
                            )}
                          </div>
                          
                          <div className='col-md-12'>
                            <button type="submit" class="btn btn-primary" id='conbtnsi'>Sign up</button>
                          </div>
                          <div className='col-md-6'>
                            <img src={Cimg} alt='Signup Image' id='cimgsi'></img>
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