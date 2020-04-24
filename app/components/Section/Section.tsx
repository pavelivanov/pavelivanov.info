import React from 'react'

import s from './Section.scss'


type SectionProps = {
  num: string
  title: string
}

const Section: React.FunctionComponent<SectionProps> = ({ num, title, children }) => (
  <div className={s.section}>
    <div className={s.title}>{title}</div>
    <div>
      {children}
    </div>
  </div>
)


export default Section