import { useState } from 'react'
import './App.css'
import { Card } from './Components/cards'
import { useEffect } from 'react'

function App() {
  let [inp,setInt] = useState("")
  let [list,setList] = useState("")
  let [initiallist,setIniList] = useState("")
  
  
  useEffect(()=>{
    async function ftch(){
      let req = await fetch("https://dummyjson.com/carts")
      let res = await req.json()
      console.log(res);
      setList(res.carts)
      setIniList(res.carts)
    }
    ftch()
  },[])

  function filtering(){
    let i = initiallist.map((item)=>{  
      let j = item.products.filter((innerItem)=>{
        if( innerItem.title.toLowerCase().includes(inp.toLowerCase()) ){
          return innerItem;
        }
      })
      if( j.length > 0 ){
        return {...initiallist, products:j}
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
              setList(initiallist)
            }
          }} type="text" name="searchInput" id="input" />
        <button onClick={()=>{
            filtering()
          }}>Search</button>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        {
          (list.length <= 0 ) ? <h2>No Items Found</h2> : <Card input={list}/>
        }
      </div>
    </>
  )
}

export default App
