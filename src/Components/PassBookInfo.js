import React from "react";
import Table from "./Table";

    
    function PassBookInfo(props)
    {
    return(
      <div>
        <table class = "table table-bordered">
        <tbody>
        <tr>
          <center>   <td>{props.date}</td>
             <td>{props.transaction}</td>
             <td>{props.debit}</td>
             <td>{props.credit}</td>
             <td>{props.balance}</td></center>
           </tr>
        </tbody>
        </table>
      </div>
    )
    
    }
    
    export default PassBookInfo;