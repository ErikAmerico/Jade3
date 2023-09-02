import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home'
import WhoWeAre from './pages/WhoWeAre/WhoWeAre'
import Menu from './pages/Menu/Menu'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/WhoWeAre',
        element: <WhoWeAre />,
      },
      {
        path: '/Menu',
        element: <Menu />,
      },
      {
        path: '/Gallery',
        element: <Gallery />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);