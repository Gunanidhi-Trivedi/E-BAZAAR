import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
// import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(

  //to use auth0 should install package as : npm install @auth0/auth0-react  (only if "npm run dev" not working);
  <Auth0Provider
    domain="dev-rh3jsgr025tlwwps.us.auth0.com"
    clientId="q4UQwf2dGlZjGbtJi39D4eAdsMG6Wefz"
    authorizationParams={{
      redirect_uri: window.location.origin}}>

    <BrowserRouter>
      <App/>
    </BrowserRouter> 

  </Auth0Provider>

)

