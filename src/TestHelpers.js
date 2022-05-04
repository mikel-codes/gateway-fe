import { Router, Route, BrowserRouter as BR } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import {render , fireEvent, cleanup, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const history = createMemoryHistory()

/*
export const renderWithRouter = (Component) =>
  render(
    <Router history={history}>
      <Route component={Component} />
    </Router>
  )
  */

  export const renderWithRouter = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
      user: userEvent.setup(),
      ...render(ui, {wrapper: BR}),
    }
  }
