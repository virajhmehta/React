import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx' 

function MyApp()
{
    return(
        <div>
          <h1>Custome App</h1>
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
const anotherElement = (
    <a href = "https://google.com" target='_blank'>Visit Google</a>
)
// now we have written according to the react


const anotherUser = "Mehta"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit here',
    anotherUser

)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
    
  
)
