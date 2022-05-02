import React , {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import Side from "./Side"
import ErrorBoundary from './ErrorBoundary'

const Main = (props) => {
  return (
    <>
    <Side />
    <main className="wrap-all-the-things">
      <ErrorBoundary>
        <Suspense fallback={<div className="loader"></div>}>
          <Outlet />
      </Suspense>
      </ErrorBoundary>
    </main>
    </>
  )
}

export default Main
