import React from 'react'
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { useNavigate } from 'react-router-dom'
const Container = ({ children }) => {
  const portalDOM = document.getElementById('app')
  let navigateTo = useNavigate()
  return ReactDOM.createPortal(
    <div className="root">
      <div className="ccontainer">
        <div className="md-modal md-effect-1  md-show" id="modal-1">
          <div className="md-content">
            {children}
          </div>
          <button className="md-close btn-round" onClick={() => navigateTo(-1)}>
            <i style={{ background: "dodgerblue" }} className="fa-solid fa-close"></i></button>
        </div>
      </div>
      <div id="md-overlay"></div>
    </div>
    , portalDOM)
}



export default Container
