import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TenantUI from './Components/TenantUI';

ReactDOM.render(
  <React.StrictMode>
    <TenantUI />
  </React.StrictMode>,
  document.getElementById('root')
);
