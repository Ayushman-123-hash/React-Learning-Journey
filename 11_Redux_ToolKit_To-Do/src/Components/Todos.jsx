import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/ToDo/ToDo_Slice'
import deleteSVG from '../assets/delete.svg'

function Todos() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()
  return (
    <>
      <ul className='list-none max-w-6xl mx-auto'>
        {todos.map((todo) => (
          <li
            className='mb-3 ml-35 mr-35 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id}>
            <span className='text-white'>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
            ><img src={deleteSVG} alt="Delete"
              className='w-6 h-6'
              /></button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
