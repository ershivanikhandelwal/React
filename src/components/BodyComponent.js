import DishCardComponent from "./DishCardComponent"
import resObj from "../utils/restaurent"
import { useEffect, useState } from "react"
import ShimmerCard from "./ShimmerCard"

const BodyComponent=()=>{
    let [listOfRestuarent,setListOfRestaurent] = useState([]);
    let [FilterlistOfRestuarent,setFilterListOfRestaurent] = useState([]);
    const [searchText,setSearchText]=useState("");
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9545943&lng=75.7455944&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData= await data.json();
        const newData=jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
        setListOfRestaurent(resObj)
        setFilterListOfRestaurent(resObj)
    }

    //conditional rendering
    // if(listOfRestuarent.length===0){
        //  return (<ShimmerCard/>)
    // }

    return listOfRestuarent.length===0?(<ShimmerCard/>):(<div className="body-container">
        <div className="body-content">
            <div className="filter-bar d-flex">
                <div className="search d-flex">
                    <input type="email" className="search-input form-control w-50" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} placeholder="Search your dish"></input>
                    <button className="search-btn btn btn-primary w-20" onClick={()=>{
                        let filteredRest=listOfRestuarent.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterListOfRestaurent(filteredRest);
                    }}>Search</button>
                </div>
                <div className="top-rated pull-left d-flex">
                    <button className="filter-btn btn btn-success" onClick={()=>{
                        setFilterListOfRestaurent(listOfRestuarent);
                    }}>Show All Restaurent</button>
                    <button className="filter-btn btn btn-success" onClick={()=>{
                        let filterRest= listOfRestuarent.filter(rest=>rest.info.avgRating>4);
                        setFilterListOfRestaurent(filterRest);
                    }}>Top rated Restaurent</button>
                </div>                
            </div>
            <div className="res-card">
                {FilterlistOfRestuarent.map(restaurent=><DishCardComponent key={restaurent.info.id} restData={restaurent}/>)}
            </div>
        </div>        
    </div>
)}

function searchTopRatedRestaurent(){
    console.log("button clicked");
}

export default BodyComponent