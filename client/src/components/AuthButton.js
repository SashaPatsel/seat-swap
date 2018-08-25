import React, { Component } from "react";

const AuthButton = props => (
  <div className={`auth-button auth-button--${props.company}`}>
      <img className="auth-button__img" src={props.logo} />
  </div>
)

export default AuthButton;

// "https://1.bp.blogspot.com/-WSdqH3gMHDk/U-xndvvQYrI/AAAAAAAABwg/9OLHbIjiTF8/s1600/facebook%2Blogo%2Bpng%2Btransparent%2Bbackground.png"