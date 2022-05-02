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
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  const handleSubmit = async (payload) => {
    let resp = null
    setLoading(true)
    if(gw == null)
      resp =await createApi("gateways/", payload)
    else
      resp = await updateApi(`gateways/${gw.id}/`, payload)
    if(resp.status == 201)
      alert("created successfully")
    else if(resp.status == 200)
      alert("updated successfully")
      else
        setErrors(resp)
      setLoading(false)


  }

  return (
    <FormValidator data={payload} rules={rules} submit={handleSubmit} isEdit={loc.state !==  null} name={"Gateway"}>
      <div className="form">
        <center>
        {errors !== null && Object.keys(errors).map((e,i) => <div className="error_field" key={i}>
          {e} - {errors[e]}
      </div>)}
    </center>
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
        {loading && <span className="loader"></span>}

      </div>
  </FormValidator>
  )
}

export default GatewayForm
