import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as BR } from 'react-router-dom';
import App from "./App"
import "./App.scss"

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<BR><App tab="home" /></BR>);
