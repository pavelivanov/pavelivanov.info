import React from 'react'

import s from './Hero.scss'


// Front-end developer specializing in modular design systems & complex architecture. Travelling over the world.

const Hero = () => (
  <div className={s.hero}>
    <div>
      <div className={s.fullName}>PAVEL IVANOV</div>
      <div className={s.role}>Frontend Developer</div>
    </div>
    <div className={s.nav}>
      <a className={s.navItem} href="#about">Resume</a>
      <a className={s.navItem} href="https://github.com/pavelivanov" target="_blank">GitHub</a>
      <a className={s.navItem} href="mailto:grammka@gmail.com">Contact</a>
    </div>
  </div>
)


export default Hero
