import React from 'react'
import Wave1 from './assets/5.png'
import Wave2 from './assets/6.png'
import Assitant from './assets/1.png'
import Cardsheet from './assets/3 (2).png'
import Muimg from './assets/help.png'
import './Styles/help.css'

export default function Help() {
    return (
        <div>
            <div className='container-fluid helpcnt'>
            <center>   <h1>
                    Our most
                    honorable customer
                </h1></center> 
              <center>  <h4>
                    <i>We are here to help you when you need your financial
                        support.</i>
                </h4></center>
                <div className='htitle'>
                    <h1>Our manager will contact you to clear the details. </h1>
                    <p>
                        We are here to help you when you need your financial support, We are here to help you.
                    </p>
                    <p>
                        We are here to help you when you need your financial support, We are here to help you.
                    </p>
                </div>
                <img src={Muimg} alt='image' id='helpimg' />

            </div>
        </div>
    )
}
