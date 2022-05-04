import React from 'react'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="tabs">
      <h1>Page You Seek Does Not Exist</h1>
      <button onClick={() => navigate('gateways')}>Go Back</button>
    </div>
  )
}

export default NotFound
