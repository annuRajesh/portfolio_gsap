import React, { useEffect, useLayoutEffect } from 'react'

import Home from './pages/Home'
import Preloader from './pages/Preloader'
import gsap from 'gsap'

const App = () => {
  
  return (
    <div className='overflow-x-hidden'>
     <Preloader/>
     <Home/>
    
    </div>
    
  )
}

export default App