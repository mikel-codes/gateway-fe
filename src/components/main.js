import React from 'react'
import {Outlet} from 'react-router-dom'
import Side from "./Side"

const Main = (props) => {
  return (
    <>
    <Side />
    <main className="wrap-all-the-things">
      <Outlet />
    </main>
    </>
  )
}

export default Main
