
// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
// import { Container, Row, Col } from 'react-bootstrap';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// // import MenuItems from './MenuItems'; // Import your menu items component
// // import ContactForm from './ContactForm'; // Import your contact form component
// import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

// import { Parallax } from 'react-scroll-parallax';
// import { Container, Row, Col } from 'react-bootstrap';
// import MenuItems from './MenuItems'; // Import your menu items component
// import ContactForm from './ContactForm'; // Import your contact form component

//import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Subheader from './components/Subheader/Subheader';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="headerContainer">
    <Header />
    <Subheader />
    </div>
    <ParallaxProvider>
      <div className="App">
        <Outlet />
      </div>
    </ParallaxProvider>
    <Footer />
    </>
  );
}

export default App;
