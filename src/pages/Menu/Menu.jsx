
import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Menu.css';

export default function Menu() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  const goNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
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
      <Parallax className="parallax-section" id='menuParallaxSection' y={[-20, 20]} tagouter="figure">

      <div className="carousel-navigation" id='menuPrevPageContain'>
        <Button onClick={goNext} id="menuPrevPage" className='menu-button'>&#9668;&#9668;</Button>
      </div>

        <Container fluid className="menu-container mt-5 mb-5">
          <Row className="justify-content-center">
            <Col md={11}>
              <Carousel
              selectedItem={currentSlide} 
              showStatus={false} 
              showThumbs={false} 
              showArrows={false} 
              className='carousel'
              onChange={handleChange}
              >
                <div id='carouselImage1' style={{ transform: `rotateY(${currentSlide * -180}deg)` }}>
                  <img src="/images/menu1.jpeg" alt="menu1" className='carouselmenuimage'/>
                </div>
                <div id='carouselImage2' style={{ transform: `rotateY(${currentSlide * -360}deg)` }}>
                  <img src="/images/menu2.jpeg" alt="menu2" className='carouselmenuimage'/>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>

        <div className="carousel-navigation" id='menuNextPageContain'>
        <Button onClick={goNext} id="menuNextPage" className='menu-button'>&#9658;&#9658;</Button>
      </div>

      </Parallax>
    </div>
  );
}

