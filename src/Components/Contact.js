import React from 'react'
import './Styles/Contact.css'
import Cimg from './assets/3(1).png'

export default function Contact(){
  return (

    <div><br></br><br></br>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 contxt">
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
                      <form action='#' method='post'>
                        <div className='col-md-6'>
                          <input type="text" placeholder="First Name*" className='required' name='fname' id='fname'  />
                        </div>
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
                          <button type="button" class="btn btn-primary" id='conbtn'>Send Message</button>
                        </div>
                        <div className='col-md-6'>
                          <img src={Cimg} alt='Contact Image' id='cimg'></img>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
