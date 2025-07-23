import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [data,setData] = useState({email:"",password:""})

  function dataHandle(e){
    setData((prev)=>{
      return ({...prev,[e.target.name]:e.target.value})
    })
  }

  return (
    <>
      <input onChange={dataHandle} type="email" name="email" id="email" placeholder='janedoe@gmail.com' />

      <br /><br />

      <input onChange={dataHandle} type="password" name="password" id="password" placeholder='password' />

      <br /><br />

      <button onClick={(e)=>{
        e.preventDefault()
        console.log(data);
      }}>Submit</button>
    </>
  )
}

export default App
