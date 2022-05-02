import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {axiosApi} from '@@/api'
import {deleteApi, updateApi} from '@@/utils'


const device = () => {
  const [devices, setDevices] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axiosApi.get("devices/").then(res => {
      if(res.status== 200){
        setDevices(res.data)
      }
    }).catch(e => console.log(e))
  },[])
  const computeIP = (g, uid) => {
    return g.substring(0, g.length - 1) + (Number(g.charAt(g.length - 1)) + uid)

  //  gateway.splice(0, partA.length) +  uid
  }
  const removeDevice = async (device) => {
    const confirm = window.confirm(`Do you want to remove this device  ${device.vendor}? `)
    if(confirm){
      const res = await deleteApi(`devices/${device.id}`)
      if(res.status == 204){
        alert("successfully deleted device")
        setDevices(devices => devices = devices.filter(d => d.id !== device.id))
      }
    }
    return false
  }
  const toggleConnection = async (device) => {
    if(device.status == 'on'){
      const confirm = window.confirm("Confirm Disconnection?")
      if(confirm){
        const resp = await updateApi(`/devices/${device.id}/`, {...device, gateway: null})
        if(resp.status == 200){

          alert("disconnected")
          let temp = devices
          setDevices(devices => devices = devices.map(d => {
            if(d.id === device.id)
              d = resp.data
            return d
            }))
        }
      }
    }
    else{
      navigate("edit", {state: {device, disabled: true}})
    }
  }

  return (
    <div className="tabs">
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <span><input type="search" placeholder="search..." /></span>
        <span>
          <button className="link" onClick={() => navigate('new')}>
            <i className="fa-solid fa-plus"></i>Add device
          </button>
        </span>
      </div>
    <table className="tabs">
      <thead>
        <tr>
            <th></th>
            <th>G-Name</th>
            <th>G-IP</th>
            <th>Vendor</th>
            <th>UID</th>
            <th>IP</th>
            <th>Status</th>
            <th>Created On</th>
            <th>Activity</th>
            <th colSpan={2}></th>
          </tr>
      </thead>
      <tbody>
      {devices.length > 0 && devices.map((d,i) => <tr key={i}>
        <td><i className="fa-solid  fa-network-wired"></i></td>

        <td>{d.gatewayx !== null && d.gatewayx.name || "None"}</td>
        <td>{d.gatewayx !== null && d.gatewayx.ipv4 || "None"}</td>
        <td>{d.vendor}</td>
        <td>{d.uid == null ? "N/A" : d.uid}</td>

        <td>{d.gatewayx !== null && computeIP(d.gatewayx.ipv4, d.uid) || "N/A"}</td>
        <td><span className={`switch ${d.status}`}>{d.status_name}</span></td>
        <td>{new Date(d.created_on).toLocaleString()}</td>
        <td>
          <button className={`${d.status}`} style={{height: "20px",padding: "0.2em", width: "100px", fontSize: "12px"}} onClick={() => toggleConnection(d)}>
            {d.status == 'on' ? "Disconnect" : "Connect"}
          </button>
      </td>
        <td colSpan={2}>
          <div style={{display: "flex", justifyContent: "space-around"}}>
                <span className="btn" onClick={() => navigate("edit", {state: {device: d}})}>🖉</span>

                <span className="btn">
          <i className="btn" onClick={() => removeDevice(d)} style={{color: "indianred"}} className="fa-solid fa-trash"></i>
          </span>
          </div>
        </td>
      </tr>)
      ||
      <tr>
        <td colSpan={6}>
          <center>No Devices</center>
        </td>
      </tr>}
      </tbody>
    </table>
    </div>


  )
}

export default device
