import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { FormValidator, ValidationMessage } from '@@/forms'
import { createApi, updateApi, listApi } from "@@/utils"


const DeviceForm = () => {
  let initialState = {
    vendor: "",
    gateway: null
  }
  let deviceRules = {
    vendor: { required: true, minlength: 5, maxlength: 12, numeric: true },
  }
  let dev = null
  const loc = useLocation()

  if (loc.state !== null) {
    const { device } = loc.state
    dev = device
    initialState = {
      vendor: dev.vendor,
      gateway: dev.gateway
    }
  }

  const [payload, setPayload] = useState(initialState)
  const [rules, setRules] = useState(deviceRules)
  const [loading, setLoading] = useState(false)
  const [gateways, setGateways] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    setLoading(true)

    async function fetchApi() {
      const resp = await listApi("gateways/")
      if (resp.status == 200) setGateways(resp.data)
    }
    fetchApi()
    setLoading(false)
  }, [])

  const handleSubmit = async (payload) => {
    let resp = null
    setLoading(true)
    if (dev == null)
      resp = await createApi("devices/", payload)
    else
      resp = await updateApi(`devices/${dev.id}/`, payload)

    if (resp.status == 201)
      alert("created successfully")
    else if (resp.status == 200)
      alert("updated successfully")
    else
      setErrors(resp)
    setLoading(false)
  }


  return (
    <FormValidator data={payload} rules={rules} submit={handleSubmit} isEdit={loc.state !== null} name={"Device"}>
      <div className="form">
        <center>
          {errors !== null && Object.keys(errors).map((e, i) => <div className="error_field" key={i}>
            {e} - {errors[e]}
          </div>)}
        </center>

        <div className="form_field">
          <label htmlFor="vendor">Vendor</label>
          <input disabled={loc.state !== null && loc.state.disabled == true} name="vendor" defaultValue={payload.vendor} onChange={e => setPayload({ ...payload, vendor: e.target.value })} />
          <ValidationMessage field="vendor" />
        </div>


        <div className="form_field">
          <label htmlFor="gateway">Gateway</label>
          <select defaultValue={payload.gateway !== null ? payload.gateway.id : ""} onChange={e => (setPayload({ ...payload, gateway: e.target.value }))}>
            <option value="" disabled>
              choose gateway
            </option>
            {gateways.length > 0 && gateways.map((g, i) =>
              <option value={g.id} key={i}>{g.name}</option>)}
          </select>
        </div>
        {loading && <span className="loader"></span>}

      </div>

    </FormValidator>
  )
}

export default DeviceForm
