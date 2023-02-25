import React from 'react'
import terra from '../images/ground2.png'
import Fade from 'react-reveal/Fade';

function Background() {

  return (
    <div className="background" id='terra'>
      <div className="container">
        <Fade bottom>
          <div className="wrap">
            <div className="background-text">
              <h2>Terra Incognita</h2>
              <p>Draconomorphism Land- GEN 0 collection with a very small supply, which will carry tremendous value on GEN 1, at that, the lands will have their own character. We would like to introduce the Basilisk, which will decorate your land. A special utility will also be presented on the discord server.</p>
            </div>
            <div className="terra-img">
              <img src={terra} alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Background