import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);