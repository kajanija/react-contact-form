import { useState } from 'react'
import './index.css'

function App() {
    const [fname, setFName] = useState(''); 
    const [lname, setLName] = useState(''); 
    const [message, setMessage] = useState(''); 

  return (
    <div className='grid grid-rows-[repeat(2,max-content)] gap-5 items-center justify-center w-screen h-screen p-5'>
      <div className='w-150 h-90 p-5 bg-blue-300 rounded-lg shadow-2xl grid grid-rows-[repeat(3,max-content)] items-start justify-center gap-5 text-center'>
        <p className='text-white font-medium text-xl'>Contact</p>
        <input className='bg-white p-2 rounded-md w-130 focus:outline-none' type='text' placeholder='First Name' value={fname} onChange={(event) => setFName(event.target.value)}/>
        <input className='bg-white p-2 rounded-md w-130 focus:outline-none' type='text' placeholder='Last Name' value={lname} onChange={(event) => setLName(event.target.value)}/>
        <textarea className='bg-white p-2 rounded-md w-130 focus:outline-none h-full' placeholder="Message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
      </div>
      <div>
        <p>First Name: {fname}</p>
        <p>Last Name: {lname}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  )
}

export default App
