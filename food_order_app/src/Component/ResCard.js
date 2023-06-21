import './ResCard.css';

const ResCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.data;
    return(
        <div className="card">
            <div className="food-img">
                <img className="food-image" 
                src={"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/"+cloudinaryImageId}></img>
            </div>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>₹{costForTwo} FOR TWO</h5>
        </div>
    )
}

export default ResCard;