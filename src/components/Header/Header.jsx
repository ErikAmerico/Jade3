
import { useState } from 'react';
//import Navigation from '../NavFolder/Navigation';

import './Head.css';

const initialName = 'Jade 3';
const reversedName = 'Jade III';

// eslint-disable-next-line react/prop-types
export default function Header() {
  const [name, setName] = useState(initialName);
  

  const handleClick = () => {
    setName(name === initialName ? reversedName : initialName);
  };


  return (
    <header className='header'>
      <h1 className='header-title' onClick={handleClick}>{name}</h1>
      {/* <Navigation /> */}
    </header>
  )
}