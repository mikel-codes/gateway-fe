import React, {useState} from 'react'
import {FormValidator, ValidationMessage} from '@@/forms'
import {axiosApi} from '@@/api'

let initialState = {
  serial: "",
  name: "",
  ipv4: "",
}

let gatewayRules =  {
  serial: {required:true, minlength: 5, maxlength: 12, numeric: true},
  name: {required: true, minlength: 5, maxlength: 10, alpha: true},
  ipv4: {required: true, ipv4: true}
}
const GatewayForm = () => {
  const [payload, setPayload] = useState(initialState)
  const [rules, setRules] = useState(gatewayRules)

  const handleSubmit = (payload) => {
    axiosApi.post("gateways/", payload).then(res => {
      if(res.status== 201)
        alert("created a new gateway")
    }).catch(e => console.log(e))
  }

  return (
    <FormValidator data={payload} rules={rules} submit={handleSubmit}>
      <div className="form">
        <div className="form_field">
          <label htmlFor="serial">Serial</label>
          <input name="serial" default={payload.serial} onChange={e => setPayload({...payload, serial: e.target.value}) }/>
           <ValidationMessage field="serial" />
        </div>
        <div className="form_field">
          <label htmlFor="name">Name</label>

          <input name="name" default={payload.name} onChange={e => setPayload({...payload, name: e.target.value}) } />
            <ValidationMessage field="name" />
        </div>

        <div className="form_field">
          <label htmlFor="ipv4">IPv4</label>
          <input name="ipv4" name="ipv4" default={payload.ipv4} onChange={e => setPayload({...payload, ipv4: e.target.value}) } />
          <ValidationMessage field="ipv4" />
        </div>

      </div>

  </FormValidator>
  )
}

export default GatewayForm

//<input type="submit"  value="Create Gateway" />
