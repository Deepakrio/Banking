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
import Navbar from './Navbar'


const Invest =() => {
  const InvestCards =(cards,index) =>
  {
    return(
    
      <div className="col-md-3 ">
        <div className="card Invest cardbgm cardhold" key={index}>
          <div className="card-body">
         <img src={cards.path} class="imgm" />
          <h1 className="card-titlem">{cards.type}</h1>
            <h3 className='card-textm'>{cards.name}</h3>
            <h2 className='card-textm'>{cards.CAGR}</h2>
            <p className="card-textm">{cards.msg}</p>
            <h4 className="card-titlem">{cards.time}</h4>
            <br></br>
         <center> <a href="https://rzp.io/i/5DuYoiBm02" target='_blank' className="btn btn-primary">Invest Now</a></center>  
          </div>
        </div>
      </div>  
    )

  }

  return(
    <>
    {/* <Navbar/> */}
                          <br></br><br></br><br></br>

    <div className="container-fluid mutxt">
    <center>  <h1>Mutual Funds</h1>
     <i> <p >Invest now with Minimum Risk and Get Maximum Returns</p></i><br></br></center>
    <div className='row'>
      {Data.map(InvestCards)}

      </div>
  </div>

  <div className='container-fluid'>
 <center> <h1 >Fixed Deposit</h1>
  <i> <p>Invest now with Zero Risk and Get Maximum Returns</p></i><br></br></center>
    <FixedDeposit/>
    <br></br><br></br><br></br>
        </div>
  </>
    
  )
}

export default Invest
















