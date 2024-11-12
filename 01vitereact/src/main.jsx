import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(
        <div>
        <h1>Custom App | chai</h1>
        {/* <App /> */}
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'http://google.com',
//         target: '_blanck'
//     },
//     children:'click me to visit google'
// }
const anotherElement = (
    <a href= 'http://google.com' target= '_blank'> Visit
   
    google</a>

)
const anotheruser = 'chai aur code'
const ReactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: '_blank'},
    'Click me to Visit google',
    anotherElement
)
Reactdom.createRoot(document.getElementById('root')).
render(

reactElement

  
)
