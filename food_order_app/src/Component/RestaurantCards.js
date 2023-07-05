//import './RestaurantCards.css';
import ResCard from './ResCard';
//import restaurantList from '../Utils/mockData';
import { useContext, useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { CARDS_API } from '../Utils/config';
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from '../Store/UserContext';

const RestaurantCards = () =>{
    //const [resList, setList] = useState(restaurantList);  from mockdata data is coming

    const [resList, setList] = useState([]);
    const [searchResList, setSearchResList] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchDataNotPresent,setsearchDataNotPresent] = useState(false);

    const {user, setUser}= useContext(UserContext);
    console.log(user);
    
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
            <div className="filter w-full my-6 mx-56">
                <button className="filter-btn px-4 py-2  rounded-lg bg-gray-100" onClick={setTopRatedRestaurants}>Top Rated Restaurants</button>
                <input type="text" className='search-input w-1/3 rounded-2xl mx-6 my-2 p-1 border border-solid border-gray-600' value={searchInputValue} placeholder='    Enter name of dish which you want to eat now' onChange={(e)=>setSearchInputValue(e.target.value)}/>
                <button className='search-btn px-4 py-2 mx-2 bg-green-200 rounded-lg' onClick={filterSearchHandler}>Search</button>
                <input className='border border-solid border-black' value={user.name} onChange={(e)=>{setUser({name:e.target.value,email:"pt@gmail.com"})}}></input>
            </div>
            <div className="res-card flex flex-wrap">{
                searchDataNotPresent ? "Data Not Found" : (searchResList.length === 0 ? <Shimmer/>:
                searchResList.map(list=>(
                <Link key={list.data.id} to={"/restaurants/"+list.data.id} className='text-link'><ResCard  resData = {list}/></Link>)))}
            </div>
        </div>
)
}

export default RestaurantCards;