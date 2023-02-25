import React from 'react'
import item1 from '../images/1.png'
import item2 from '../images/2.png'
import item3 from '../images/3.png'
import item4 from '../images/4.png'
import item5 from '../images/5.png'
import item6 from '../images/6.png'
import item7 from '../images/7.png'
import item8 from '../images/8.png'
import item9 from '../images/9.png'
import Fade from 'react-reveal/Fade';

function Picks() {
  return (
    <div className='picks' id='sneakpics'>
      <div className="container">
        
        <div className="picks-wrap">
        <Fade>
          <div className="sneakpicks">
            <div className="sneakpicks-item">
              <img src={item6} alt=""/>
            </div>
            <div className="sneakpicks-item">
              <img src={item2} alt="" />
            </div>
            <div className="sneakpicks-item">
              <img src={item3} alt="" />
            </div>
            <div className="sneakpicks-item">
              <img src={item1} alt="" />
            </div>
            <div className="sneakpicks-item">
              <img src={item5} alt="" />
            </div>
            <div className="sneakpicks-item">
              <img src={item4} alt="" />
            </div>
            <div className="sneakpicks-item">
              <img src={item8} alt="" />
            </div>
            <div className="sneakpicks-item">
              <img src={item7} alt="" />
            </div>
            <div className="sneakpicks-item">
              <img src={item9} alt="" />
            </div>
          </div>
          </Fade>
          <Fade>
            <div className="picks-text">
              <h2>THE COLLECTION</h2>
              <p>Draconomorphism - collection of 5555 supply, which wanted to unite the most different features and capabilities of the Al and provide them to its holders. But it doesn't forget about keeping the project global in the NFT sphere.<br/><br/> Utilities, features and big news will be announced very soon.</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Picks