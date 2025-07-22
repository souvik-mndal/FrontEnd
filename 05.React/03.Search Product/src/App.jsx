import { useState } from 'react'
import './App.css'
import { Card } from './Components/cards'
import { data } from './Data/ListData'

function App() {
  let [inp,setInt] = useState("")
  let [list,setList] = useState(data)

  function filtering(){
    console.log("dd");
    let i = data.map((item)=>{  
      return item.products.filter((innerItem)=>{
        if( innerItem.title.toLowerCase() == inp.toLowerCase() ){
          return innerItem;
        }
      })
    })
    console.log(i);
  }

  return (
    <>
      <div>
        <h1>Your Shopping App..</h1>
        <input onChange={(e)=>{setInt(e.target.value)}} type="text" name="searchInput" id="input" />
        <button onClick={()=>{
            filtering()
            console.log("sd");
          }}>Search</button>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        <Card input={list}/>
      </div>
    </>
  )
}

export default App
