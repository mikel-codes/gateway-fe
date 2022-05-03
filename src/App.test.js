import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as BR } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';

it('renders without crashing', () => {
  const  div = document.createElement('div');
  const root = createRoot(div)
  root.render(<BR><App /></BR>);
  root.unmount(div);
});
