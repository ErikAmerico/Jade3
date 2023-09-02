
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Parallax } from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <div className="headerContainer">
    <Header />
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
