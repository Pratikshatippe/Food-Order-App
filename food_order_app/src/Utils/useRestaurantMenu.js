import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/config";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const menuData = await fetch(MENU_API+resId);
        const json = await menuData.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;