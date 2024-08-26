import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shrimmer from "./Shrimmer";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../uitls/customHooks/useOnlineStatus";
import { withStarRated } from "./RestaurantCard";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  

  const [search, setSearch] = useState("");

  const RestaurantCardStarRated =withStarRated(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(listOfRestaurants);

  const onlineStatus =useOnlineStatus();

  if(onlineStatus ===false) return <h1>Looks like you were in offline!!! Please check your internet c</h1>

  if (listOfRestaurants.length === 0) {
    return <Shrimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            name="search"
            placeholder="Search Restaurants"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
            console.log(search)
           const filteredRestaurants= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()))
           setFilterRestaurants(filteredRestaurants)
          }}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filterRes = listOfRestaurants.filter((item) => {
              return item.info.avgRating > 4.2;
            });
            setFilterRestaurants(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>   
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((item) => {
          return (<Link key={item.info.id} to={"/restaurants/"+item.info.id}>
             {item.info.avgRating > 4.4 ? (<RestaurantCardStarRated resData={item}/>) : (<RestaurantCard  resData={item}/>)}
            </Link>);
        })}
      </div>
    </div>
  );
};
export default Body;
