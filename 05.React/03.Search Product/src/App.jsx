import { useState } from 'react'
import './App.css'
import { Card } from './Components/cards'
import { data } from './Data/ListData'

function App() {
  let [inp,setInt] = useState("")
  let [list,setList] = useState(data)
  
  function filtering(){
    let i = data.map((item)=>{  
      let j = item.products.filter((innerItem)=>{
        if( innerItem.title.toLowerCase().includes(inp.toLowerCase()) ){
          return innerItem;
        }
      })
      if( j.length > 0 ){
        return {...data, products:j}
      }
      else{
        return null
      }
    }).filter((ij)=>{
      if( ij != null ){
        return ij
      }
    })
    setList(i)
  }

  return (
    <>
      <div>
        <h1>Your Shopping App..</h1>
        <input onChange={(e)=>{
            setInt(e.target.value)
            if(e.target.value === "" ){
              setList(data)
            }
          }} type="text" name="searchInput" id="input" />
        <button onClick={()=>{
            filtering()
          }}>Search</button>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        <Card input={list}/>
      </div>
    </>
  )
}

export default App
