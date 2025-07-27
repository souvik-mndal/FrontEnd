import { useEffect, useRef, useState } from "react";

export function Body1(){
    let [data,setData] = useState([])
    let [cards,setCards] = useState([])
    let parentCard = useRef("")
    async function fetching(){
        let req = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let res = await req.json();
        // console.log(res);
        // console.log(res?.data?.cards[0]?.card);
        setData(res?.data?.cards[0]?.card?.card)
        setCards(res?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }
    useEffect(()=>{
        fetching();
    },[])
    // console.log(cards);
    // console.log(data?.header?.title);
    // console.log(parentCard.current);
    function handleClick(direction){
        if( direction === "left" ){
            parentCard.current.scrollBy({ left: -672, behavior: 'smooth' })
        }
        else{
            parentCard.current.scrollBy({ left: 672, behavior: 'smooth' })
        }
    }
    return(
        <>
        <div className="w-[80%] mx-auto p-4  pb-6">
            <div className="flex items-center justify-between pr-6  px-2">
                <h2 className="text-xl font-extrabold">{data?.header?.title}</h2>
                <div className="flex">
                    <div onClick={()=>{handleClick("left")}} className="cursor-pointer bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center"><i className="ri-arrow-left-line text-xl"></i></div>
                    <div onClick={()=>{handleClick("right")}} className="cursor-pointer bg-gray-200 rounded-full ml-2 h-8 w-8 flex justify-center items-center"><i className="ri-arrow-right-line text-xl "></i></div>
                </div>
            </div>
            <div className="flex overflow-x-scroll custom-scrollbar  pl-6  py-4 cursor-pointer" ref={parentCard}>
                {cards.map((item)=>{
                    return (<div key={item.id} className="shrink-0 mr-6 ">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="food image " width={144} />
                    </div>)
                })}
            </div>
        </div>
        <hr className="border-[1px] w-[80%] mx-auto"/>
        </>
    )
}