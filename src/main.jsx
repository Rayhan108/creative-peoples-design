import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './routes/router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='overflow-hidden'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
