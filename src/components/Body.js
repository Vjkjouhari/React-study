import RestraCard from "./RestraCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestra, setListofRestra] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestra, setFilteredRestra] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6692601&lng=77.19524349999999&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const json = await data.json();
      if (json.data && json.data.cards && Array.isArray(json.data.cards)) {
        // Use array slicing to start from the 3rd position
        const slicedCards = json.data.cards.slice(3);

        const mappedData = slicedCards.map((item, index) => {
          return item.card; // Return the mapped item if needed
        });
        setListofRestra(mappedData);
        setFilteredRestra(mappedData);
        setDataLoaded(true);
      } else {
        console.error("Property 'data.cards' is not an array or not found in the response.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // conditional rendering
  // if(listofRestra.length===0){
  //   return <Shimmer />
  // }

  return listofRestra.length===0 ? <Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" placeholder="Looking for Something Search here" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button onClick={() => {
              const filterRestra = listofRestra.filter((res)=>res.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestra(filterRestra);
              setSearchText('');
          }}>Look for it</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log(dataLoaded)
            if (dataLoaded) {
              const filteredList = listofRestra.filter((res) => res.card.info.avgRating > 4);
              setListofRestra(filteredList);
            }
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestra.map((restra, index) => (
          <RestraCard key={index} resData={restra} />
        ))}
      </div>
    </div>
  );
};

export default Body;
