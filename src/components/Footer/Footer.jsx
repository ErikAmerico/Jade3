// import './Foot.css'
// import { FaFacebook } from 'react-icons/fa';
// import { IconContext } from 'react-icons';

// export default function Footer() {
//     return (
//         <footer>
//             <div className="">
//                 <p>2023 Jade 3 | Developed by Erik Olson</p>
//             </div>
//         </footer>
//     );
// }

import './Foot.css';
// import { FaFacebook } from 'react-icons/fa';
// import { IconContext } from 'react-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="container">
          <div className='row'>


          <div className='footer-adress text-center col-lg-3 col-md-3 col-sm-12 col-xs-12'>
            <h3>Our Address</h3>
            <p>
              Jade III Chinese Cuisine
              <br />
              2 Market St
              <br />
              Amesbury, MA 01913
            </p>
            <a href="https://www.google.com/maps/place/2+Market+St,+Amesbury,+MA">View on Map</a>
          </div>

          <div className="footer-hours text-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Hours of Operation</h3>
            <ul>
              <li>Mon-Thurs: 11:30 AM-9:00 PM</li>
              <li>Fri & Sat: 11:30 AM-10:30 PM</li>
              <li>Sun: 12:00 PM-9:00 PM</li>
            </ul>
          </div>

          <div className="footer-adress text-center col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <h3 className='footer-contact'>Contact Us</h3>
            <p>
              <a href="tel:978-388-0500">Phone: 978-388-0500</a>
            </p>
          </div>
      
          </div>
        </div>
      </div>

      <div className="footer-content">
        <a href="https://eriksportoflio.netlify.app/" target="_blank" rel="noopener noreferrer" id='erikfooterlink'>
          <p xs={6}>Developed by Erik Olson</p>
        </a>
        {/* <div className="social-icons" xs={6} id='facebook-columnFooter'>
          <a
            href="https://www.facebook.com/jade3amesbury3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider value={{ className: 'icon' }}>
              <FaFacebook style={{ color: '#3b5998' }} />
            </IconContext.Provider>
          </a>
        </div> */}
      </div>
    </footer>
  );
}
