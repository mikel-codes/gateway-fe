import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Gateway} from '@@/gateway'
import Main from '@@/main'
const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/gateways" element={<Gateway />} />
        </Route>
      </Routes>
    )
}

export default App
