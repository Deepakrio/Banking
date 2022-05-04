import React from 'react'
import './Styles/Contact.css'

export default function Contact() {
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
                        <input type="text" placeholder="First Name*" className='required' />
                      </div>
                      <div className='col-md-6'>
                        <input type="text" placeholder="Last Name*" className='required' />
                      </div>
                      <div className='col-md-12'>
                        <input type="text" placeholder="Email*" className='required' />
                      </div>
                      <div className='col-md-6'>
                        <input type="text" placeholder="Phone*" className='required' />
                      </div>
                      <div className='col-md-6'>
                        <input type="text" placeholder="Address*" className='required' />
                      </div>
                      <div className='col-md-12'>
                        <input type="text" placeholder="Write here..." className='required' />
                      </div>
                      <div className='col-md-12'>
                      <button type="button" class="btn btn-primary">Primary</button>
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
