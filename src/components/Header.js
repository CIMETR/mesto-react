import logo from '../images/Vector.svg'
import React from 'react'

function Header() {
  return (
    <header className="header">
    <img src={logo} alt="логотип сайта Место" className="header__logo" />
    </header>
  )
}

export default Header