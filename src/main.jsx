import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirebaseProvider from '../Firebase/FirebaseProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Components/Homepage.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    element:<Homepage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <FirebaseProvider>
      <RouterProvider router={router}>      
       <App />
      </RouterProvider>
     </FirebaseProvider>
    
)
