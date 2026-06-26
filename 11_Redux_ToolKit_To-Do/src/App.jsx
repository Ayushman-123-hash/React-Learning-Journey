import { useState } from 'react'
import './App.css'
import AddTodos from './Components/AddTodos'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-6xl text-center mt-8'>
        To-Do App
      </h1>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
