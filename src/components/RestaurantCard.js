import {CON_URL} from "../uitls/images/constants"
const RestaurantCard =(props)=>{

    const {resData}=props;

    const {name,cuisines,avgRating}=resData.info;

    const {deliveryTime} =resData.info.sla;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
            className="rounded-lg" 
            alt="res-logo" 
            src={CON_URL +resData.info.cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <span>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} min</h4>
            </span>
            <h4>{cuisines.join(", ")}</h4>     
        </div>
    )
}

export const withStarRated =(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Star Rated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard