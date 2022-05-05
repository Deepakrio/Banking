import React from 'react'
import Data from '../data/FixedData.json'
// import './Styles/FixedDeposit.css'

const FixedDeposit =() => {

  const Fixedcards =(cards,index) =>
  {
    return(
    
      <div className="col-md-3 ">
        <div className="card FixedDeposit cardbg" key={index}>
          <div className="card-body">
         <img src={cards.path} class="img" />
          <h1 className="card-title">{cards.type}</h1>
            <h2 className="card-title">{cards.roi}</h2>
            <br></br><br></br>
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
    <div className="container-fluid">
    <div className='row'>
      {Data.map(Fixedcards)}

      </div>
  </div>
    
  )
}

export default FixedDeposit