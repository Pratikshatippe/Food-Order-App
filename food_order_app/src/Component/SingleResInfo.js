import './SingleResCard.css';
const SingleResInfo = (props) =>{
    const {singleData} = props;
    console.log(singleData);
    const {name,cuisines,costForTwoMessage,avgRating,locality,avgRatingString,sla,cloudinaryImageId} = singleData?.cards[0]?.card?.card?.info;

    return(
        <div className="display-main-hotel-info">
            <div className="col-sm-6">
                <img></img>
            </div>
            <div className="col-sm-6">
                    <div className="row hotel-data">
                        {name}
                    </div>
                    <div className="row hotel-data">
                        {cuisines}
                    </div>
                    <div className="row hotel-data">
                        {locality}
                    </div>
                <div className="row rating-time-price justify-content-md-center">
                    <div className="col-sm-2 avg-rating">
                        {avgRating >= 4 ?<h3>
                        <span id="boot-icon-green" className="bi bi-star-fill"></span>
                        <span>{avgRatingString}</span></h3>: <h3><span id="boot-icon-orange" className="bi bi-star-fill"></span>
                        <span>{avgRatingString}</span></h3>}
                    </div>
                    <h3 className="col-sm-4">{sla.slaString}</h3>
                    <h3 className="col-sm-6">{costForTwoMessage}</h3>
                </div>
            </div>
        </div>
    )

}

export default SingleResInfo;