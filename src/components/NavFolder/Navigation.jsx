
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Nav.css';

function Navigation() {
  const currentPage = useLocation().pathname;
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  const handleSelect = () => {
    setExpanded(false);
  };

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      !event.target.classList.contains('navbar-toggler-icon')
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Navbar expand="md" variant="light" bg="light" className='nav nav-tabs navbar' expanded={expanded} id='NavigationContainer'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
      <Navbar.Collapse id="basic-navbar-nav" ref={navRef}>
        <Nav className="nav-fill w-100" onClick={handleSelect}>
          <Nav.Link
            as={Link}
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            <span className="nav-link-text">Home</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/WhoWeAre"
             className={
            currentPage === '/WhoWeAre' ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="nav-link-text">Who We Are</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Menu"
             className={
               currentPage === '/Menu' ? 'nav-link active' : 'nav-link'
             }
           >
            <span className="nav-link-text">Menu</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Gallery"
             className={
               currentPage === '/Gallery' ? 'nav-link active' : 'nav-link'
             }
          >
            <span className="nav-link-text">Gallery</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Contact"
             className={
               currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
             }
          >
            <span className="nav-link-text">Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
