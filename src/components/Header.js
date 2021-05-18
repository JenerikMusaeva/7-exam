import { useState} from 'react'
import { Link } from "react-router-dom";
import Currency from './Currency'

export default function Header({toggleCart, handleCurrencyChange }) {

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__right-side">
        <Currency handleCurrencyChange={handleCurrencyChange}/>
        <button className="btn-sing_in" type="button" value="Sign in">
          Sign in
        </button>
        <button className="btn-register" type="button" value="Register">
          Register
        </button>
        <a onClick={toggleCart} className="icon-link">
          <i className="icon-basket"></i>
        </a>
      </div>
    </div>
  );
}
