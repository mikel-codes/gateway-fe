import React, {useState} from 'react'
import {useLocation} from "react-router-dom"
import {FormValidator, ValidationMessage} from '@@/forms'
import {createApi, updateApi} from "@@/utils"


const GatewayForm = () => {
  let initialState = {
    serial: "",
    name: "",
    ipv4: "",
  }
  let gatewayRules =  {
    serial: { required:true, minlength: 5, maxlength: 12, numeric: true },
    name: { required: true, minlength: 5, maxlength: 10, alpha: true },
    ipv4: { required: true, ipv4: true }
  }
  let gw = null
  const loc =  useLocation()

  if(loc.state !== null){
    const {gateway} = loc.state
    gw = gateway
    initialState = {
      serial: gw.serial,
      name: gw.name,
      ipv4: gw.ipv4
    }
  }

  const [payload, setPayload] = useState(initialState)
  const [rules, setRules] = useState(gatewayRules)

  const handleSubmit = async (payload) => {
    let resp = null
    if(gw == null)
      resp =await createApi("gateways/", payload)
    else
      resp = await updateApi(`gateways/${gw.id}/`, payload)
    if(resp.status == 201)
      alert("created successfully")
    if(resp.status == 200)
      alert("updated successfully")


  }

  return (
    <FormValidator data={payload} rules={rules} submit={handleSubmit} isEdit={loc.state}>
      <div className="form">
        <div className="form_field">
          <label htmlFor="serial">Serial</label>
          <input name="serial" defaultValue={payload.serial} onChange={e => setPayload({...payload, serial: e.target.value}) }/>
           <ValidationMessage field="serial" />
        </div>
        <div className="form_field">
          <label htmlFor="name">Name</label>

          <input name="name" defaultValue={payload.name} onChange={e => setPayload({...payload, name: e.target.value}) } />
            <ValidationMessage field="name" />
        </div>

        <div className="form_field">
          <label htmlFor="ipv4">IPv4</label>
          <input name="ipv4" name="ipv4" defaultValue={payload.ipv4} onChange={e => setPayload({...payload, ipv4: e.target.value}) } />
          <ValidationMessage field="ipv4" />
        </div>
      </div>
  </FormValidator>
  )
}

export default GatewayForm

//<input type="submit"  value="Create Gateway" />
