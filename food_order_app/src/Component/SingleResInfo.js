//import './SingleResCard.css';
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
                    <div className="row hotel-data py-6">
                        {name}
                    </div>
                    <div className="row hotel-data py-2">
                        {cuisines}
                    </div>
                    <div className="row hotel-data py-6 ">
                        {locality}
                    </div>
                <div className="row rating-time-price justify-content-md-center h-20 items-center">
                    <div className="col-sm-3 avg-rating">
                        {avgRating >= 4 ?<h3 className="h-8 text-white bg-green-500 w-20 px-2">
                        <span id="boot-icon-green" className="bi bi-star-fill"></span>
                        <span>{avgRatingString}</span></h3>: <h3 className="h-8 text-white bg-orange-500"><span id="boot-icon-orange" className="bi bi-star-fill"></span>
                        <span>{avgRatingString}</span></h3>}
                    </div>
                    <h3 className="col-sm-3">{sla.slaString}</h3>
                    <h3 className="col-sm-6">{costForTwoMessage}</h3>
                </div>
            </div>
        </div>
    )

}

export default SingleResInfo;