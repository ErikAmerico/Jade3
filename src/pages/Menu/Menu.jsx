
import { Parallax } from 'react-scroll-parallax';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import './Menu.css';

export default function Menu() {
  return (
    <div>
      <Parallax className="parallax-section" id='menuParallaxSection' y={[-20, 20]} tagouter="figure">

      <div className="menu-carousel container">
        <Carousel showStatus={false} showThumbs={false} showArrows={true} className='carousel'>
          <div id='carouselImage1'>
            <img src="/images/menu1.jpeg" alt="menu1" className='carouselmenuimage'/>
          </div>
          <div id='carouselImage2'>
            <img src="/images/menu2.jpeg" alt="menu2" className='carouselmenuimage'/>
          </div>
        </Carousel>
      </div>

      </Parallax>
    </div>
  );
}
