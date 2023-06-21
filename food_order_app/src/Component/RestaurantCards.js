import './RestaurantCards.css';
import ResCard from './ResCard';

const RestaurantCards = () =>{
    return(
        <div className="restaurant-cards">
            <div className="search">Search</div>
            <div className="res-card">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
)
}

export default RestaurantCards;