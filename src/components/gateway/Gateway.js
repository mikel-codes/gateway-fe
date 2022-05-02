import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {axiosApi} from '@@/api'
import {deleteApi} from '@@/utils'


const Gateway = () => {
  const [gateways, setGateways] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axiosApi.get("http://localhost:8000/api/router/gateways/").then(res => {
      if(res.status== 200){
        console.log(res)
        setGateways(res.data)
      }
    }).catch(e => console.log(e))
  },[])
  const removeGateway = async (gateway) => {
    const confirm = window.confirm(`Do you want to remove this gateway with serial ${gateway.serial}? `)
    if(confirm){
      const res = await deleteApi(`gateways/${gateway.id}`)
      if(res.status == 204){
        alert("successfully deleted gateway")
        setGateways(gateways => gateways = gateways.filter(g => g.id !== gateway.id))
      }
    }
    return false

  }

  return (
    <div className="tabs">
      <div style={{display: "flex", justifyContent: "space-around"}}>
    <span>
    <input type="search" placeholder="search..." />
    </span>
    <span>
      <button className="link" onClick={() => navigate('new')}><i className="fa-solid fa-plus"></i>Add Gateway</button>
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
        <td>
          <span className="btn" onClick={() => navigate("edit", {state: {gateway: g}})}>e</span>
        </td>
        <td onClick={() => removeGateway(g)}>
          <i style={{color: "indianred"}} className="fa-solid fa-trash"></i>
        </td>
      </tr>)
      ||
      <tr>
        <td colSpan={6}>
          <center>No Gateways</center>
        </td>
      </tr>}
      </tbody>
    </table>
    </div>


  )
}

export default Gateway
