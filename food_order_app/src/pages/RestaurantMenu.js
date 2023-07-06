import Shimmer from "../Component/Shimmer";
import { useParams } from "react-router-dom";
import SingleResInfo from "../Component/SingleResInfo";
import SingleResItem from "../Component/SingleResItem";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    //const [resInfo, setResInfo]=useState(null);
    const resInfo = useRestaurantMenu(resId);
    console.log("after customer hook");
    console.log(resInfo);
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async()=>{
    //     const menuData = await fetch(MENU_API+resId);
    //     const json = await menuData.json();
    //     setResInfo(json.data);
    // }
    
    if(resInfo === null) return <Shimmer/>;
    console.log(resInfo);
    //const {name,cuisines,costForTwoMessage,locality,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;
    const menuItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    console.log(menuItems)
    return (
        <div className="container">
            <div className="col main-restaurant-deatils">
                <hr></hr>
                <div className="row justify-content-sm-center main-hotel-info shadow-xl h-80">
                    <SingleResInfo singleData={resInfo}/>
                </div>
                <hr></hr>
                <ul className="cart-items p-4 w-full">
                    {/* {menuItems.map(item=>
                        <li key={item.card.info.id}>{item.card.info.name} {"- Rs."} 
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                    )} */}
                    {menuItems.map(item=>
                        <li className="h-60 p-4 flex mx-40"><SingleResItem key={item.card.info.id} itemData={item}/><hr></hr></li>
                        )}
                </ul>
            </div>
        </div>
    )

}

export default RestaurantMenu;