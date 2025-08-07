import React, { useContext } from 'react'
import { Body1 } from './Body1'
import { Body2 } from './Body2'
import { Body3 } from './Body3'
import { useEffect, useState } from 'react'
import { Coordinates } from './ContextAPI'

function Home() {
    let [ body1Data , setBody1Data ] = useState([])
      let [ body2Data , setBody2Data ] = useState([])
      let [ body3Head , setBody3Head ] = useState([])
      const [coor, setCoor] = useContext(Coordinates);
      const [len, setLen] = useState("");
      // console.log(coor);

      async function fetching(){
          let req = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coor.lat}&lng=${coor.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
          let res = await req.json();
          // setLen(res?.data?.cards.length)
          // console.log(res?.data?.cards[2]);
          setBody1Data(res?.data?.cards[0])
          setBody2Data(res?.data?.cards[1])
          setBody3Head(res?.data?.cards[2]?.card?.card?.title)
          // console.log(len);
        }
        // console.log(body2Data);
      useEffect(()=>{
        fetching();
      },[coor])  
  return (
    
    <>

        {(body2Data?.card?.card?.gridElements && body2Data!==[]) ? <>
          <Body1 val={body1Data} />
          <Body2 val={body2Data} />
          <Body3 val={body2Data} title={body3Head}/>
        </> : <><h1>Not present</h1></>}
          
        

    </>
  )
}

export default Home