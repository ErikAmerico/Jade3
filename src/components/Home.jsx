import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
      <div>
        <Parallax className="parallax-section" y={[-20, 20]} tagouter="figure">
          <div className="parallax-content">
            <h1>Welcome to Our Restaurant</h1>
            <p>Delicious Food &amp; Great Ambience</p>
          </div>
        </Parallax>
  
        <Parallax className="parallax-section" y={[40, -40]} tagouter="figure">
          <div className="parallax-content">
            <Container>
              <Row>
                <Col md={6}>
                  <h2>About Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                </Col>
                <Col md={6}>
                  <h2>Our Menu</h2>
                  {/* <MenuItems /> */}
                  <p>the menu</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Parallax>
  
        <Parallax className="parallax-section" y={[20, -20]} tagouter="figure">
          <div className="parallax-content">
            <h2>Contact Us</h2>
            {/* <ContactForm /> */}
            <p>contact info</p>
          </div>
        </Parallax>
      </div>
    );
  }