import React from 'react'
import Wave1 from './assets/5.png'
import Wave2 from './assets/6.png'
import Assitant from './assets/1.png'
import Cardsheet from './assets/3 (2).png'



import './Styles/help.css'

export default function Help() {
    return (
        <div>
            <div className="container-fluid helpsize">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Wave1} alt='Slidder' className='wave1' />
                        <img src={Cardsheet} alt='Sheet' className='cardsheet' />
                    </div>
                    <div className="col-md-6 custxt">
                        <h1>
                            Our most
                            honorable customer
                        </h1>
                        <h4>
                            <i>We are here to help you when you need your financial
                                support.</i>
                        </h4>
                    </div>
                    <div className="col-md-3">
                        <img src={Wave2} alt='Slidder' className='wave2' />
                        <img src={Assitant} alt='Assitant' className='assitant' />
                    </div>
                    <div className='container-fluid col-md-5 sheetxt'>
                        <h1>Our manager will contact you to clear the details.</h1><br></br><br></br>
                        <p>
                            We are here to help you when you need your financial support, We are here to help you.
                        </p><br></br>
                        <p>
                            We are here to help you when you need your financial support, We are here to help you.
                        </p><br></br><br></br>

                        <button type="submit" className="btn btn-block btn-primary" id='helpbtn'>Call us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
