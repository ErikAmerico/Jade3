

import { FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from '../NavFolder/Navigation';
import './Head.css';

const logo = <img src="/images/jadeLogo.png" alt="" id="headerLogo" />;

export default function Header() {

  return (
    <>
      <header className="header">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={12} md={4}>
              <div className="header-title">
                {logo}
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div>
                <a href="http://www.enjoymenus.com/ViewMenus.aspx?RestaurantID=e36cd478-865a-439c-a3f5-c96d71bd387b">
                  <img src="/images/orderOnline.png" alt="" id="orderOnline" />
                </a>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/jade3amesbury3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider value={{ className: 'icon' }}>
                    <FaFacebook style={{ color: '#3b5998' }} />
                  </IconContext.Provider>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <Navigation />
    </>
  );
}
