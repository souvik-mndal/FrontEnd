import { useEffect, useState } from "react"

export function Body(){
    // let [dta,setData] = useState([])

    async function fetching(){
        let req = await fetch("/api/mapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let res = await req.json()
        console.log(res);
    }

    useEffect(()=>{
        fetching();
    },[])
    return(
        <>
            <div className="w-[80%] bg-slate-500 h-[30%] mx-auto">

            </div>   
        </>
    )
}