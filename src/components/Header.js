import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../pages/NavMenu';
// import '../css/header.scss';

const Header = () => {
  return (
    <header className='Header inner'>
      <h1>
        <Link to='/'>
          <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt=''/>
        </Link>
      </h1>
      <nav>
        <NavMenu/>
      </nav>
    </header>
  )
}

export default Header