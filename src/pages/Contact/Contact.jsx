import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <Parallax className="parallax-section" y={[-20, 20]} tagouter="figure">
    <div className="parallax-content">
      <h1>This is how you can reach us</h1>
      <p>This is our contact info</p>
    </div>
  </Parallax>
  )
}