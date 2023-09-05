const arr=[];
for(let i=0;i<20;i++){
    arr.push(i);
}

const ShimmerCard= ()=>{
    return (
        <div className="shimmer-body">
            <div className="body-content">
                <div className="filter-bar d-flex">
                    <div className="search d-flex">
                        <input type="email" className="search-input form-control w-50" placeholder="Search your dish"></input>
                        <button className="search-btn btn btn-primary w-20">Search</button>
                    </div>
                    <div className="top-rated pull-left d-flex">
                        <button className="filter-btn btn btn-success" onClick={()=>{}}>Show All Restaurent</button>
                        <button className="filter-btn btn btn-success" onClick={()=>{}}>Top rated Restaurent</button>
                    </div>                
                </div>
            
                <div className="shimmer-container d-flex">
                    {arr.map(card=> <div className="shimmer-card">
                        <div className="shimmer-small-card"></div>
                    </div>)}           
                </div>
            </div>
        </div>
    )
}

export default ShimmerCard