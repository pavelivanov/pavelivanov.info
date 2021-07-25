import React from 'react'

import s from './About.scss'


const items = [
  'Web designer by profession, frontend developer by vocation. TypeScript - one love. I consider my design vision to be a great advantage, it allows me to bring the result of my professional activity to a higher level.',
  'I have a lot of experience as a team leader. I know how to motivate people and set up a workflow. I can identify the strengths and weaknesses of a person and work out a scheme for his development. I am able to establish effective and comfortable interaction of the team for everyone. All my teammates have achieved high results. Their success is the best reward for me!',
  'I am fond of mentoring (in general, I like to share knowledge), mentored 2 streams of students in HtmlAcademy, now I am participating in GetMentor.',
  'Since 2017 plunged into the crypto world, took part and was a prize-winner of the BlockchainHack 2017, LAToken 2017, IcoLab 2017, ETHWaterloo 2017, ETHWaterloo 2019 hackathons. I\'m drowning for the offchain.',
]

const About = () => (
  <div className={s.about}>
    {
      items.map((item, index) => (
        <div key={index} className={s.item}>{item}</div>
      ))
    }
  </div>
)


export default About
