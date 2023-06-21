import './RestaurantCards.css';
import ResCard from './ResCard';

const RestaurantCards = () =>{
    return(
        <div className="restaurant-cards">
            <div className="search">Search</div>
            <div className="res-card">
                <ResCard name="Gavran Misal" location="kolhapur, karad" rating="4.5 stars" time="20 mins"/>
                <ResCard name="Vada Sankruti" location="Delhi, karad" rating="4.1 stars" time="40 mins"/>
                <ResCard name="Kshatriya Hotel" location="kolhapur, prayagraj" rating="3.8 stars" time="50 mins"/>
                <ResCard name="Shri Ram Ice-cream" location="Pune, karad" rating="3.9 stars" time="30 mins"/>
                <ResCard name="Jasawant Sweets" location="kolhapur, karad" rating="3.5 stars" time="10 mins"/>
                <ResCard name="Quaswa Hills" location="Sangali, karad" rating="4.1 stars" time="20 mins"/>
                <ResCard name="Krishna Hotel" location="Satara, Thane" rating="4.2 stars" time="60 mins"/>
                <ResCard name="Sarathi Restaurant" location="kolhapur, karad" rating="3.5 stars" time="40 mins"/>
                <ResCard name="Zoraba Hotel" location="kolhapur, karad" rating="4.3 stars" time="20 mins"/>
            </div>
        </div>
)
}

export default RestaurantCards;