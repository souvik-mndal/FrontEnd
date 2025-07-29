import { useEffect, useRef, useState } from "react";

export function Body1({val}){
    let data = val?.card?.card;
    let cards = val?.card?.card?.gridElements?.infoWithStyle?.info || [];
    let parentCard = useRef("")
    // console.log(cards);
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
            <div className="flex overflow-x-scroll scroll-container  pl-6  py-4 cursor-pointer" ref={parentCard}>
                {cards.map((item)=>{
                    return (
                        <div key={item.id} className="shrink-0 mr-6 ">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="food image " width={144} />
                        </div>
                    )
                })}
            </div>
        </div>
        <hr className="border-[1px] w-[80%] mx-auto"/>
        </>
    )
}