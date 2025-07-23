import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let emailRef = useRef("")
  let passRef = useRef("")

  return (
    <>
      <input type="email" name="email" id="email" placeholder='janedoe@gmail.com' ref={emailRef}/>

      <br /><br />

      <input type="password" name="password" id="password" placeholder='password' ref={passRef}/>

      <br /><br />

      <button onClick={(e)=>{
        e.preventDefault()
        console.log({email:emailRef.current.value , password:passRef.current.value});
      }}>Submit</button>
    </>
  )
}

export default App
