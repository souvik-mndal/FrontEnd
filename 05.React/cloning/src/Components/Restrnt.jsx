import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Restrnt() {
    let {id} = useParams()
    let [name,setName] = useState()
    let mainId = id.split("rest")[1]
    async function fetc() {
        let req = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`)
        let res = await req.json()
        // console.log(res);
        setName(res?.data?.cards[0]?.card?.card?.text);
    }
    useEffect(()=>{
        fetc();
    },[])

  return (
    <div>Restrnt   {id}   {name} </div>
  )
}

export default Restrnt