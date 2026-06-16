import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import Layout from "./Layout";
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Github, {githubInfoLoader} from './components/Github/Github';
import User from './components/User/User'

// {First way to create router}

// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: "About",
//       element: <About/>
//     },
//     {
//       path: "Contact",
//       element: <Contact/>
//     },
//     {
//       path: "Github",
//       element: <Github/>
//     }
//   ]
// }
// ])

// {Second way to create router}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github'
      element={<Github />} />
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
