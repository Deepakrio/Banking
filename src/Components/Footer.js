import React from 'react'
import Footimg from './assets/footer.png'
import './Styles/Footer.css'

export default function() {
  return (
    <div>
        {/* <img src={Footimg} alt='Footer' id='footimg'/> */}
        <footer>


<div class="container-fluid p-0"
className='fooimg'
style={{
  backgroundColor: "#847ce4",
    backgroundSize: "cover",
    height : "300px",
    left : "100px"
}}>
  <div class="row text-left content">
    <div class="col-md-4">
      <h1>Follow us on</h1>
      <p>To get latest updates from Dlithe Bank follow us on social media and stay connected</p>
      <i class="fa-brands fa-instagram-square"></i>  &nbsp;
          <i class="fa-brands fa-facebook"></i> &nbsp;
      <i class="fa-brands fa-twitter-square"></i> &nbsp;
      <i class="fa-brands fa-whatsapp-square"></i> &nbsp;
     
    </div>
    <div class="col-md-3">
      <h1>About us</h1>
      <p className='para'>History</p>
      <p className='para'>Our Team</p>
      <p className='para'>Guidlines</p>
      <p className='para'>Terms and Condition</p>
      <p className='para'>Privacy policy</p>
      
    </div>
    <div class="col-md-3">
      <h1>Services</h1>
      <p className='para'>Open SB Account</p>
      <p className='para'>Open Current Account</p>
      <p className='para'>Apply for ATM</p>
      <p className='para'>SMS Services</p>
      <p className='para'>Online Payment</p>
    </div>
    <div class="col-md-2">
      <h1>Others</h1>
      <p className='para'>Contact</p>
      <p className='para'>Help</p>
      <p className='para'>Privacy</p>
    </div>
  </div>
</div>

</footer>
    </div>
  )
}
