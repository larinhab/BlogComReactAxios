import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Home from './routes/Home/Home.jsx'
import Newpost from './routes/Newpost/Newpost.jsx'
import Admin from './routes/Admin/Admin.jsx'

import Post from './routes/Post/Post.jsx'
import Editpost from './routes/EditPost/Editpost.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/newpost",
        element: <Newpost/>
      },
      {
        path: '/posts/:id',
        element: <Post/>
      },
      {
        path: '/admin',
        element: <Admin/>
      },
      {
        path: '/post/edit/:id',
        element: <Editpost/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
