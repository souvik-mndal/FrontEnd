export function Navbar(){
    return (
        <div className="w-full shadow-md h-[80px]">
            <div className="w-[1200px] h-full mx-auto flex">
                <div id="part1" className="flex justify-center items-center">
                    <div id="logo" className=" h-[80px] w-[80px]">
                        <img src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="swiggy logo" className="object-fill"/>
                    </div>
                    <h3 className="border-b-2 border-black font-bold text-sm hover:text-[#FF5622] cursor-pointer hover:border-[#FF5622] ml-4">Other</h3>
                </div>
            </div>
        </div>
    )
}