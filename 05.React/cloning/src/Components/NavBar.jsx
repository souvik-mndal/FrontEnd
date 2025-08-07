import { useContext, useEffect, useState } from 'react';
import {Outlet , Link , useLocation} from 'react-router-dom'
import { Coordinates } from './ContextAPI';
// https://www.swiggy.com/dapi/misc/place-autocomplete?input=mumbai&types=



export function NavBar(){
    const location = useLocation();
    const isSticky = location.pathname === '/';
    const [ sidebar , useSidebar ] = useState(false)
    const [ searchh , useSearchh ] = useState({placeText:""})
    const [ place , setPlace ] = useState([])
    const [ ordr , setOrder ] = useState("")
    const [coor, setCoor] = useContext(Coordinates);

    function side(){
        useSidebar(!sidebar)
    }
    function inp(e){
        useSearchh((prev)=>{
            return ({...prev,placeText:e.target.value})
        })
        if(e.target.value.length >=3 ){
            searchAPI(e.target.value)
        }
        else{
            searchAPI(" ")
        }
    }
    async function searchAPI(inpval){
        let res = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${inpval}&types=`)
        let req = await res.json() ;
        setPlace(req?.data || []);
        // console.log(req);
    }
    async function longLat(inpval){
        let res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${inpval}`)
        let req = await res.json() ;
        // console.log(req?.data[0]?.formatted_address);
        // console.log(req);
        setOrder(req?.data[0]?.formatted_address);
        // console.log(req?.data[0]?.geometry?.location?.lat,req?.data[0]?.geometry?.location?.lng);
        setCoor({lat:req?.data[0]?.geometry?.location?.lat,lng:req?.data[0]?.geometry?.location?.lng})
    }
    // console.log(searchh.placeText);
    // console.log(ordr);
    return(
        <div className={`${sidebar ? 'max-h-screen overflow-hidden' : ''} relative `}>
                <div className={`w-full h-screen z-50 bg-black/70 absolute top-0 left-0 flex transition-all duration-300 
                ${sidebar ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className='w-full h-full relative'>
                    <div className={`w-[38%] h-screen absolute bg-white transform transition-transform duration-500 ease-in-out
                        ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className='pl-[30%] pt-[5%] flex flex-col gap-0 '>
                            <i onClick={()=>{side()}} className="ri-close-large-fill text-gray-500 text-xl cursor-pointer"></i>


                            <input onChange={inp} value={searchh.placeText} className='border-2 font-semibold text-base  w-[85%] outline-none pl-4 py-3 my-8' type="text" name='placeText' placeholder='Search for area, street name..' autoComplete='off' />

                            <div className=' w-[100%] pl-0 '>
                                {
                                    place.map((p,i) => {
                                        // console.log(p);
                                        return (
                                            <div onClick={()=>{
                                                longLat(p.place_id)
                                                side()
                                            }}
                                                key={i}
                                                    className={`flex w-[85%] py-5 pl-3 gap-2 cursor-pointer border-b-[2px] border-dashed`}>
                                                <i className="ri-map-pin-2-line text-gray-500 text-lg"></i>
                                                <span>
                                                    <h3 className='font-bold'>{p.structured_formatting.main_text}</h3>
                                                    <h4 className='text-xs text-gray-500 font-medium'>{p.structured_formatting.secondary_text}</h4>
                                                </span>
                                            </div> 
                                        )
                                    })
                                }

                            </div>

                            {
                                (searchh.placeText.length < 3)&& 
                                <div className='border-[2px] flex w-[85%] py-4 pl-3 gap-2 cursor-pointer'>
                                <i className="ri-crosshair-2-line text-gray-500 text-lg"></i>
                                <span className=''>
                                    <h3 className='font-bold'>Get current location</h3>
                                    <h4 className='text-xs text-gray-500 font-medium'>Using GPS</h4>
                                </span>
                            </div>}
                        </div>
                    </div>
                    <div onClick={side} 
                        className='w-[62%] absolute right-0 top-0 h-screen'>
                    </div>
                </div>
            </div>
            <div className={`${isSticky ? 'sticky top-0 z-40' : 'relative'} w-full shadow-md h-[80px] bg-white`}>
                <div className="w-[1200px] h-full mx-auto flex items-center  justify-between ">
                <div id="part1" className="flex items-center ">
                    <img src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="Logo" className="h-[80px] hover:scale-110 duration-100 cursor-pointer"/>
                    <div onClick={()=>{side()}} className="flex items-center ml-8 cursor-pointer ">
                        <h3 className="font-bold text-sm group flex">
                            <span className="border-black border-b-2 group-hover:text-[#FF5622] group-hover:border-[#FF5622] transition-colors duration-200">
                                Order
                            </span>
                            <span className={`font-semibold text-sm border-0 ml-2 text-black/60 line-clamp-1 ${ordr ? 'w-[160px]' : 'w-[0px]'}`}>{ordr}</span>
                        </h3>
                        
                        <i className="ri-arrow-down-s-line ml-0 text-[#FF5622] text-2xl"></i>
                    </div>
                </div>
                <div id="part2" className="flex items-center h-full w-[63%] justify-between ">
                    <div className="flex hover:text-[#FF5622] items-center">
                        <i className="ri-briefcase-2-line mr-2 text-xl"></i>
                        <h3 className="font-bold self-center">Swiggy Corporate</h3>
                    </div>
                    <div className="flex hover:text-[#FF5622] items-center">
                        <i className="ri-search-line mr-2 text-xl"></i>
                        <h3 className="font-bold ">Search</h3>
                    </div>
                    <div className="flex hover:text-[#FF5622] relative items-center" >
                        <i className="ri-discount-percent-line mr-2 text-xl"></i>
                        <h3 className="font-bold ">Offers</h3>
                        <h5 className="text-[#ff5622d4] text-[10px] font-extrabold absolute top-[-10%] right-[-35%]">NEW</h5>
                    </div>
                    <div className="flex hover:text-[#FF5622] items-center">
                        <i className="ri-hand-heart-line mr-2 text-xl"></i>
                        <h3 className="font-bold ">Help</h3>
                    </div>
                    <div className="flex hover:text-[#FF5622] items-center">
                        <i className="ri-user-line mr-2 text-xl"></i>
                        <h3 className="font-bold ">Sign In</h3>
                    </div>
                    <div className="flex hover:text-[#FF5622] items-center">
                        <i className="ri-shopping-cart-line mr-2 text-xl"></i>
                        <h3 className="font-bold ">Cart</h3>
                    </div>
                    
                </div>
            </div>
            </div>
            <Outlet></Outlet>
        </div>
        
    )
}