import './RestaurantCards.css';
import ResCard from './ResCard';
//import restaurantList from '../Utils/mockData';
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { CARDS_API } from '../Utils/config';
import useOnlineStatus from "../Utils/useOnlineStatus";

const RestaurantCards = () =>{
    //const [resList, setList] = useState(restaurantList);  from mockdata data is coming

    const [resList, setList] = useState([]);
    const [searchResList, setSearchResList] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchDataNotPresent,setsearchDataNotPresent] = useState(false);
    
    useEffect(()=>{
        fetchData();
    },[])

    const setTopRatedRestaurants = () =>{
        const filteredList = resList.filter(listData=>listData.data.avgRating > 4);
        setSearchResList(filteredList);
    }

    const filterSearchHandler = () =>{
        if(searchInputValue !== ""){
            const filteredSearchList = resList.filter(elem=>elem.data.name.toLowerCase().includes(searchInputValue.toLowerCase()));
            filteredSearchList.length === 0 ? setsearchDataNotPresent(true):setSearchResList(filteredSearchList);
            setSearchInputValue("");
        }
        else{
            setSearchResList(resList);
            setsearchDataNotPresent(false);
        }
    }
    
    const fetchData = async() =>{
        const data = await fetch(CARDS_API);
        const json = await data.json();
        //Optional Chaining
        const fetchedData = json?.data?.cards[2]?.data?.data?.cards;
        setList(fetchedData);
        setSearchResList(fetchedData);
    }
    
    const olStatus = useOnlineStatus();
    if(olStatus === false){
        return <h1>Your are offline!! Please check your internet connection!</h1>
    }

    return(
        <div className="restaurant-cards">
            <div className="filter">
                <button className="filter-btn" onClick={setTopRatedRestaurants}>Top Rated Restaurants</button>
                <input type="text" className='search-input' value={searchInputValue} placeholder='Enter name of dish which you want to eat now'onChange={(e)=>setSearchInputValue(e.target.value)}/>
                <button className='search-btn' onClick={filterSearchHandler}>Search</button>
            </div>
            <div className="res-card">{
                searchDataNotPresent ? "Data Not Found" : (searchResList.length === 0 ? <Shimmer/>:
                searchResList.map(list=>(
                <Link key={list.data.id} to={"/restaurants/"+list.data.id} className='text-link'><ResCard  resData = {list}/></Link>)))}
            </div>
        </div>
)
}

export default RestaurantCards;