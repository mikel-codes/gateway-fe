import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
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
      <Link className="link" to="new"><i className="fa-solid fa-plus"></i>Add Gateway</Link>
    </span>
  </div>
    <table className="tabs">
      <thead>
      <tr>
        <th></th>
        <th>Serial</th>
        <th>Name</th>
        <th>IPv4</th>
        <th>Connected Devices</th>
        <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
      {gateways.length > 0 && gateways.map((g,i) => <tr key={i}>
         <td><i className="fa-solid fa-1.2x fa-microchip"></i></td>
        <td>{g.serial || "FakeSerial"}</td>
        <td>{g.name}</td>
        <td>{g.ipv4}</td>
        <td style={{textAlign: "center"}}>{g.device_set.length}</td>
        <td><i style={{color: "white"}} className="fa-solid fa-pen"></i></td>
        <td><i style={{color: "blue"}} className="fa-solid fa-trash"></i></td>

      </tr> || <tr><td colSpan={4}><center>No Gateways</center></td></tr>)}

      </tbody>
    </table>
    </div>
  )
}

export default Gateway
