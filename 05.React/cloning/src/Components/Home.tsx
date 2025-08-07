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
        </> : 
        <div className=' flex flex-col justify-center items-center py-[90px] '>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png" alt="not found" className='h-[238px]'/>
          <h2 className='font-bold text-xl mt-10'>Location Unserviceable</h2>
          <p className='w-[20%] text-center font-medium text-black/75'>We don’t have any services here till now. Try changing location.</p>
        </div>
        }
          
        

    </>
  )
}

export default Home