import './App.css'
import { NavBar } from './Components/NavBar'
import { Body1 } from './Components/Body1'
import { Body2 } from './Components/Body2'
import { Body3 } from './Components/Body3'
import { useEffect, useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Restrnt from './Components/Restrnt'
Body2
function App() {
  let [ body1Data , setBody1Data ] = useState([])
  let [ body2Data , setBody2Data ] = useState([])
  async function fetching(){
      let req = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let res = await req.json();
      // console.log(res);
      setBody1Data(res?.data?.cards[0])
      setBody2Data(res?.data?.cards[1])
  }
  useEffect(()=>{
    fetching();
  },[])  
  // console.log(body2Head,body3Head);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Body1 val={body1Data} />
            <Body2 val={body2Data} />
            <Body3 val={body2Data} />
          </>
        } />
          <Route path="/restaurants/:id" element={<Restrnt />} />
      </Routes>
    </>
      
  )
}

export default App
