import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
 
  
  RouterProvider,
} from "react-router-dom";



import Root from './Layout/Root.jsx';
import PostDetais from './post/PostDetais.jsx';

const router = createBrowserRouter([

  {path:'/',
element:<Root></Root>}
,

{
  path:'/post/:idx',
  loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.idx}`),
  element:<PostDetais></PostDetais>
}




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
