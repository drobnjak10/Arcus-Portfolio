import React from 'react'
import { useState } from 'react'
import About from '../../components/About/About'
import Banners from '../../components/Banners/Banners'
import Contact from '../../components/Contact/Contact'
import Counter from '../../components/Counter/Counter'
import ImagePage from '../../components/ImagePage/ImagePage'
import ImagePageSec from '../../components/ImagePage/ImagePageSec'
import Landing from '../../components/Landing/Landing'
import LastProjects from '../../components/LastProjects/LastProjects'
import Leader from '../../components/Leader/Leader'
import Portfolio from '../../components/Portfolio/Portfolio'
import Projects from '../../components/Projects/Projects'
import Services from '../../components/Services/Services'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  const [isActive, setIsActive] = useState(false);


  
  return (
    <div>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <Landing setIsActive={setIsActive} isActive={isActive} />
      {/* <Banners /> */}
      <About />
      <Projects />
      <ImagePage />
      <Services />
      <ImagePageSec />
      <Leader />
      <Portfolio />
      <Counter />
      <LastProjects />
      <Contact />
    </div>
    
  )
}

export default Home