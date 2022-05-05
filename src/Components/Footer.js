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
      <p>To get latest updates from Hungry head follow us on social media and stay connected</p>
      <i class="fa-brands fa-instagram-square"></i>  &nbsp;
          <i class="fa-brands fa-facebook"></i> &nbsp;
      <i class="fa-brands fa-twitter-square"></i> &nbsp;
      <i class="fa-brands fa-whatsapp-square"></i> &nbsp;
     
    </div>
    <div class="col-md-3">
      <h1>About us</h1>
      <p>History</p>
      <p>Our Team</p>
      <p>Brand Guidlines</p>
      <p>Terms and Condition</p>
      <p>Privacy policy</p>
    </div>
    <div class="col-md-3">
      <h1>Services</h1>
      <p>How to order</p>
      <p>Our Products</p>
      <p>Order status</p>
      <p>Promo</p>
      <p>Payment method</p>
    </div>
    <div class="col-md-2">
      <h1>Others</h1>
      <p>Contact</p>
      <p>Help</p>
      <p>Privacy</p>
    </div>
  </div>
</div>

</footer>
    </div>
  )
}
