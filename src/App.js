import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Gateway, GatewayForm} from '@@/gateway'
import Container from '@@/modals/Container'
import Main from '@@/main'
const App = () => {
    return (
      <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="gateways" element={<Gateway />} />
             <Route path="gateways/edit" element={<Container><GatewayForm /></Container>} />

           <Route path="gateways/new"  element={<Container><GatewayForm /></Container>} />

        </Route>
      </Routes>
      </>
    )
}

export default App
