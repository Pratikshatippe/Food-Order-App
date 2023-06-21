import './RestaurantCards.css';
import ResCard from './ResCard';
import restaurantList from '../Utils/mockData';
import {useState} from 'react';

const RestaurantCards = () =>{
    const [resList, setList] = useState(restaurantList);

    const setTopRatedRestaurants = () =>{
        const filteredList = restaurantList.filter(listData=>listData.data.avgRating > 4);
        setList(filteredList);
    }
    return(
        <div className="restaurant-cards">
            <div className="filter">
                <button className="filter-btn" onClick={setTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="res-card">{
                resList.map(list=>(
                <ResCard key={list.data.id} resData = {list}/>))}
            </div>
        </div>
)
}

export default RestaurantCards;