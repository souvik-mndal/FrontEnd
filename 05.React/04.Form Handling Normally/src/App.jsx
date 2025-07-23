import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [email,setEmail] = useState("")
  let [pass,setPass] = useState("")

  return (
    <>
      <input onChange={(e)=>{
        setEmail(e.target.value)
      }} type="email" name="email" id="email" placeholder='janedoe@gmail.com'/>

      <br /><br />

      <input onChange={(e)=>{
        setPass(e.target.value)
      }} type="password" name="password" id="password" placeholder='password'/>

      <br /><br />

      <button onClick={(e)=>{
        e.preventDefault()
        console.log({email,password:pass});
      }}>Submit</button>
    </>
  )
}

export default App
