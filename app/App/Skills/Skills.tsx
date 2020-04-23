import React from 'react'
import cx from 'classnames'

import Section from '../../components/Section/Section'

import s from './Skills.scss'


const items = {
  primary: [
    { title: 'JavaScript', level: 5 },
    { title: 'TypeScript', level: 4 },
    { title: 'NodeJS', level: 3 },
    { title: 'React', level: 5 },
    { title: 'Redux', level: 5 },
    { title: 'Webpack', level: 4 },
    { title: 'Babel', level: 4 },
    { title: 'Docker', level: 3 },
    { title: 'Redis', level: 3 },
    { title: 'Rabbit', level: 3 },
    { title: 'HTML, CSS, SCSS', level: 5 },
  ],
  secondary: [
    { title: 'WebStorm' },
    { title: 'VSCode' },
    { title: 'Sketch' },
    { title: 'Figma' },
    { title: 'Jira' },
  ],
}

const Skills = () => (
  <Section num="01" title="Skills">
    <div className={s.content}>
      <div className={s.contentItem}>
        <div className={s.title}>Primary</div>
        <div className={s.items}>
          {
            items.primary.map(({ title, level }) => (
              <div key={title} className={cx(s.item, s.withExperience)}>
                {title}
                <div className={cx(s.experience, s[`level-${level}`])}>{level} / 5</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={s.contentItem}>
        <div className={s.title}>Secondary</div>
        <div className={s.items}>
          {
            items.secondary.map(({ title }) => (
              <div key={title} className={s.item}>
                {title}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </Section>
)


export default Skills