import {Link} from 'react-router-dom'
export function Card({item}){
    // console.log(item);
    // console.log("Props received:", {item, title});
    // console.log(item.cta.link.split("https://www.swiggy.com/")[1]);
    let headerText ;
    let subHeaderText ;
    if( (item?.info?.aggregatedDiscountInfoV3) ){
        if( (item?.info?.aggregatedDiscountInfoV3.header) ){
            headerText = (item?.info?.aggregatedDiscountInfoV3?.header);
        }
        else{
            headerText = " ";
        }
        if( (item?.info?.aggregatedDiscountInfoV3.subHeader) ){
            subHeaderText = (item?.info?.aggregatedDiscountInfoV3?.subHeader);
        }
        else if( (item?.info?.aggregatedDiscountInfoV3.discountTag) ){
            subHeaderText = (item?.info?.aggregatedDiscountInfoV3?.discountTag);
        }
        else{
            subHeaderText = " "
        }
    }
    else{
        headerText = " ";
        subHeaderText = " ";
    }
    return (
        <>
            <Link to={`/restaurants/${item.cta.link.split("/")[5]}`}>
                <div key={item.info.id} className="hover:scale-[0.95] duration-100 mr-7">
                    <div  className="shrink-0 cursor-pointer  w-[270px] h-[190px] rounded-2xl overflow-hidden relative">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto/${item.info.cloudinaryImageId}`} alt="food image " className="w-[100%] h-[100%] object-cover"/>
                                        
                        <h2 className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-[100%] h-[50%] flex justify-start items-end px-3 pb-2 left-0 uppercase text-xl font-black tracking-tighter text-white ">{headerText+" "+subHeaderText}</h2>
                                    
                    </div>
                    <div className=" pt-3 pl-2">
                        <span>
                            <p className="font-bold text-lg line-clamp-1 break-words">{item.info.name}</p>
                            <div className="flex items-center gap-1">
                                <div className="bg-green-700 w-5 h-5 rounded-full flex justify-center items-center"><i className="ri-star-fill text-white text-xs"></i></div>
                                <span className="flex items-center gap-1">
                                    <p className="font-semibold text-[#222]">{item.info.avgRating}</p>
                                    <p className="font-bold">•</p>
                                </span>
                                <p className="font-semibold text-[#222]">{item.info.sla.slaString}</p>
                            </div>
                        </span>
                            <p className="text-slate-500 font-semibold line-clamp-1">{item.info.cuisines.join(", ")}</p>
                            <p className="text-slate-500 font-semibold">{item.info.areaName}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}