import React from 'react'

import Section from '../../components/Section/Section'

import s from './Experience.scss'


const items = [
  {
    dates: 'Nov 2016 — present',
    company: 'Scentbird',
    responsibilities: [
      'Tech lead of 10 frontends',
      'Performance',
      'Babel plugins',
      'Hight speed loading landings',
      'Redaction',
      'Formular',
      'Borscht',
      'Was working on internal tools - created couple of helpful resources: bot for Slack to notify about'
    ],
  },
  {
    dates: 'Feb 2016 — Nov 2016',
    company: 'TVEVT',
    responsibilities: [
      'Developed site (tvevt.com), user and admin panels with React, Redux, Webpack',
      'Implemented multilanguage via react-intl module. Wrote Babel plugin for generating IDs for messages dynamically',
      'Developed module (redaction) to simplify work with Redux',
      'Worked at creation of SmartTV, Tizen application via Cordova',
    ],
  },
  {
    dates: 'Feb 2015 —  Dec 2015',
    company: 'HackPack',
    responsibilities: [
      'Was CTO of all client side parts. Communicated with users, community­development leads and the team. Made decisions for the development of usability',
      'Designed and developed desktop version of site (hackpack.press). Created mobile version / application using Ionic Framework',
      'Implemented multilanguage, E2E testing. Created awesome project structure with high speed building gulp process',
    ],
  },
  {
    dates: 'Sep 2014 — Oct 2015',
    company: 'TerminalWMS',
    responsibilities: [
      'Designed and developed highly loaded warehouse management system',
      'Very complex project built on interdependent directives, services',
      'Created my own nGrid library (10% AngularJS + 90% ES6)',
      'Implemented E2E testing (protractor)',
    ],
  },
  {
    dates: 'May 2014 — Sep 2014',
    company: 'BincSearch',
    responsibilities: [
      'Designed and developed Chrome extension for LinkedIn',
      'Made some APIs in Django',
    ],
  },
  {
    dates: 'Dec 2013 — May 2014',
    company: 'Sociofactor',
    responsibilities: [
      'Developed highly loaded projects for government agencies',
      'Implemented E2E testing (protractor)',
      'Work on the project includes technologies such as: AngularJS, NodeJS, livescript, Jade',
    ],
  },
  {
    dates: 'Jul 2013 ­— Dec 2013',
    company: 'Mail.ru Group / Games',
    responsibilities: [
      'Created client side of new company website ­ games.mail.ru',
      'Organizated structuring patterns, styles and scripts, perl­templating (Template Toolkit)',
      'Used stack of technologies (BEM + SASS, jQuery, Ajax)',
    ],
  },
  {
    dates: 'Oct  2012 — Jul 2013',
    company: 'Mail.ru Group / Search Engine',
    responsibilities: [
      'Joined project in time team was planning to refactor full stack of site',
      'Refactored client side. Reworked css to SCSS + BEM. Cleaned JS and created modules',
      'Developed versions for all platforms',
      'Added cross­browser compatibility (including IE6)',
      'Implemented BEM, SASS, worked with template engines ct++, Jinja, SVN, BEM',
    ],
  },
  {
    dates: 'Sep 2011 — Oct 2012',
    company: 'Biglion',
  },
  {
    dates: 'Jul 2010 — Sep 2011',
    company: 'Goldenstudio',
  },
  {
    dates: '2008 — 2010',
    company: 'Freelance',
  },
]

const Experience = () => (
  <Section num="02" title="Experience">
    {
      items.map(({ company, dates, responsibilities }, index) => (
        <div key={index} className={s.item}>
          <div className={s.dates}>{dates}</div>
          <span className={s.company}>{company}</span>
          {
            responsibilities && (
              <div className={s.responsibilities}>
                {
                  responsibilities.map((responsibility, index) => (
                    <div key={index} className={s.responsibility}>{responsibility}</div>
                  ))
                }
              </div>
            )
          }
        </div>
      ))
    }
  </Section>
)


export default Experience
