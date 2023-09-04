import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

import App from './App'
import Home from './components/Home/Home.jsx'
import WhoWeAre from './pages/WhoWeAre/WhoWeAre.jsx'
import Menu from './pages/Menu/Menu.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import Contact from './pages/Contact/Contact.jsx'


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