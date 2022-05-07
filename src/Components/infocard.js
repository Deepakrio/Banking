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
import { useNavigate } from 'react-router-dom'


const Infocard =() => {
  

  const InfocardCards =(cards,index) =>
  {
    let navigate = useNavigate();
    return(
    
      <div className="col-md-3 ">
        <div className="card Infocard cardbg" key={index}>
          <div className="card-body">
         <img src={cards.path} class="img" />
       <center>  <h1 className="card-title">{cards.type}</h1>
            <p className="card-text">{cards.msg}</p>
            <h4 className="card-title">{cards.time}</h4>
            <br></br>
        
            <button type="button" id='ibtn' onClick={() => {navigate("/loan")}} class="btn btn-primary">Apply Now</button>            
            </center> 
          </div>
        </div>
      </div>  
    )

  }

  return(
    <>
    <div className="container-fluid mutxt">
    <center> <h1 >Our Services</h1></center> 
    <center>  <i> <p>Get Loans with Attractive ROI and EMI</p></i><br></br></center>
    <div className='row'>
      {Data.map(InfocardCards)}

      </div>
  </div>
  </>
    
  )
}

export default Infocard
















