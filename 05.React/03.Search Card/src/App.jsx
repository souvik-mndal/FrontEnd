import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './utitity/data'
import { Cards } from './components/Cards'
import './index.css'

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
    <div >
      <h1 className='text-center text-4xl my-4'>Your Shopping Place...</h1>
      <div className='flex justify-center'>
        <input className='h-12 w-2/5 rounded-xl pl-3 text-xl border-none outline-none shadow-softgray' onChange={inputVal} type="text" placeholder='Search your item' autoFocus />
        <button className='shadow-softgray px-3 cursor-pointer mx-4 text-xl rounded-xl hover:bg-sky-100' onClick={set}>Search</button>
      </div>
      <div id="wrap" className=' flex flex-wrap justify-evenly pt-10'>
        <Cards data={ dta }/>
      </div>
    </div>
  )
}

export default App
