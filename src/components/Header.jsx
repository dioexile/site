import React, {useState, useLayoutEffect} from 'react'
import Twitter from '../images/Twitter.svg'
import Discord from '../images/Discord.svg'
import { Link, animateScroll } from 'react-scroll'

function Header() {
  const [fix, setFix] = useState('header')
  useLayoutEffect(() => {
    const mainHeader = document.getElementById('mainHeader')
    const fixedHeader = () => {
      if (window.pageYOffset > 600) {
        mainHeader.classList.add('fix')
      } else {
        mainHeader.classList.remove('fix')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  
  return (
    <nav className={fix} id='mainHeader'>
      <div className='nav-logo'>
      <Link to="main" smooth={true} duration={500}>
        <h1>Draconomorphism</h1>
      </Link>
      </div>
      <ul className="nav-menu">
        <li className="nav-item animate__animated animate__fadeInLeft" >
          <Link to="terra" offset={-200} smooth={true} duration={700}>
            Terra
          </Link>
        </li>
        <li className="nav-item">
          <Link to="sneakpics" smooth={true} duration={1000}>
            Sneak pics
          </Link>
        </li>
        <li className="nav-item">
          <Link to="faq" smooth={true} duration={1200}>
            FAQ
          </Link>
        </li>
      </ul>
      <ul className="nav-social">
        <a href="https://twitter.com/draconomorphism?s=21&t=yKilmKX7phV5I4Wfo6mk9w" target="_blank" className='nav-social_item'>
          <img src={Twitter}/>
        </a>
        <a href="https://discord.gg/draconomorphism" target="_blank" className='nav-social_item'>
          <img src={Discord}/>
        </a>
      </ul>
    </nav>
  )
}

export default Header