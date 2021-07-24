import React from 'react'

import Section from '../../components/Section/Section'

import s from './Education.scss'


const items = [
  { title: 'University', value: 'HSE - Web design' },
  { title: 'Languages', value: 'English B1, Russian' },
]

const Education = () => (
  <Section num="03" title="Education">
    {
      items.map(({ title, value }, index) => (
        <div key={index} className={s.item}>
          <span className={s.title}>{title}</span>
          <span className={s.value}>{value}</span>
        </div>
      ))
    }
  </Section>
)


export default Education