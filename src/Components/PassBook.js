import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import AddFunds from "./AddFunds";
import "./Styles/passbook.css";

const Services = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const response = await axios.get("https://localhost:44315/Api/Funds");
    setData(response.data);
  };

  const deleteuser = async (Id) => {
    await axios.delete(`https://localhost:44315/Api/Funds/${Id}`);
    fetchdata();
  };
  const [mode, setmode] = useState("light");
  return (
    <>
      <br></br> <br></br> <br></br> <br></br>
      <div className="container-fluId mb-5">
        <div>
          <h4 Id="mutualTxt" align="center">
            Mutual Funds
          </h4>
          <br></br>
        </div>
        <table className="table table-bordered  mutualTable">
          <thead>
            <tr Id="trstyle">
              <th scope="col">SL.No</th>
              <th scope="col">Scheme</th>
              <th scope="col">Amount</th>
              <th scope="col">Duration</th>
              <th scope="col">Mode</th>

              <th scope="col">Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody Id="tbstyle">
            {data.map((x, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                {/* <td>{x.Id}</td> */}
                <td>{x.Scheme}</td>
                <td>{x.Amount}</td>
                <td>{x.Duration}</td>
                <td>{x.Mode}</td>
                <td>{x.InvType}</td>

                <td>
                  {/* <Link className='btn btn-outline-primary m-2 ' to={`/demat/${x.Id}`}>view</Link> */}
                  {/* <Link
                    className="btn btn-outline-warning m-2 btndngr"
                    to={`/edit/${x.Id}`}
                  >
                    Modify
                  </Link> */}
                  <button
                    type="submit"
                    // id="loginbtn"
                    class="btn btn-block btn-primary btndngr"
                  >
                     <Link 
                     className="linktxt"
                     to={`/edit/${x.Id}`}
                     >
                     Modify
                     </Link> 
                  </button>

                  <button
                    className="btn btn-block btn-primary btndngr1"
                    id="dngr"
                    onClick={(e) => deleteuser(x.Id)}
                  >
                    Terminate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddFunds />
    </>
  );
};
export default Services;
