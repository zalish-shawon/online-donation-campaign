import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/mainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/details/Details.jsx';
import Donation from './components/donation/Donation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        loader: () => fetch('/public/donate.json'),
        element: <Details></Details>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
