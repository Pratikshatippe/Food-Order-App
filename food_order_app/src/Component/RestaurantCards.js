import './RestaurantCards.css';
import ResCard from './ResCard';
import restaurantList from '../Utils/mockData';
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';

const RestaurantCards = () =>{
    //const [resList, setList] = useState(restaurantList);  from mockdata data is coming

    const [resList, setList] = useState([]);
    const setTopRatedRestaurants = () =>{
        const filteredList = restaurantList.filter(listData=>listData.data.avgRating > 4);
        setList(filteredList);
    }
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setList(json?.data?.cards[0]?.data?.data?.cards);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <div className="restaurant-cards">
            <div className="filter">
                <button className="filter-btn" onClick={setTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="res-card">{
                resList.length === 0 ? <Shimmer/>:
                resList.map(list=>(
                <ResCard key={list.data.id} resData = {list}/>))}
            </div>
        </div>
)
}

export default RestaurantCards;