import './ResCard.css';

const ResCard = (props) =>{
    const {resData} = props;
    return(
        <div className="card">
            <div className="food-img">
                <img className="food-img" 
                src={"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/"+resData.data.cloudinaryImageId}></img>
            </div>
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines}</h4>
            <h4>{resData.data.avgRating}</h4>
            <h4>₹{resData.data.costForTwo} FOR TWO</h4>
        </div>
    )
}

export default ResCard;