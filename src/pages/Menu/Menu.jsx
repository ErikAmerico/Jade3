import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';

export default function Menu() {
  return (
    <Parallax className="parallax-section" y={[-20, 20]} tagouter="figure">
    <div className="parallax-content">
      <h1>The menu</h1>
      <p>This is our food</p>
    </div>
  </Parallax>
  )
}