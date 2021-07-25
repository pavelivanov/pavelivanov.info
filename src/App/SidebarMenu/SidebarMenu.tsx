import React from 'react'

import s from './SidebarMenu.scss'

import cvImage from './images/cv.svg'
import githubImage from './images/github.svg'
import emailImage from './images/email.svg'


const SidebarMenu = () => {

  return (
    <div className={s.container}>
      <div className={s.menu} id="sidebar-menu">
        <a className={s.item} href="https://docs.google.com/document/d/1BGBcm5739S5FIP2rQDFBrw7IvlIuw2b1VhDUsmyIcfw" target="_blank">
          <img className={s.cv} src={cvImage} alt="CV" />
        </a>
        <a className={s.item} href="https://github.com/pavelivanov" target="_blank">
          <img className={s.github} src={githubImage} alt="GitHub" />
        </a>
        <a className={s.item} href="mailto:grammka@gmail.com">
          <img className={s.email} src={emailImage} alt="Email Me" />
        </a>
      </div>
    </div>
  )
}


export default SidebarMenu
