import './SingleResCard.css';
import { ITEMS_API } from '../Utils/config';
import { useState } from 'react';
const SingleResItem = (props) =>{
    const [incrementCounter,setIncrementCounter] = useState(0);
    const {itemData} = props;
    console.log(itemData);
    const incrementHandler = () =>{
        console.log("inside plus");
        setIncrementCounter(incrementCounter + 1);
    }
    const decrementHandler = () =>{
        console.log("inside minus");
        setIncrementCounter(incrementCounter - 1);
    }
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
                        {itemData.card.info.description}
                    </div>
                </div>
                <div className="col-sm-4 justify-content-sm-center second-desc-part">

                    <img src={ITEMS_API+itemData.card.info.imageId} className='item-img'></img>
                    <div className="row card-add-minus">
                        <button className="col-xs-4 minus" onclick={decrementHandler}>-</button>
                        <div className="col-xs-4">{incrementCounter}</div>
                        <button className="col-xs-4 plus" onclick={incrementHandler}>+</button>
                    </div>
                </div>
            </div>
    )
}

export default SingleResItem;