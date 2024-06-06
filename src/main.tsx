import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignUpPage from './login/SignUpPage.tsx';
import App from './App.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Selector from './dashboard/Selector.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}><SignUpPage /></GoogleOAuthProvider>,
  },
  {
    path: "dashboard",
    element: <Selector />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
