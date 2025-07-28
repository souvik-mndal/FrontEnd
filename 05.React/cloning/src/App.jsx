import './App.css'
import { NavBar } from './Components/NavBar'
import { Body1 } from './Components/Body1'
import { Body2 } from './Components/Body2'
import { useEffect, useState } from 'react'
Body2
function App() {
  let [ body1Data , setBody1Data ] = useState([])
  let [ body2Data , setBody2Data ] = useState([])
  async function fetching(){
      let req = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let res = await req.json();
      setBody1Data(res?.data?.cards[0])
      setBody2Data(res?.data?.cards[1])
  }
  useEffect(()=>{
    fetching();
  },[])  
  // console.log(data);
  return (
    <div className='h-screen w-screen'>
      <NavBar></NavBar>
      <Body1 val={body1Data}></Body1>
      <Body2 val={body2Data}/>
    </div>
  )
}

export default App
