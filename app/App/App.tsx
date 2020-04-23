import React from 'react'

import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Education from './Education/Education'

import s from './App.scss'


const App = () => (
  <div className={s.page}>
    <Hero />
    <div>
      {/* <About /> */}
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  </div>
)


export default App
