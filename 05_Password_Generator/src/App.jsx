import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (symbols) str += "!@#$%^&*()-+=_<>?/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length, numbers, symbols, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, symbols, passwordGenerator])
  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 h-80 flex-col justify-center'>
        <h1 className='text-2xl font-bold text-center py-18'>Password Generator</h1>
        <div className='flex shadow rounded-full overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-gray-100 text-black-800'
            placeholder='Password'
            ref={passwordRef}
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-orange-600'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numbers}
              id='numbers'
              onChange={() => {
                setNumbers((prev) => !prev)
              }}
            />
            <label htmlFor='numbers' className='text-orange-600'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={symbols}
              id='symbols'
              onChange={() => {
                setSymbols((prev) => !prev)
              }}
            />
            <label htmlFor='symbols' className='text-orange-600'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
