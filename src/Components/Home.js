import React from 'react'
import Cloud from './assets/3.2.png'
import Lady from './assets/2.png'
import InfoCard from './infocard'
import Invest from './Invest'
import Help from './help'
import Welpic from './assets/welcome.png'
import './Styles/Home.css'
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Contact from './Contact'
import { useNavigate } from 'react-router-dom'


export default function Home() {
  let navigate = useNavigate();
  return (
    
    <main>
      <section>
    <div className='section1' >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 welcome">
            <h1>The right decision at the right time.</h1>
            <p>We are here to help you when you need your financial support, then we are help you.</p>
            <button type="button" onClick={() => {navigate("/Contact")}} class="btn btn-primary">Contact us</button>            
          </div>
          <div className="col-md-8">
          <img src={Welpic} className="lady" alt='lady'></img> 
            {/* <img src={Cloud} className="cloud" alt='cloud'></img>
            <img src={Lady} className="lady" alt='lady'></img> */}
          </div>

         

        </div>
      </div>
     
    </div>
    </section>
    <section>
    <div className='section2 '>
      {/* <Invest/> */}
    <InfoCard />
          <Help/></div>
          </section>
    
    </main>

  )
}

