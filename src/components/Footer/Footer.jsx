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
import { FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p xs={6}>Developed by Erik Olson</p>
        <div className="social-icons" xs={6} id='facebook-columnFooter'>
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
      </div>
    </footer>
  );
}
