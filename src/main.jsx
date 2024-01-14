import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoutes from './MainRoutes';
import About from './Components/About/About';
import Aggregator from './Components/Aggregator/Aggregator';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    children: [
      {
        path: '/about',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/aggregator',
        element: <Aggregator></Aggregator>
      },
    ]
  },





]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
