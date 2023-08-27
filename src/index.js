import { createRoot } from 'react-dom/client'; 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
