import React from 'react'

import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <a href="/" className='auth-header'>
        <div className='auth-header__logo'>
            <img src={logo} alt="logo" />
        </div>
        <span className='auth-header__text'>
            PNFT Market
        </span>
    </a>
  )
}
