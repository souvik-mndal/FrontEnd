import {Outlet , Link , useLocation} from 'react-router-dom'
export function NavBar(){
    const location = useLocation();
    const isSticky = location.pathname === '/';
    let navItem = [
        {
            id : 1,
            name : "Swiggy Corporate",
            icon : "ri-briefcase-2-line",
        },
        {
            id : 2,
            name : "Search",
            icon : "ri-search-line",
        },
        {
            id : 3,
            name : "Offers",
            icon : "ri-discount-percent-line",
        },
        {
            id : 4,
            name : "Help",
            icon : "ri-hand-heart-line",
        },
        {
            id : 5,
            name : "Sign In",
            icon : "ri-user-line",
        },
        {
            id : 6,
            name : "Cart",
            icon : "ri-shopping-cart-line",
        },
    ]
    return(
    
            <div className={`${isSticky ? 'sticky top-0 z-40' : 'relative'} w-full shadow-md h-[80px] bg-white`}>
                <div className="w-[1200px] h-full mx-auto flex items-center  justify-between ">
                    <div id="part1" className="flex items-center ">
                        <Link to="/">
                            <img src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="Logo" className="h-[80px]"/>
                        </Link>
                        <div className="flex items-center ml-8 cursor-pointer">
                            <h3 className="font-bold text-sm border-b-2 border-gray-700 text-gray-700  hover:text-[#FF5622] hover:border-[#FF5622] ">Order</h3>
                            <i className="ri-arrow-down-s-line ml-4 text-[#FF5622] text-2xl"></i>
                        </div>
                    </div>
                    <div id="part2" className="flex items-center h-full w-[63%] justify-between ">
                        {
                            navItem.map((val)=>{
                                return(

                                    <div className="flex hover:text-[#FF5622] items-center" key={val.id}>
                                        <i className={`${val.icon} mr-2 text-xl text-gray-700`}></i>
                                        <h3 className="font-bold self-center text-gray-700">{val.name}</h3>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        
    )
}