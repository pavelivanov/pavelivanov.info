import React from 'react'

import SidebarMenu from './SidebarMenu/SidebarMenu'
import Header from './Header/Header'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Education from './Education/Education'

import s from './App.scss'


const App = () => (
  <div className={s.page}>
    <SidebarMenu />
    <div className={s.hero}>
      <Header />
      <About />
      <Skills />
    </div>
    <div>
      <Projects />
      <Experience />
      <Education />
    </div>
  </div>
)


export default App
