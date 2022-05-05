import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const GatewayDetail = () => {
  const { state: { gateway } } = useLocation()
  const navigate = useNavigate()
  const { devices, ...rest } = gateway
  const computeIP = (g, uid) => {
    return g.substring(0, g.length - 1) + (Number(g.charAt(g.length - 1)) + uid)

  }

  return (
    <div className="tabs">
      <h3>{devices.length} devices connected</h3>
      <div className="display">
        <div className="block">
          <i className="fa-solid fa-3x fa-wifi"></i>
          <ul>
            <li>{rest.name}</li>
            <li>{rest.serial}</li>
            <li>{rest.ipv4}</li>
          </ul>
        </div>

        <div className="block">
          {devices.length > 0 && devices.map((d, i) => <div key={i}>
            <div style={{ display: "flex", justifyContent: "space-around", width: "300px" }}>
              <i style={{ color: "#32CD32" }} className="fa-solid fa-network-wired">
              </i>
              <span>{d.vendor}</span>
              <span>{d.status_name}</span>
              <span>{computeIP(rest.ipv4, d.uid)}</span>
            </div>
          </div>)}
        </div>
      </div>
      <button className='' onClick={() => navigate('/gateways')}>Show Gateways Table</button>
    </div>
  )
}

export default GatewayDetail
