import React from 'react'

import s from './About.scss'


const items = [
  'Since 2017 I have immersed myself into the crypto world. I have competed in multiple hackathons and was a prize-winner at BlockchainHack 2017, LAToken 2017, IcoLab 2017, ETHWaterloo 2017 and ETHWaterloo 2019. More recently I have become more interested specifically in DeFi applications, and applying my skills to this sector.',
  'I have extensive experience as a team leader. I am a motivational leader who can build a strong positive culture, team spirit and ethics. I can identify strengths and weaknesses and use this to get the best out of people. My teammates have always achieved high results, their success is the best reward for me!',
  'I like mentoring people and sharing my knowledge. I have mentored two streams of students in HtmlAcademy and I am now participating in GetMentor.',
  'A web designer by education and frontend developer by profession, I have gained further skills and experience by working with many different types of people and developers. I consider my design vision to be a great advantage, and this allows me to bring the result of my and my team\'s professional activity to a higher level.',
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
