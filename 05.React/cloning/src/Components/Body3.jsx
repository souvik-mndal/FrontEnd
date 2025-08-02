import { useEffect, useRef, useState } from "react";
import { Card } from "./Card";

export function Body3({val,title}){
    // console.log(val?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    let data = val?.card?.card;
    let cards = val?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    
    return(
        <>
        <div className="w-[80%] mx-auto p-4  py-8">
            <div className="flex items-center justify-between pr-6  px-2">
                <h2 className="text-2xl font-extrabold">{title}</h2>
            </div>
            <div className="pl-2  py-4 grid grid-cols-4 justify-center gap-y-6">
                {cards.map((items,i)=>{
                    return <Card key={i} item={items}/>
                })}
            </div>
        </div>
        {/* <hr className="border-[1px] w-[80%] mx-auto"/> */}
        </>
    )
}