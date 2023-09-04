import DishCardComponent from "./DishCardComponent"
import resObj from "../utils/restaurent"
import { useState } from "react"

const BodyComponent=()=>{
    let [listOfRestuarent,setListOfRestaurent] = useState(resObj);
    return(
    <div className="body-container">
        <div className="body-content">
            <div className="filter-bar d-flex">
                <div className="search d-flex">
                    <input type="email" className="search-input form-control w-50" placeholder="Search your dish"></input>
                    <button className="search-btn btn btn-primary w-20">Search</button>
                </div>
                <div className="top-rated pull-left d-flex">
                    <button className="filter-btn btn btn-success" onClick={()=>{
                        setListOfRestaurent(resObj);
                    }}>Show All Restaurent</button>
                    <button className="filter-btn btn btn-success" onClick={()=>{
                        let filterRest= listOfRestuarent.filter(rest=>rest.info.avgRating>4);
                        setListOfRestaurent(filterRest);
                    }}>Top rated Restaurent</button>
                </div>                
            </div>
            <div className="res-card">
                {listOfRestuarent.map(restaurent=><DishCardComponent key={restaurent.info.id} restData={restaurent}/>)}
            </div>
        </div>        
    </div>
)}

function searchTopRatedRestaurent(){
    console.log("button clicked");
}

export default BodyComponent