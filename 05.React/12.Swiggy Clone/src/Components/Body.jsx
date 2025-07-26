import { useEffect, useState } from "react"

export function Body(){
    let [data,setData] = useState([])
    async function fetchData(){
        let req = await fetch("/api/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1")
        let res = await req.json()
        
        console.log(res?.data?.cards);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
            <div className="w-[80%] bg-slate-500 h-[30%] mx-auto">

            </div>   
        </>
    )
}