import { useState } from 'react'
import './App.css'

function App() {
  let [data,setData] = useState(0)
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <button onClick={()=>{setData((data)=>{ return ++data})}}>Increment</button>
        <h2>{data}</h2>
        <button onClick={() => {setData(--data)}}>Decrement</button>
      </div>
    </>
  )
}

export default App
