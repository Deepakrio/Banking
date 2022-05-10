// import React from "react";
// import PassBookInfo from "./PassBookInfo";

// export default function PassBook() {
//   const Details = [
//     {
//       id: 1,
//       date: "12-02-2022",
//       transaction: "UPI",
//       debit: "1000",
//       credit: "0000",
//       balance: "3000",
//     },
//     {
//       id: 1,
//       date: "13-02-2022",
//       transaction: "Bank Transfer",
//       debit: "2000",
//       credit: "0000 ",
//       balance: "1000",
//     },
//     {
//       id: 1,
//       date: "13-02-2022",
//       transaction: "sent via UPI",
//       debit: "0000",
//       credit: "10000 ",
//       balance: "11000",
//     },
//   ];

//   return (
//     <div>
//       <PassBookInfo
//         date={Details[0].date}
//         transaction={Details[0].transaction}
//         debit={Details[0].debit}
//         credit={Details[0].credit}
//         balance={Details[0].balance}
//       />

// <PassBookInfo
//         date={Details[1].date}
//         transaction={Details[1].transaction}
//         debit={Details[1].debit}
//         credit={Details[1].credit}
//         balance={Details[1].balance}
//       />

// <PassBookInfo
//         date={Details[2].date}
//         transaction={Details[2].transaction}
//         debit={Details[2].debit}
//         credit={Details[2].credit}
//         balance={Details[2].balance}
//       />
//     </div>
//   );
// }


import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table'; 
import AddFunds from './AddFunds';
import './Styles/passbook.css'
// import 'bootstrap/dist/css/bootstrap.css'; 
  
export default class Studentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:44315/Api/Funds')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  <br></br><br></br><br></br><br></br><br></br>
          <h4 id='mutualTxt' align="center">Mutual Funds</h4><br></br>  
          <table className="table table-bordered  mutualTable" style={{ marginTop: 10 }}>  
            <thead>  
              <tr id='trstyle'>  
                <th>Id</th>  
                <th>Scheme</th>  
                <th>Amount</th>  
                <th>Duration</th> 
                <th>Mode</th> 
                <th>Type</th>
                {/* <th colSpan="4">Action</th>   */}
              </tr>  
            </thead>  
            <tbody id='tbstyle'>  
             { this.tabRow() }   
            </tbody>  
          </table>  
          <AddFunds/>
        </div>  
      );  
    }  
  }  