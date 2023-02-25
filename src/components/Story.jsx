import React from 'react'
import Fade from 'react-reveal/Fade';

function Story() {
  return (
      <div className='story'>
        <Fade bottom>
          <h2 className="story-title">THE ORIGIN</h2>
          <div className="story-text">
            <p className="story-text_item">Before the evolutionary progress people appeared on our planet,  millions of years ago on Earth only primitive types of life existed.</p>
            <p className="story-text_item">Everyone blindly trust this theory.</p>
            <p className="story-text_item">But if we opened the door to the real truth, would you believe.</p>
            {/* <p className="story-text_item additional">Get ready to find out the truth</p> */}
          </div>
        </Fade>
      </div>
  )
}

export default Story