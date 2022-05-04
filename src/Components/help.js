import React from 'react'
import Wave1 from './assets/5.png'
import Wave2 from './assets/6.png'
import './Styles/help.css'

export default function Help() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Wave1} alt='Slidder' className='wave1' />
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
                    </div>
                </div>
            </div>
        </div>
    )
}
