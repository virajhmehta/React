import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // const [ var, function() responsible for updating var] = useState(default value)

  // let counter = 5
  const addValue = ()  => {
    //console.log("Clicked:", counter);
    setCounter(counter++)
    // setCounter(prevCounter => prevCounter + 1)
    
  }
  const removeValue = () => {
    setCounter(counter--)
  }
  return (
    <>
      <h1>Viraj and React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      {/* <button onClick={addValue}>Add Value {counter}</button> we ca use 
      it via {}*/} 
      
      <br/>
      <br/>

      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
