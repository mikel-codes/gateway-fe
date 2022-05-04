import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as BR, MemoryRouter } from 'react-router-dom'
import { render, fireEvent, cleanup, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import { createRoot } from 'react-dom/client';
import userEvent from '@testing-library/user-event'
import {renderWithRouter} from './TestHelpers'
import App from './App';

afterEach(cleanup)

/*
it('renders without crashing', async () => {
  const  div = document.createElement('div');
  const root = createRoot(div)
  await root.render(<BR><App /></BR>);
  root.unmount(div);
});
*/

it('should take a snapshot', () => {
  const { asFragment } = render(<BR><App /></BR>)
  expect(asFragment(<App />)).toMatchSnapshot()
});

test('full app rendering/navigating',   () => {
  renderWithRouter(<App />)
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/gateway/i)).toBeInTheDocument()
  expect(screen.getByText(/devices/i)).toBeInTheDocument()
  const gwLink = screen.getByRole("link", { name: "Gateway" })
  expect(gwLink.getAttribute("href")).toBe("/gateways");
  expect(gwLink.getAttribute("href")).not.toBe("/devices");

  //act(() => { fireEvent.click(gwLink)})

  // check that the content changed to the new page
   //expect(screen.getByText(/no gateways/i)).toBeInTheDocument()
  //expect(screen.getByText(/no gateways/i)).toBeInTheDocument()
})

test('unregistered routes redirect to NotFound comp', () => {
  renderWithRouter(<App />, {route:"/not_found_page"})
  expect(screen.getByText(/Page You Seek Does Not Exist/i)).toBeInTheDocument()
})

/*
test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory()
  const route = '/some-route'
  history.push(route)
  render(
    <Router location={history.location} navigator={history}>
      <LocationDisplay />
    </Router>,
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})
*/
