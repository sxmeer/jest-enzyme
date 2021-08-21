import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/undraw_mobile_testing_reah.png';

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  )
};

export default Header;