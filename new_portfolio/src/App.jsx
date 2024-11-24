import React from 'react'
import Hero from './components/Hero/Hero'
import Introduction from './components/Hero/Introduction'
import SideProjects from './components/projects/sideProjects'
import Skills from './components/skills/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden no-scrollbar'>
      <Hero/>
     
      <Introduction/>
   
   
      <SideProjects/>
     <Skills/>
     <Contact/>
    
    </div>
    
  )
}

export default App