import './App.css'
import { NavBar } from './Components/NavBar'

import { useEffect, useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Restrnt from './Components/Restrnt'
import Home from './Components/Home'
import { Coordinates } from './Components/ContextAPI'
function App() {
  // let [ body1Data , setBody1Data ] = useState([])
  // let [ body2Data , setBody2Data ] = useState([])
  // async function fetching(){
  //     let req = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  //     let res = await req.json();
  //     // console.log(res);
  //     setBody1Data(res?.data?.cards[0])
  //     setBody2Data(res?.data?.cards[1])
  // }
  // useEffect(()=>{
  //   fetching();
  // },[])  
  // console.log(body2Head,body3Head);
  const [coor,setCoor] = useState({lat:22.56430,lng:88.36930})
  // console.log(coor);
  return (
    <Coordinates.Provider value={[coor,setCoor]}>

      <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="restaurants/:id" element={<Restrnt />} />
      </Route>
    </Routes>
    </Coordinates.Provider>
      
  )
}

export default App
