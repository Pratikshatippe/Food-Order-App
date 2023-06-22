import { useEffect, useState } from "react";
import Shimmer from "../Component/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/config";
import SingleResInfo from "../Component/SingleResInfo";
import SingleResItem from "../Component/SingleResItem";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const [resInfo, setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const menuData = await fetch(MENU_API+resId);
        const json = await menuData.json();
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>;
    console.log(resInfo);
    //const {name,cuisines,costForTwoMessage,locality,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
    const menuItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    console.log(menuItems)
    return (
        <div className="container">
            <div className="col main-restaurant-deatils">
                {/* <h1>{name}</h1>
                <h4>{`${cuisines} ${costForTwoMessage}`}</h4>
                <h4>{locality}</h4> */}
                <div className="row justify-content-sm-center main-hotel-info">
                    <SingleResInfo singleData={resInfo}/>
                </div>
                <ul className="row cart-items">
                    {/* {menuItems.map(item=>
                        <li key={item.card.info.id}>{item.card.info.name} {"- Rs."} 
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                    )} */}
                    {menuItems.map(item=>
                        <SingleResItem key={item.card.info.id} itemData={item}/>
                        )}
                </ul>
            </div>
        </div>
    )

}

export default RestaurantMenu;