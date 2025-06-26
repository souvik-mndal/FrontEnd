import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [ data , setData ] = useState({ name : "" , password : "" })
  function setValues(e){
    // console.log(e.target.name);
    setData((prev) => ({...prev , [e.target.name] : e.target.value }))
    // console.log(data);
  }
  function showData(e){
    e.preventDefault();
    console.log(data);
  }
  return (
    <>
      <form action="">
        <h1>Forms Control using React</h1>
        <input onChange={setValues} type="text" name='name' placeholder='Your Name' className='w-3/5 h-12 px-4 text-xl rounded-lg mt-6'/>
        <br />
        <input onChange={setValues} type="password" name="password" placeholder='Your Password' className='w-3/5 h-12 px-4 text-xl rounded-lg mt-6'/>
        <br />
        <button onClick={showData} className='mt-4 hover:bg-white hover:text-black text-lg'>Submit</button>
      </form>
    </>
  )
}

export default App
