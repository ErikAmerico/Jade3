import { Parallax } from 'react-scroll-parallax';
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const menuPages = [
  {
    title: 'Page 1',
    image: '/images/carMen1.png',
  },
  {
    title: 'Page 2',
    image: 'images/carMen2.png',
  },
  {
    title: 'Page 3',
    image: 'images/carMen3.png',
  },
  {
    title: 'Page 4',
    image: 'images/carMen4.png',
  },
  {
    title: 'Page 5',
    image: 'images/carMen5.png',
  },
  {
    title: 'Page 6',
    image: 'images/carMen6.png',
  },
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

    useEffect(() => {
    const prevPageContain = document.getElementById('menuPrevPageContain');
    const nextPageContain = document.getElementById('menuNextPageContain');

    if (currentSlide === 0) {
      if (prevPageContain) prevPageContain.style.display = 'none';
      if (nextPageContain) nextPageContain.style.display = 'block';
    } else {
      if (prevPageContain) prevPageContain.style.display = 'block';
      if (nextPageContain) nextPageContain.style.display = 'none';
    }
  }, [currentSlide]);

    return (
      <div>

        <div className="welcomeparallax"></div>
        
      <Col md={5} sm={12} className='menu-section'>
        <Container fluid className="menu-container mt-5 mb-5">
          <Row className="justify-content-left">
            <Carousel
              selectedItem={currentSlide} 
              showThumbs={false}
              showStatus={false}
              showArrows={false} 
              onChange={handleChange}
              className='custom-carousel'>
              {menuPages.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt={item.title} className="carousel-image" />
                  <button
                  className={`left-button ${currentSlide === 0 ? 'hidden' : ''}`}
                  onClick={() => setCurrentSlide((prevSlide) => prevSlide - 1)}
                >
                  &#9668;
                </button>
                <button
                  className={`right-button ${currentSlide === menuPages.length - 1 ? 'hidden' : ''}`}
                  onClick={() => setCurrentSlide((prevSlide) => prevSlide + 1)}
                >
                  &#9658;
                </button>
                </div>
              ))}
              
              </Carousel>
          </Row>
          </Container>
        </Col>


        <Parallax className="parallax-section" y={[20, -20]} tagouter="figure">
          <div className="parallax-content container-fluid">
          <div className="elfsight-app-72653ebf-0af8-4da1-bc2e-f0bbdb08275a" id='reviews'></div>
          </div>
        </Parallax>

      </div>
    );
  }
