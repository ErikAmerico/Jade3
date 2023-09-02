import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';

export default function WhoWeAre() {
  return (
    <Parallax className="parallax-section" y={[-20, 20]} tagouter="figure">
    <div className="parallax-content">
      <h1>Who we are!</h1>
      <p>This is us</p>
    </div>
  </Parallax>
  )
}