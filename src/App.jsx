import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HeroIntroTitle from './components/hero-intro-title'
import Aboutme from './components/aboutme'
import Services from './components/services'
import Projects from './components/projects'
import ProjectsCarousel from './components/projectCarousel'
import Contact from './components/contact'
import AnimatedCursor from "react-animated-cursor"

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  function changeMode(){
    setDarkMode(oldValue => !oldValue)
    console.log(darkMode)
  }

  return (
    <>
    
      <div className={`${darkMode ? "bg-verge-black text-coffee" : "bg-coffee text-verge-black"} p-0 m-0 box-border transition duration-500 ease-in-out cursor-none`}>
      <AnimatedCursor
          color="255,255,255"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={1}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode: 'exclusion'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
    



      <Header 
        onClick={changeMode}
        darkMode={darkMode}
      />
      <HeroIntroTitle
        darkMode={darkMode}
      />
      <Aboutme 
        darkMode={darkMode}
      />

      <Services
        darkMode={darkMode}
      />
      <Projects 
        darkMode={darkMode}
      />
      {/* <ProjectsCarousel/> */}
      <Contact 
        darkMode={darkMode}
      />
    </div>
    

    

    </>
  )
}

export default App

