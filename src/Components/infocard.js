import React from 'react'
import Data from '../data/infoloan.json'
import './Styles/infocard.css'

const InfoCard =() => {

  const renderCards =(cards,index) =>
  {
    return(
    
      <div className="col-md-3 ">
        <div className="card infocard cardbg" key={index}>
          <div className="card-body">
         <img src={cards.path} class="img" />
          <h1 className="card-title">{cards.type}</h1>
            <h2 className="card-title">{cards.loanintrest}</h2>
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
      {Data.map(renderCards)}

      </div>
  </div>
    
  )
}

export default InfoCard
















// export default function InfoCard() {

  
//   const Display=Data.map(
//     (records,index) =>{
//   return (
    // <div className="container-fluid">
    //   <div className='row'>
    //     <div className="col-md-4 ">
    //       <div className="card infocard" key={index}>
    //         <div className="card-body">
    //           <h5 className="card-title">{records.loanintrest}</h5>
    //           <p className="card-text">{records.msg}</p>
    //           <a href="#" className="btn btn-primary">Go somewhere</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   )
// }
//   );
// }