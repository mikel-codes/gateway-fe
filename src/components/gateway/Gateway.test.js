
import React from "react";
//import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {Router} from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect';
import {renderWithRouter} from '@/TestHelpers'
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Gateway from "./Gateway";
import GatewayDetail from "./GatewayDetail"
import GatewayForm from "./GatewayForm"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
const history = createMemoryHistory()

afterEach(cleanup)

it("renders successfully Gateway List", () => {
  //const cont= renderWithRouter(<Gateway />, container);
  /*act(() =>  render(
    <Router  location={history.location} navigator={history}>
      <Gateway/>
    </Router>, container));
    */
  renderWithRouter(<GatewayForm />)
  expect(screen.getByRole('table')).toHaveTextContent("No Gateways");
  expect(screen.getByRole('button')).toHaveTextContent(/Add gateway/i)

  fireEvent.click(screen.getByText(/add gateway/i))
  expect(history.location.pathname).toBe('/new')
  expect(history.location.state).toBeNull()

  const detail =   render(
    <Router  location={history.location} navigator={history}>
      <GatewayForm />
    </Router>);
    //console.log(detail)
    expect(screen).toMatchSnapshot(detail)
  //expect(screen.getByTestId('portal')).not.toBeNull()
});

it("renders successfully Gateway Detail", () => {
  const fakeGateway = {
    name: "Gateway1",
    serial: "91992929292",
    ipv4: "1.1.2.3",
    devices: []
  };

  renderWithRouter(<GatewayDetail gateway={fakeGateway} />)
  expect(screen.getByRole('li')).toHaveTextContent("Gateway1");
  //expect(screen.getByRole('button')).toHaveTextContent(/Add gateway/i)

  //expect(history.location.pathname).toBe('/new')
  //expect(history.location.state).toBeNull()


    //expect(screen).toMatchSnapshot(detail)
  //expect(screen.getByTestId('portal')).not.toBeNull()
});


//it("renders the detail correctly", )



/*
act(() => {render(<Gateway name="Margaret" />, container);});
expect(container.textContent).toBe("Hello, Margaret!");

it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(fakeUser)
  }));
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated  global.fetch.mockRestore();});
*/
