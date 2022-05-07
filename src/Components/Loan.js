import axios from 'axios'
import React, { useEffect, useState } from "react";
import ldata from '../data/FixedData.json'


function Loan() {
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get("https://localhost:7203/api/Artists");
      setUsers(response.data)
    }
    fetchData();
  },[])

  return (
    <div>
      <h1>List of Users</h1>
      {users.map(item=>(<li>{item.artistId}<br></br>{item.artistName}<br></br></li>))}
    </div>
  );
}

export default Loan;