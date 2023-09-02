import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';

export default function Gallery() {
  return (
    <Parallax className="parallax-section" y={[-20, 20]} tagouter="figure">
    <div className="parallax-content">
      <h1>This is some pics</h1>
      <p>These are our picrtures</p>
    </div>
  </Parallax>
  )
}