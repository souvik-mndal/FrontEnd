import { useEffect, useRef, useState } from "react";
import { Card } from "./Card";

export function Body2({val}){
    // console.log(val?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    let data = val?.card?.card;
    let cards = val?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    let parentCard = useRef("")
    
    // console.log(cards);
    function handleClick(direction){
        if( direction === "left" ){
            parentCard.current.scrollBy({ left: -596, behavior: 'smooth' })
        }
        else{
            parentCard.current.scrollBy({ left: 596, behavior: 'smooth' })
        }
    }
    return(
        <>
        <div className="w-[80%] mx-auto p-4  py-8">
            <div className="flex items-center justify-between pr-6  px-2">
                <h2 className="text-xl font-extrabold">{data?.header?.title}</h2>
                <div className="flex">
                    <div onClick={()=>{handleClick("left")}} className="cursor-pointer bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center"><i className="ri-arrow-left-line text-xl"></i></div>
                    <div onClick={()=>{handleClick("right")}} className="cursor-pointer bg-gray-200 rounded-full ml-2 h-8 w-8 flex justify-center items-center"><i className="ri-arrow-right-line text-xl "></i></div>
                </div>
            </div>
            <div className="flex overflow-x-scroll custom-scrollbar  px-2  py-4" ref={parentCard}>
                {cards.map((items,i)=>{
                    return <Card key={i} item={items}/>
                })}
            </div>
        </div>
        <hr className="border-[1px] w-[80%] mx-auto"/>
        </>
    )
}