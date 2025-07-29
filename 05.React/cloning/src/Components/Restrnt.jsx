import React, { useEffect, useState , useRef } from 'react'
import { useParams , Link } from 'react-router-dom'
function Restrnt() {
    let parentCard = useRef("")
    
    let {id} = useParams()
    let [restrntName,setRestrntName] = useState([])
    let [restrntInfo,setRestrntInfo] = useState([])
    let [restrntDeals,setRestrntDeals] = useState([])
    let [restrntFood,setRestrntFood] = useState([])
    let mainId = id.split("rest")[1]


    async function fetc() {
        let req = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`)
        let res = await req.json()
        // console.log(res?.data?.cards);
        setRestrntName(res?.data?.cards[0]?.card?.card?.text);
        setRestrntInfo(res?.data?.cards[2]?.card?.card?.info);
        setRestrntDeals(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
        setRestrntFood(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    useEffect(()=>{
        fetc();
    },[])
    // console.log(restrntInfo);
    // console.log(restrntInfo.totalRatingsString);
    // console.log(restrntInfo.avgRating);
    // console.log(restrntInfo.costForTwoMessage);

    let actualMenu = (restrntFood).filter((itm)=>{
      if(itm?.card?.card?.itemCards || itm?.card?.card?.categories){
        return itm;
      }
    })
    console.log(actualMenu);
    function handleClick(direction){
        if( direction === "left" ){
            parentCard.current.scrollBy({ left: -282, behavior: 'smooth' })
        }
        else{
            parentCard.current.scrollBy({ left: 282, behavior: 'smooth' })
        }
    }
    

  return (
    <div className='w-full '>
      <div className='w-[705px]    mx-auto pt-5 bg-gradient-to-t from-slate-500/15 to-transparent rounded-bl-[32px] rounded-br-[32px]'>
        <p className='text-[10px] font-bold text-[#111]'>
          <Link to={"/"}>
            <span className='text-[#555] hover:text-[#111] cursor-pointer'>Home</span>  
          </Link>
          /
          <Link to={"/"}>
            <span className='text-[#555] hover:text-[#111] cursor-pointer'>{restrntInfo.city}</span>  
          </Link>
          
          /{restrntName}</p>
        <div className='px-4 py-4'>

          <h1 className='text-2xl  font-extrabold pt-1 pb-5 bg-white'>{restrntName}</h1>
          <div className='border border-gray-300 bg-white p-4 rounded-3xl'>
            <div className="flex items-center gap-1">
              <div className="bg-green-700 w-[18px] h-[18px] rounded-full flex justify-center items-center"><i className="ri-star-fill text-white text-[11px]"></i></div>
              <span className="flex items-center gap-1">
                <p className="font-extrabold text-[#111] text-sm">{restrntInfo?.avgRatingString+"( "+restrntInfo?.totalRatingsString+" )"}</p>
                <p className="font-bold">•</p>
              </span>
              <p className="font-extrabold text-[#111]">{restrntInfo?.costForTwoMessage}</p>
            </div>
            <p className='text-xs font-bold text-[#FF5622] underline py-2'>{restrntInfo?.cuisines?.join(", ")}</p>
            <div className="flex items-center">
            {/* Timeline (dots and line) */}
            <div className="flex flex-col items-center mr-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-0.5 h-5 bg-gray-400"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>

            {/* Outlet text */}
            <div className="flex flex-col">
              <div>
                <span className="text-sm font-bold ">Outlet</span>
                <span className="text-sm font-semibold text-gray-500 ml-3">{restrntInfo.locality}</span>
              </div>
              <div className="text-sm font-bold ">25–30 mins</div>
            </div>
          </div>
          </div>
        </div>
      </div>


      <div className="w-[705px] mx-auto p-2  pb-6 pt-6">
            <div className="flex items-center justify-between pr-2  px-2">
                <h2 className="text-xl font-extrabold">Deals for you</h2>
                <div className="flex">
                    <div onClick={()=>{handleClick("left")}} className="cursor-pointer bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center"><i className="ri-arrow-left-line text-xl"></i></div>
                    <div onClick={()=>{handleClick("right")}} className="cursor-pointer bg-gray-200 rounded-full ml-2 h-8 w-8 flex justify-center items-center"><i className="ri-arrow-right-line text-xl "></i></div>
                </div>
            </div>
            <div className="flex overflow-x-scroll scroll-container  py-4 cursor-pointer" ref={parentCard}>
                {
                  restrntDeals.map((vals,i)=>{
                    return(
                      <div key={i} className='w-[37.5%] px-3 py-2 gap-2 ml-3 mr-3  rounded-2xl border border-gray-300 flex-shrink-0 flex items-center'>
                        <img className="sc-bXCLTC dAqaCk" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${vals?.info?.offerLogo}`} width="48" height="48" alt="Items At ₹124"></img>
                        <div>
                          <h3 className='text-sm capitalize font-bold'>{vals?.info?.header}</h3>
                          <h3 className='text-xs capitalize font-bold text-gray-400'>{vals?.info?.description}</h3>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
            <h3 className=' text-center mt-5 text-gray-500 uppercase font-bold text-sm tracking-[5px]'>Menu</h3>
            <div className='w-[690px] h-11 bg-[#e4e2e2bf] mx-auto mt-3 rounded-xl flex items-center justify-center relative cursor-pointer'>
                <h3 className='text-sm font-bold  text-gray-500'>Search for dishes</h3>
                <i className="ri-search-line absolute text-gray-500 right-3"></i>
            </div>
      </div>

      
      <div className='w-[705px] mx-auto bg-slate-300'>
        {
          actualMenu.map(({card:{card}})=>{
            return <MenuCard card={card} /> 

          })
        }
      </div>


    </div>
    
  )
}


function MenuCard({card}){
  // console.log(card);
  let [toggle,setToggle] = useState(true)
  function toggFnc(){
    setToggle((prev)=>{
      return !prev;
    })
  }
  if( card.itemCards ){

    return(
      <div className='mb-12 ' key={card.categoryId}>
         <div className='flex justify-between'>
           <h3>{card.title+"("+card?.itemCards.length+")"}</h3>
           <i className="ri-arrow-up-s-line cursor-pointer" onClick={toggFnc}></i>
         </div>
         <div className='pl-6'>
           {
            toggle &&
             card.itemCards.map((innr)=>{
               return (
                 <div key={innr?.card?.info?.id}>
                   <h3>{innr?.card?.info?.name}</h3>
                 </div>
               )
             })
           }
         </div>
       </div>
    )
  }
  else{
    return(
    <div className='mb-12 ' key={card.categoryId}>
       <div className='flex justify-between'>
         <h3>{card.title}</h3>
         {/* <i className="ri-arrow-up-s-line cursor-pointer" ></i> */}
       </div>
       <div className='pl-6'>
         {
           card.categories.map((innr)=>{
             return <MenuCard card={innr}/>
           })
         }
       </div>
     </div>
  )
  }
}



export default Restrnt