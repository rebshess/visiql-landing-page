import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import styles from './_index.scss';
import About from './components/About';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <About />
  </BrowserRouter>
);
