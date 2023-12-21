import React, { useState } from "react";

import xIcon from "../assets/X.svg";
import hideIcon from "../assets/Hide.svg";
import google from "../assets/Google.svg";

export const Form = () => {
    const [email, setEmail] = useState ('')
    const [passwordShow, setPasswordShow] = useState (false)
    const changePasswordShow = () => {
        setPasswordShow((password) => !password)
    }
    
  return (
    <form className="auth-form" action="">
      <p className="auth-form__title">NFT Access</p>
      <p className="auth-form__desc">
        Please fill your detail to access your account.
      </p>

      <label htmlFor="">
        <span className="auth-form__type">Email</span>
        <div className="input-container">
          <input
            className="auth-form__input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <span className="auth-form__input__icon" onClick={() => setEmail('')}>
            <img src={xIcon} alt="clear" />
          </span>
        </div>
      </label>

      <label htmlFor="">
        <span className="auth-form__type">Password</span>
        <div className="input-container">
          <input
            className="auth-form__input"
            type={passwordShow ? 'text' : 'password'}
            placeholder="Enter your password"
          />
          <span className="auth-form__input__icon" onClick={changePasswordShow}>
            <img src={hideIcon} alt="hide" />
          </span>
        </div>
      </label>

      <div className="auth-form__checking">
        <label className="auth-form__checking__check-container">
          <input className="auth-form__checkbox" type="checkbox" />
          <span className="auth-form__checkbox-custom"></span>
          <span className="auth-form__remember">Remember me</span>
        </label>
        <a href="/" className="auth-form__forget">
          Forgot Password?
        </a>
      </div>

      <button className="btn main-btn">Sign in</button>
      <button className="btn primary-btn">
        <img src={google} alt="google" />
        Sign in with Google
      </button>

      <p className="auth-form__sign">
        Don’t have an account?
        <a className="auth-form__sign__link" href="/">
          Sign up
        </a>
      </p>
    </form>
  );
};
