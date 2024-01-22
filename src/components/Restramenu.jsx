import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restramenu = () =>{
    const [restrainfo, setRestrainfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6692691&lng=77.19524349999999&restaurantId=28968&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.itemCards[0].card.info.name);
        // json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.itemCards[0].card.info.name
        setRestrainfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card);
    }
    console.log(restrainfo)
    if(restrainfo === null){
        <Shimmer />; 
    }
    return  (
        <div className="menu">
            <ul>
                <label>Items</label>
                {restrainfo?.itemCards?.map((item) =><li key={item?.card?.info?.id}>value={item?.card?.info?.name} - {item?.card?.info?.defaultPrice/100} INR</li>)}
            </ul>        
        </div>
    );
}

export default Restramenu;