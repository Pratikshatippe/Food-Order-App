import { useEffect, useState } from "react";
import Shimmer from "../Component/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const [resInfo, setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId="+resId);
        const json = await menuData.json();
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>;
    console.log(resInfo);
    const {name,cuisines,costForTwoMessage,locality,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
    const menuItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    console.log(menuItems)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{`${cuisines} ${costForTwoMessage}`}</h4>
            <h4>{locality}</h4>
            <ul>
                {menuItems.map(item=>
                    <li key={item.card.info.id}>{item.card.info.name} {"- Rs."} 
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                )}
            </ul>
        </div>
    )

}

export default RestaurantMenu;