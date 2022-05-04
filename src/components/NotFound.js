import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  let navigate = useNavigate()
  return (
    <div className="tabs">
      <h1>Page You Seek Does Not Exist</h1>
      <button onClick={() => navigate('gateways')}>Go to Main Page</button>
    </div>
  )
}

export default NotFound
