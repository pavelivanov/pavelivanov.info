import React from 'react'

import s from './Header.scss'


const Header = () => (
  <header className={s.header}>
    <div>
      <div className={s.fullName}>PAVEL IVANOV</div>
      <div className={s.role}>Front End Developer</div>
    </div>
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}><a className={s.navLink} href="https://docs.google.com/document/d/1BGBcm5739S5FIP2rQDFBrw7IvlIuw2b1VhDUsmyIcfw" target="_blank">Resume</a></li>
        <li className={s.navItem}><a className={s.navLink} href="https://github.com/pavelivanov" target="_blank">GitHub</a></li>
        <li className={s.navItem}><a className={s.navLink} href="mailto:grammka@gmail.com">Contact</a></li>
      </ul>
    </nav>
  </header>
)


export default Header
