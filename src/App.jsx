
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
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Home />
      </div>
    </ParallaxProvider>
  );
}

export default App;
