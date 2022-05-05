// import React from 'react'


// export default function Invest() {
//   return (
//     <div>
// Invest</div>
//   )
// }


import React from 'react'
import Data from '../data/investdata.json'
import './Styles/Invest.css'
import FixedDeposit from './FixedDeposit'


const Invest =() => {
  

  const InvestCards =(cards,index) =>
  {
    return(
    
      <div className="col-md-3 ">
        <div className="card Invest cardbg" key={index}>
          <div className="card-body">
         <img src={cards.path} class="img" />
          <h1 className="card-title">{cards.type}</h1>
            <h3 className='card-text'>{cards.name}</h3>
            <h2 className='card-text'>{cards.CAGR}</h2>
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
      <h1 id='mutitle'>Mutual Funds</h1>
     <i> <p id='mutag'>Invest now with Minimum Risk and Get Maximum Returns</p></i><br></br>
    <div className='row'>
      {Data.map(InvestCards)}

      </div>
  </div>

  <div className='container-fluid'>
  <h1 id='mutitle'>Fixed Deposit</h1>
  <i> <p id='mutag'>Invest now with Zero Risk and Get Maximum Returns</p></i><br></br>
    <FixedDeposit/>
        </div>
  </>
    
  )
}

export default Invest
















