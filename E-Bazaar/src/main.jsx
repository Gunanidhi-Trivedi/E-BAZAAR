import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter> 
  </StrictMode>

)
