
import "./App.css"
import Main from './components/Main'
import Story from './components/Story'
import Background from './components/Background'
import Nagas from './components/Nagas'
import Earth from './components/Earth'
import Footer from './components/Footer'
import Picks from './components/Picks'
import Faq from "./components/Faq"

import { useEffect, useState } from "react"
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 700)
  },[loading])
  if(loading){
    return <div className="spinner"></div>
  } else{
    return (
      <div>
        <Main/>
        <Story/>
        <Background/>
        <Nagas/>
        <Picks/>
        <Earth/>
        <Footer/>
        <Faq/>
      </div>
    )
  }
  
}

export default App
