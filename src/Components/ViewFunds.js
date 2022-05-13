import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewFunds = () => {
  const [user, setUser] = useState({
    Scheme: "",
    Amount: "",
    Duration: "",
    Mode: "",
    InvType: "",
  });
  const { Id } = useParams();
  const loadUser = async () => {
    const response = await axios.get(`https://localhost:44315/Api/Funds/${Id}`);
    setUser(response.data);
  };
  useEffect(() => {
    loadUser();
  });

  return (
    <div>
      <div className="container">
        <h1 className="display-4">userid{user.Id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">Scheme : {user.Scheme}</li>
          <li className="list-group-item">Amount : {user.Amount}</li>
          <li className="list-group-item">Duration : {user.Duration}</li>
          <li className="list-group-item">Mode : {user.Mode}</li>
          <li className="list-group-item">Type : {user.InvType}</li>
        </ul>

        <Link className="btn btn-primary" to="/PassBook">
          Back{" "}
        </Link>
      </div>
    </div>
  );
};
export default ViewFunds;
