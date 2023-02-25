import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className="faq" id='faq'>
      <div className='container'>
        <h2 className='faq-title'>FAQ</h2>
        <Accordion/>
      </div>
    </div>
  )
}

export default Faq