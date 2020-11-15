import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

      <header className="header">
        <Link className="link-list" to="/list"><h1>Redux Market</h1></Link>
        <div className="basket">
          <i className="fa fa-shopping-basket" />
        </div>
      </header>

    </>
  );
}

export default Header;
