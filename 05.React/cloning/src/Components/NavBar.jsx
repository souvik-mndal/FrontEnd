import { useState } from 'react';
import {Outlet , Link , useLocation} from 'react-router-dom'
export function NavBar(){
    const location = useLocation();
    const isSticky = location.pathname === '/';
    const [ sidebar , useSidebar ] = useState()
    function side(){
        console.log("sjdfdsk");
    }
    return(
        <div className=' relative'>
            {/* <div className='w-full h-screen z-50 bg-black/70 absolute top-0 left-0'>
                <div className='w-[38%] h-screen bg-white'>

                </div>
            </div> */}
            <div className={`${isSticky ? 'sticky top-0 z-40' : 'relative'} w-full shadow-md h-[80px] bg-white`}>
                <div className="w-[1200px] h-full mx-auto flex items-center  justify-between ">
                <div id="part1" className="flex items-center ">
                    <img src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="Logo" className="h-[80px]"/>
                    <div onClick={()=>{side()}} className="flex items-center ml-8 cursor-pointer">
                        <h3  className=" font-bold text-sm border-b-2 border-black  hover:text-[#FF5622] hover:border-[#FF5622] ">Order</h3>
                        <i className="ri-arrow-down-s-line ml-4 text-[#FF5622] text-2xl"></i>
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