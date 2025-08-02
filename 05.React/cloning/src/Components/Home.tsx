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
      // console.log(coor);

      async function fetching(){
          let req = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coor.lat}&lng=${coor.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
          let res = await req.json();
          // console.log(res?.data?.cards[2]);
          setBody1Data(res?.data?.cards[0])
          setBody2Data(res?.data?.cards[1])
          setBody3Head(res?.data?.cards[2]?.card?.card?.title)
        }
        // console.log(body3Head);
      useEffect(()=>{
        fetching();
      },[coor])  
  return (
    <>
        <Body1 val={body1Data} />
              <Body2 val={body2Data} />
              <Body3 val={body2Data} title={body3Head}/>
    </>
  )
}

export default Home