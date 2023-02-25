import React from 'react'
import footer from '../images/footer2.jpg'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-content__text">
          <p>But how long will they stay in a dream?</p>
        </div>
        <div className="footer-image">
          <img src={footer} alt="" />
        </div>
        <div className="footer-content__text2">
          <p>Nobody knows</p>
        </div>
      </div>
    </div>
  )
}

export default Footer