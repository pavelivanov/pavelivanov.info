import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../build/client'


const outputPath = path.resolve('build/index.html')
const cssPath = path.resolve('build/client.css')
const jsPath = path.resolve('build/client.js')

try {
  const html = fs.readFileSync(outputPath, 'utf8')
  const css = fs.readFileSync(cssPath, 'utf8')
  const appHtml = ReactDOMServer.renderToString(<App />)

  const finalHtml = (
    html
      .replace('<div id="root"></div>', appHtml)
      .replace('</head>', `<style>${css}</style></head>`)
  )
  
  fs.writeFileSync(outputPath, finalHtml)
  fs.unlinkSync(jsPath)
  fs.unlinkSync(cssPath)
  console.log('Render success!')
}
catch (err) {
  console.error(err)
  process.exit(1)
}
