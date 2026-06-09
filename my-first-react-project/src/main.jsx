import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

// const reactElemet ={
//     type: 'a',
//     props: {
//         href: 'https://www.pornhub.com',
//         target:'_blank'
//     },
//     children: 'Open PornHub'
// }

const anotherElement = (
    <a href="https://www.pornhub.com" target="_blank">
        Open PornHub
    </a>
)

const anotheruser = " | chai aur code"

const reactElement = React.createElement(
    'a',
    {href: 'https://www.xvideos.com',target: '_blank'},
    'Open Xvideos',
    anotheruser
)


createRoot(document.getElementById('root')).render(
  
   reactElement
    // <App />
  
)
