import React, {useState, useContext} from 'react'
import UserContext from '../context/User_Context'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <div className='items-center justify-center text-center flex flex-col '>
        <h2 className='text-center text-lg font-medium '>Login</h2>

        <input
        className='justify-center text-center items-center bg-white m-2'
        type="text"
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

        <input
        className='justify-center text-center items-center m-2 bg-amber-50'
        type="password"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <button
        className='justify-center text-center items-center m-2 bg-amber-50'
        onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login
