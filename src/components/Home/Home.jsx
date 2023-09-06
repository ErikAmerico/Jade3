import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

export default function Home() {
    return (
      <div>
        <Parallax className="parallax-section" y={[-20, 20]} tagouter="figure">
          <div className="parallax-content container-fluid">
            <h1>Welcome to Our Restaurant</h1>
            <p>Delicious Food &amp; Great Ambience</p>
          </div>
        </Parallax>

        <div className="welcomeparallax"></div>
        
  
        <Parallax className="parallax-section" y={[40, -40]} tagouter="figure">
          <div className="parallax-content container-fluid">
                  <h2>Our Menu</h2>
                  {/* <MenuItems /> */}
                  <p>the menu</p>
          </div>
        </Parallax>
  
        <Parallax className="parallax-section" y={[20, -20]} tagouter="figure">
          <div className="parallax-content container-fluid">
            <h2>Contact Us</h2>
            {/* <ContactForm /> */}
            <p>contact info</p>
          </div>
        </Parallax>

        <Parallax className="parallax-section" y={[20, -20]} tagouter="figure">
          <div className="parallax-content container-fluid">
          <div className="elfsight-app-72653ebf-0af8-4da1-bc2e-f0bbdb08275a" id='reviews'></div>
          </div>
        </Parallax>

        


      </div>
    );
  }
