import React from 'react'
import logo from '../images/logo.png'
import Header from './Header'
import Fade from 'react-reveal/Fade';

function Main() {
  return (
    <div className="main" id='main'>
      <Header/>
      <Fade>
        <div className="main-logo" >
          <img src={logo} alt=""/>
        </div>
      </Fade>
    </div>
  )
}

export default Main