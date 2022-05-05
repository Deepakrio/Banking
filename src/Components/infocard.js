// import React from 'react'


// export default function Infocard() {
//   return (
//     <div>
// Infocard</div>
//   )
// }


import React from 'react'
import Data from '../data/infoloan.json'
import './Styles/infocard.css'


const Infocard =() => {
  

  const InfocardCards =(cards,index) =>
  {
    return(
    
      <div className="col-md-3 ">
        <div className="card Infocard cardbg" key={index}>
          <div className="card-body">
         <img src={cards.path} class="img" />
          <h1 className="card-title">{cards.type}</h1>
            <p className="card-text">{cards.msg}</p>
            <h4 className="card-title">{cards.time}</h4>
            <br></br>
            <a href="#" className="btn btn-primary">Apply Now</a>
          </div>
        </div>
      </div>  
    )

  }

  return(
    <>
    <div className="container-fluid mutxt">
      <h1 id='mutitle'>Our Services</h1>
     <i> <p id='mutag'>Get Loans with Attractive ROI and EMI</p></i><br></br>
    <div className='row'>
      {Data.map(InfocardCards)}

      </div>
  </div>
  </>
    
  )
}

export default Infocard
















