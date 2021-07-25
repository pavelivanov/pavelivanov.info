import React from 'react'
import cx from 'classnames'

import Section from '../../components/Section/Section'

import s from './Skills.scss'


const items = {
  primary: [
    { title: 'HTML, CSS, SASS', level: 5 },
    { title: 'JS, TS', level: 5 },
    { title: 'React, Preact', level: 5 },
    { title: 'Redux, Apollo', level: 5 },
    { title: 'REST, GraphQL, gRPC', level: 4 },
    { title: 'Webpack, Babel', level: 5 },
    { title: 'E2E (Cypress, Puppeteer, Playwright)', level: 4 },
    { title: 'Unit (Jest)', level: 4 },
  ],
  secondary: [
    { title: 'Vue, Svelte' },
    { title: 'Snowpack, Rollup' },
    { title: 'NodeJS' },
    { title: 'Docker' },
    { title: 'Redis' },
    { title: 'Rabbit' },
    { title: 'Styled Components' },
    { title: 'TailwindCSS' },
  ],
  crypto: [
    { title: 'Solidity' },
    { title: 'Web3, Ethers' },
    { title: 'Wallet connecting' },
    { title: 'MetaMask API' },
    { title: 'Truffle, Hardhat' },
    { title: 'Infura' },
  ],
  other: [
    { title: 'WebStorm, VSCode' },
    { title: 'Sketch, Figma' },
    { title: 'GitHub, GitLab' },
    { title: 'JIRA' },
    { title: 'Storybook, Cosmos' },
    { title: 'AWS (lambda, workers, S3)' },
    { title: 'GTM, Snowplow, Mixpanel' },
  ],
}

const Items = ({ title, items }) => (
  <div>
    <div className={s.title}>{title}</div>
    <div className={s.items}>
      {
        items.map(({ title, level }) => (
          <div key={title} className={cx(s.item, { [s.withExperience]: level })}>
            <span>{title}</span>
            {
              Boolean(level) && (
                <div className={cx(s.experience, s[`level-${level}`])}>{level} / 5</div>
              )
            }
          </div>
        ))
      }
    </div>
  </div>
)

const Skills = () => (
  <Section num="01" title="Skills">
    <div className={s.grid}>
      <Items title="Primary" items={items.primary} />
      <Items title="Secondary" items={items.secondary} />
      <Items title="Crypto" items={items.crypto} />
      <Items title="Other" items={items.other} />
    </div>
  </Section>
)


export default Skills
