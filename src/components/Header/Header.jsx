
import { useState } from 'react';
//import Navigation from '../NavFolder/Navigation';
import { FaFacebook } from 'react-icons/fa';
import { IconContext } from 'react-icons';

//import Subheader from '../Subheader/Subheader'
import './Head.css';


const logo = <img src="/images/jadeLogo.png" alt="" id='headerLogo' />
const initialName = logo;
const reversedName = 'Jade 3';

// eslint-disable-next-line react/prop-types
export default function Header() {
  const [name, setName] = useState(initialName);
  

  const handleClick = () => {
    setName(name === initialName ? reversedName : initialName);
  };

  return (
    <>
    <header className='header'>
      <h1 className='header-title' onClick={handleClick}>{name}</h1>
      {/* <Navigation /> */}
      <div>
                <a href="http://www.enjoymenus.com/ViewMenus.aspx?RestaurantID=e36cd478-865a-439c-a3f5-c96d71bd387b">
                    <img src="/images/orderOnline.png" alt="" id='orderOnline'/>
                </a>
      </div>
      <div className="social-icons">
                <a href="https://www.facebook.com/jade3amesbury3" target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ className: 'icon' }}>
                    <FaFacebook style={{ color: '#3b5998' }} />
                    </IconContext.Provider>
                </a>
      </div>
    </header>
    {/* <Subheader /> */}
    </>
  )
}