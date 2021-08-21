import React from 'react';
import './styles.scss';
// import Logo from '../../assets/graphics/undraw_mobile_testing_reah.png';

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src="https://raw.githubusercontent.com/simpletut/Testing-React-Redux-with-Jest-and-Enzyme/master/src/assets/graphics/logo.png" alt="Logo" />
        </div>
      </div>
    </header>
  )
};

export default Header;