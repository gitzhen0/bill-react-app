import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from '@/'

const root = ReactDOM.createRoot(document.getElementById('root'));

const total = sum(1, 3)
console.log(total)

root.render(
  <App />
);
