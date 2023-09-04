import { CDN_URL } from "../utils/constants";

const DishCardComponent=(props)=>{
    const {restData}=props;
    const {name, cuisines, sla, avgRating,costForTwo,cloudinaryImageId}=restData?.info
    return (
        <div className="card">
            <div className="rest-food-image">
                <img className="food-img" src={CDN_URL+cloudinaryImageId}/>
            </div>
            <div className="rest-info">
                <h4>{name}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{sla.deliveryTime}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    )
}

export default DishCardComponent