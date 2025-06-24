import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './utitity/data'
import { Cards } from './components/Cards'

function App() {
  const [ inp , setInp ] = useState("")
  const [ dta , setDta ] = useState(data);

  function inputVal(e){
    if(e.target.value.length === 0 ){
      setDta(data);
    }
    setInp(e.target.value);
  }
  function set(){
    let resp = [];
    data.forEach((item) => {
      let match = (item.products).filter((i) => (i.title).toLowerCase().includes(inp.toLowerCase()) )
      if( match.length > 0 ){
        resp.push( {...item , products:match } );
      }
    })
    setDta(resp);
  }



  return (
    <>
      <h1>Your Shopping Place...</h1>
      <input onChange={inputVal} type="text" placeholder='Search your item' autoFocus />
      <button onClick={set}>Search</button>
      <div id="wrap" style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-evenly"}}>
        <Cards data={ dta }/>
      </div>
    </>
  )
}

export default App
