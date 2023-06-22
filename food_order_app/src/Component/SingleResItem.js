import './SingleResCard.css';
const SingleResItem = (props) =>{
    const {itemData} = props;
    console.log(itemData);
    //const {name,price,category} = itemData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;

    return(
            <div className="row second-row">
                <div className="col-sm-8 first-desc-part">
                    <div className="row res-name">
                        {itemData.card.info.name}
                    </div>
                    <div className="row price">
                        {"Rs."} 
                        {itemData.card.info.price/100 || itemData.card.info.defaultPrice/100}
                    </div>
                    <div className="row description">
                        {itemData.card.info.category}
                    </div>
                </div>
                <div className="col-sm-4 justify-content-sm-center second-desc-part">

                    <img></img>
                    <div className="row card-add-minus">
                        <div className="col-xs-4">-</div>
                        <div className="col-xs-4">0</div>
                        <div className="col-xs-4">+</div>
                    </div>
                </div>
            </div>
    )
}

export default SingleResItem;