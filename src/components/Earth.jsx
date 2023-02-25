import React from 'react'
import Fade from 'react-reveal/Fade';

function Earth() {
  return (
    <div className='earth'>
      <div className="earth-content">
        <div className="line"></div>
        <Fade bottom>
        <div className="earth-content__text">
          <p>After completing the preparation of the planet for our favorable existence, the deities sent their people into a long hibernation.</p>
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Earth