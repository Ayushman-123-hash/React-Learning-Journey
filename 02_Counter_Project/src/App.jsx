import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  // let counter = 5
  const addvalue = () =>{
    // console.log("value increase", Math.random())
    // console.log("value increase", counter)
    // counter = counter + 1
    if(counter < 20){
      setCounter(counter + 1)
    }
    else{
      alert("counter value is already 20")
    }
  }
  const removevalue = () =>{
    // console.log("value decrease", counter)
    // counter = counter - 1
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      alert("counter value is already zero")
    }
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button><br />
      <button onClick={removevalue}>Remove value {counter}</button>
      <p>Counter value is: {counter}</p>
    </>
  )
}

export default App
