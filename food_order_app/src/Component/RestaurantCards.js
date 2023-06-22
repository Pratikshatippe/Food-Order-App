import './RestaurantCards.css';
import ResCard from './ResCard';
//import restaurantList from '../Utils/mockData';
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';

const RestaurantCards = () =>{
    //const [resList, setList] = useState(restaurantList);  from mockdata data is coming

    const [resList, setList] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");
    
    const setTopRatedRestaurants = () =>{
        const filteredList = resList.filter(listData=>listData.data.avgRating > 4);
        setList(filteredList);
    }

    const setSearchInputHandler = (searchData) =>{
        setSearchInputValue(searchData);
    }

    const filterSearchHandler = () =>{
        if(searchInputValue !== ""){
            const filteredSearchList = resList.filter(elem=>elem.data.name.toLowerCase().includes(searchInputValue.toLowerCase()));
            setList(filteredSearchList);
        }
        else{
            setList(resList);
        }
    }
    
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setList(json?.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <div className="restaurant-cards">
            <div className="filter">
                <button className="filter-btn" onClick={setTopRatedRestaurants}>Top Rated Restaurants</button>
                <input type="text" className='search-input' placeholder='Enter name of dish which you want to eat now'onChange={(e)=>setSearchInputHandler(e.target.value)}/>
                <button className='search-btn' onClick={filterSearchHandler}>Search</button>
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