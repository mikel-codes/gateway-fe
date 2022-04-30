import React, { useEffect, useState } from 'react'
import {axiosApi} from '@@/api'
const Gateway = () => {
  const [gateways, setGateways] = useState([])
  useEffect(() => {
    axiosApi.get("http://localhost:8000/api/router/gateways/").then(res => {
      if(res.status== 200){
        console.log(res)
        setGateways(res.data)
      }
    }).catch(e => console.log(e))
  },[])
  return (
    <div className="tabs">
      <div style={{display: "flex", justifyContent: "space-around"}}>
    <span>
    <input type="search" placeholder="search..." />
    </span>
    <span>
      <button className=""><i className="fa-solid fa-plus"></i>Add Gateway</button>
    </span>
  </div>
    <table className="tabs" style={{marginLeft: "20%"}}>
      <thead>
      <tr>
        <th></th>
        <th>Serial</th>
        <th>Name</th>
        <th>IPv4</th>
        <th></th>
        </tr>
      </thead>
      <tbody>
      {gateways.length > 0 && gateways.map((g,i) => <tr key={i}>
         <td><i className="fa-solid fa-router"></i></td>
        <td>{g.serial}</td>
        <td>{g.name}</td>
        <td>{g.ipv4}</td>
      </tr> || <tr><td colSpan={4}>No Gateways </td></tr>)}
      </tbody>
    </table>
    </div>
  )
}

export default Gateway
