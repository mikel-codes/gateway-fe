import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Gateway, GatewayForm, GatewayDetail} from '@@/gateway'
import {Devices, DeviceForm} from '@@/devices'
import Container from '@@/modals/Container'
import NotFound from '@@/NotFound'
import Main from '@@/main'

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Main />}>

          {/* Gateway Routes */}
          <Route path="gateways" element={<Gateway />} />
          <Route path="gateways/edit"
              element={<Container><GatewayForm /></Container>}
            />
          <Route path="gateways/new"
            element={<Container><GatewayForm /></Container>}
          />
        <Route path="gateways/showing/:gateway_id" element={<GatewayDetail />} />

          {/* Devices Routes */}
          <Route path="devices" element={<Devices/>} />
          <Route path="devices/new" element={<Container><DeviceForm /></Container>} />
          <Route path="devices/edit" element={<Container><DeviceForm /></Container>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
}

export default App
