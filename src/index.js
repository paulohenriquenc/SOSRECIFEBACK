import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from '../src/routes/home/Home';
import About from '../src/routes/about/About';
import Inicio from '../src/routes/inicio/Inicio';
import Register from '../src/routes/register/Register';
import Time from '../src/routes/time/time';

//const router = createBrowserRouter([

  //{
    //path: "/",
    //element: <Home />,
  //},
  
 // {
   // path: "about",
    //element: <About />,
  //},

//])

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "Home",
        element: <Home />,
      },
      
      {
        path: "About",
        element: <About />,
      },

      {
        path: "Inicio",
        element: <Inicio />,
      },

      {
        path: "Register",
        element: <Register />,
      },

      {
        path: "Time",
        element: <Time />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
