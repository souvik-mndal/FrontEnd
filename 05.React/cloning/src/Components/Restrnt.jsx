import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

function Restrnt() {
  let parentCardDeals = useRef(null);
  let parentCardPicks = useRef(null);
  let { id } = useParams();
  let [restrntName, setRestrntName] = useState('');
  let [restrntInfo, setRestrntInfo] = useState({});
  let [restrntDeals, setRestrntDeals] = useState([]);
  let [restrntFood, setRestrntFood] = useState([]);
  let [error, setError] = useState(null);

  let mainId = id?.split("rest")[1];

  async function fetc() {
    try {
      let req = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`);
      if (!req.ok) throw new Error(`HTTP error! status: ${req.status}`);
      let res = await req.json();

      setRestrntName(res?.data?.cards?.[0]?.card?.card?.text || "Unknown");
      setRestrntInfo(res?.data?.cards?.[2]?.card?.card?.info || {});
      setRestrntDeals(res?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || []);
      setRestrntFood(res?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);
    } catch (err) {
      console.error("Failed to fetch restaurant data:", err);
      setError("Something went wrong while fetching restaurant data.");
    }
  }

  useEffect(() => {
    fetc();
  }, []);

  let actualMenu = restrntFood.filter((itm) =>
    itm?.card?.card?.itemCards || itm?.card?.card?.categories
  );

  let topPicMenu = restrntFood.filter((itm) => itm?.card?.card?.carousel);
  let actualTopPicks = topPicMenu[0]?.card?.card
  // console.log(actualTopPicks);
  function handleClickDeals(direction) {
    if (!parentCardDeals.current) return;
    if (direction === "left") {
      parentCardDeals.current.scrollBy({ left: -326, behavior: 'smooth' });
    } else {
      parentCardDeals.current.scrollBy({ left: 326, behavior: 'smooth' });
    }
  }
  function handleClickPicks(direction) {
    if (!parentCardPicks.current) return;
    if (direction === "left") {
      parentCardPicks.current.scrollBy({ left: -326, behavior: 'smooth' });
    } else {
      parentCardPicks.current.scrollBy({ left: 326, behavior: 'smooth' });
    }
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-bold p-5">
        {error}
      </div>
    );
  }

  return (
    <div className='w-full'>
      <div className='w-[800px] mx-auto pt-7 bg-gradient-to-t from-slate-500/15 to-transparent rounded-bl-[32px] rounded-br-[32px]'>
        <p className='text-xs font-bold text-[#111]'>
          <Link to={"/"}>
            <span className='text-[#777] hover:text-[#111] cursor-pointer'>Home</span>
          </Link>
          /
          <Link to={"/"}>
            <span className='text-[#777] hover:text-[#111] cursor-pointer'>{restrntInfo?.city || "City"}</span>
          </Link>
          /{restrntName}
        </p>

        <div className='px-4 py-4'>
          <h1 className='text-3xl font-extrabold pt-1 pb-5 bg-white'>{restrntName}</h1>
          <div className='border border-gray-300 bg-white p-4 rounded-3xl'>
            <div className="flex items-center gap-1">
              <div className="bg-green-700 w-[18px] h-[18px] rounded-full flex justify-center items-center">
                <i className="ri-star-fill text-white text-[11px]"></i>
              </div>
              <span className="flex items-center gap-1">
                <p className="font-extrabold text-[#111] ">
                  {restrntInfo?.avgRatingString} ({restrntInfo?.totalRatingsString})
                </p>
                <p className="font-bold">•</p>
              </span>
              <p className="font-extrabold text-[#111]">{restrntInfo?.costForTwoMessage}</p>
            </div>

            <p className='text-sm font-bold text-[#FF5622] underline py-2'>
              {(restrntInfo?.cuisines || []).join(", ")}
            </p>

            <div className="flex items-center">
              <div className="flex flex-col items-center mr-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-0.5 h-5 bg-gray-400"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-sm font-bold ">Outlet</span>
                  <span className="text-sm font-semibold text-gray-500 ml-3">{restrntInfo?.locality}</span>
                </div>
                <div className="text-sm font-bold ">25–30 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Section */}
      {restrntDeals.length > 0 && (
        <div className="w-[800px] mx-auto p-2 pb-6 pt-6">
          <div className="flex items-center justify-between pr-2 px-2">
            <h2 className="text-xl font-bold">Deals for you</h2>
            <div className="flex">
              <div onClick={() => handleClickDeals("left")} className="cursor-pointer bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center">
                <i className="ri-arrow-left-line text-xl"></i>
              </div>
              <div onClick={() => handleClickDeals("right")} className="cursor-pointer bg-gray-200 rounded-full ml-2 h-8 w-8 flex justify-center items-center">
                <i className="ri-arrow-right-line text-xl "></i>
              </div>
            </div>
          </div>

          <div className="flex overflow-x-scroll scroll-container py-4 cursor-pointer" ref={parentCardDeals}>
            {restrntDeals.map((vals, i) => (
              <div key={i} className='w-[40%] px-3 py-2 gap-2 ml-3 rounded-2xl border border-gray-300 flex-shrink-0 flex items-center'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${vals?.info?.offerLogo}`} width="48" height="48" alt="Deal" />
                <div>
                  <h3 className='text-lg capitalize font-extrabold'>{vals?.info?.header}</h3>
                  <h3 className='text-sm capitalize font-bold text-gray-400'>{vals?.info?.description}</h3>
                </div>
              </div>
            ))}
          </div>

          <h3 className=' text-center mt-5 text-gray-500 uppercase font-bold text-sm tracking-[5px]'>Menu</h3>
          <div className='w-[780px] h-11 bg-[#e4e2e2bf] mx-auto mt-3 rounded-xl flex items-center justify-center relative cursor-pointer'>
            <h3 className=' font-bold text-gray-500'>Search for dishes</h3>
            <i className="ri-search-line absolute text-gray-500 right-3"></i>
          </div>
        </div>
      )}
      {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/ShCB1 */}
      {
        (actualTopPicks?.carousel.length > 0) &&
        <div className=' w-[800px] mx-auto px-2 mt-3  mb-5'>
        <div className="flex items-center justify-between pr-2 px-2">
            <h2 className="text-xl font-bold">{actualTopPicks?.title}</h2>
            <div className="flex">
              <div onClick={() => handleClickPicks("left")} className="cursor-pointer bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center">
                <i className="ri-arrow-left-line text-xl"></i>
              </div>
              <div onClick={() => handleClickPicks("right")} className="cursor-pointer bg-gray-200 rounded-full ml-2 h-8 w-8 flex justify-center items-center">
                <i className="ri-arrow-right-line text-xl "></i>
              </div>
            </div>
          </div>
        <div className="flex overflow-x-scroll scroll-container py-4 cursor-pointer" ref={parentCardPicks}>
            {actualTopPicks?.carousel.map((vals, i) => {
                // console.log(vals?.dish?.info?.price , vals?.dish?.info?.finalPrice)
                // console.log(vals?.dish?.info);
                let oldPrice = vals?.dish?.info?.price || vals?.dish?.info?.defaultPrice
                let newPrice = vals?.dish?.info?.finalPrice
                // console.log(oldPrice,newPrice);
                return(

                  <div key={i} className='w-[40%] h-[310px]  ml-3 rounded-2xl border border-gray-300 flex-shrink-0 flex items-center overflow-hidden relative'>
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${vals?.creativeId}`} className='w-full h-full object-cover' alt="Deal" />
                    <div className='absolute left-0 bottom-0 flex w-full items-center justify-between h-[20%] px-3'>
                      <div className='pb-3'>
                        {
                          
                          <>
                            {(newPrice) ? 
                            <h3 className='text-base  font-bold text-white line-through'>{"₹"+oldPrice/100}</h3>
                            :
                            <h3 className='text-base  font-bold text-white '>{"₹"+oldPrice/100}</h3>}
                            <h3 className='text-base capitalize font-bold text-white '>
                              {
                                ( newPrice ) ? "₹"+newPrice/100 : null
                              }
                            </h3>
                          </>
                        }
                        
                      </div>
                      <button className=' rounded-lg text-lg w-[37.5%] py-[5px] font-bold text-green-600 border border-gray-200  bg-white'>
                        ADD
                      </button>
                    </div>
                  </div>
                
                )
              })}
          </div>
      </div>
      }
      

      {/* Menu Section */}
      <div className='w-[780px] mx-auto bg-[#e4e2e2bf]'>
        {actualMenu.map(({ card: { card } }, idx) => (
          <MenuCard key={idx} card={card} />
        ))}
      </div>
    </div>
  );
}


function MenuCard({ card }) {
  const [toggle, setToggle] = useState(true);
  const arrow = toggle ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";

  const toggleHandler = () => setToggle((prev) => !prev);

  if (!card) return null;

  const { itemCards = [], title, categoryId, categories = [] } = card;

  // Handle grouped categories
  if (!itemCards.length && categories.length > 0) {
    return (
      <div className='mt-3 bg-white border-t border-gray-300 ' key={categoryId}>
        
        <div className='flex py-4 pl-3 justify-between '>
          <h3 className='font-extrabold text-lg'>{title || "Untitled Section"}</h3>
        </div>
        <div>
          {categories.map((innrCard, idx) => (
            <InnerMenuCard key={idx} card={innrCard} />
          ))}
        </div>
      </div>
    );
  }

  // Handle section with items
  return (
    <div className='px-3 mb-3 bg-white border-t border-gray-300' key={categoryId}>
      <div className='flex py-4 pr-3 justify-between cursor-pointer ' onClick={toggleHandler}>
        <h3 className='font-extrabold text-lg'>{`${title || "Items"} (${itemCards.length})`}</h3>
        <i className={`${arrow} cursor-pointer text-2xl`} />
      </div>

      {toggle &&
  itemCards.map((itemWrapper) => {
    const item = itemWrapper?.card?.info;
    if (!item) return null;
    return <MenuItem key={item.id} item={item} />;
  })}
    </div>
  );
}

function InnerMenuCard({ card }) {
  const [toggle, setToggle] = useState(false);
  const arrow = toggle ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";

  const toggleHandler = () => setToggle((prev) => !prev);

  if (!card || !card.itemCards?.length) return null;

  const { itemCards = [], title = "Category", categoryId } = card;

  return (
    <div className='px-3  bg-white border-t border-gray-300 ' key={categoryId}>
      <div className='flex py-3 pr-3  justify-between cursor-pointer ' onClick={toggleHandler}>
        <h3 className='font-bold text-base'>{`${title} (${itemCards.length})`}</h3>
        <i className={`${arrow} cursor-pointer text-2xl`} />
      </div>

      {toggle &&
  itemCards.map((itemWrapper) => {
    const item = itemWrapper?.card?.info;
    if (!item) return null;
    return <MenuItem key={item.id} item={item} />;
  })}
    </div>
  );
}

function MenuItem({ item }) {
  const [moreToggle, setMoreToggle] = useState(false);
  // console.log(item);
  const {
    id,
    name = "Unnamed Item",
    isVeg,
    defaultPrice,
    price,
    description = "",
    imageId,
    ratings,
  } = item;

  const itemPrice = defaultPrice ?? price ?? 0;
  const displayPrice = `₹${itemPrice / 100}`;
  const { rating, ratingCountV2 } = ratings?.aggregatedRating || {};
  const trimmedDescription = description?.substring(0, 140);
  // console.log(isVeg);
  return (
    <div className='border-b border-gray-300 flex justify-between py-10 '>
      <div className='w-[72.5%] overflow-hidden'>
        {
          (isVeg) ? <img
            src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
            alt="veg-icon"
            className='h-[15px] ' 
          /> : <img
            src="https://i.pinimg.com/474x/14/0b/0e/140b0e8a911d1734c496155aa97a56a8.jpg"
            alt="nonveg-icon"
            className='h-[15px] ' 
          />
        }
        <h3 className='text-lg font-bold text-[#333]'>{name}</h3>
        <h3 className='font-semibold text-[#333]'>{displayPrice}</h3>

        {rating && ratingCountV2 && (
          <div className='text-lg font-bold text-[#333] flex items-center gap-[2px] pt-3'>
            <i className="ri-star-fill text-green-600 text-xs"></i>
            <h3 className='text-xs text-[#222]'>{rating}</h3>
            <h3 className='text-xs text-gray-600'>{`(${ratingCountV2})`}</h3>
          </div>
        )}

        {description && (
          <span>
            <h3 className='break-all inline-block text-[15px] font-semibold text-gray-600 pt-3'>
              {moreToggle ? description : trimmedDescription}
              {description.length > 140 && (
                <button
                  className='text-[15px] pl-1 font-extrabold text-gray-600 cursor-pointer'
                  onClick={() => setMoreToggle(!moreToggle)}
                >
                  {moreToggle ? " less" : " ...more"}
                </button>
              )}
            </h3>
          </span>
        )}
      </div>

      <div className='w-[160px] h-[145px] relative'>
        {imageId && (
          <img
            className='w-full h-full rounded-xl object-cover'
            alt={name}
            loading="lazy"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          />
        )}
        <button className='absolute -bottom-4 rounded-lg text-lg w-[70%] py-[5px] font-bold text-green-600 border border-gray-200 left-1/2 transform -translate-x-1/2 bg-white'>
          ADD
        </button>
      </div>
    </div>
  );
}



export default Restrnt
