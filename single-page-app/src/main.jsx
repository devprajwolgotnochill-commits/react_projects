import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import User from './components/user/user.jsx'
import Github from './components/github/github.jsx'
import { githubInfoLoader } from './components/github/githubInfoLoader.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)