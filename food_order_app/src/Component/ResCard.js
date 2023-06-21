import './ResCard.css';
import { FOOD_IMG_URL } from '../Utils/config';

const ResCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,slaString,costForTwo} = resData?.data;
    return(
        <div className="card">
            <div className="food-img">
                <img className="food-image" 
                src={FOOD_IMG_URL+cloudinaryImageId}></img>
            </div>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <div className="rating">
                {avgRating >= 4 ? <h5 className="rating-star-green">
                    <span id="boot-icon" className="bi bi-star-fill"></span>
                    <span>{" " + avgRating}</span>
                </h5> : <h5 className="rating-star-orange">
                    <span id="boot-icon" className="bi bi-star-fill"></span>
                    <span>{" " + avgRating}</span>
                </h5> }
                <h5>{slaString}</h5>
                <h5>₹{costForTwo/100} FOR TWO</h5>
            </div>
        </div>
    )
}

export default ResCard;