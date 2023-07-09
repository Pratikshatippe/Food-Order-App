//import './SingleResCard.css';
import { ITEMS_API } from '../Utils/config';
import { useState } from 'react';
import { addItem, removeItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';

const SingleResItem = (props) =>{
    const [incrementCounter,setIncrementCounter] = useState(0);
    const {itemData} = props;
    console.log(itemData);
    const dispatch = useDispatch();
    const incrementHandler = (item) =>{
        // console.log("inside plus");
        setIncrementCounter(incrementCounter + 1);
        dispatch(addItem(item));
    }
    const decrementHandler = (item) =>{
        console.log("inside minus");
        setIncrementCounter(incrementCounter - 1);
        dispatch(removeItem(item));
    }
    return(
            <div className="second-row flex shadow-lg">
                <div className="first-desc-part p-4">
                    <div className="row res-name font-bold text-3xl">
                        {itemData.card.info.name}
                    </div>
                    <div className="row price font-bold text-2xl">
                        {"Rs."} 
                        {itemData.card.info.price/100 || itemData.card.info.defaultPrice/100}
                    </div>
                    <div className="row description">
                        {itemData.card.info.description}
                    </div>
                </div>
                <div className="w-60 ml-40 justify-content-sm-center second-desc-part">

                    <img src={ITEMS_API+itemData.card.info.imageId} className='item-img m-2 p-2 rounded-lg'></img>
                    <div className="card-add-minus absolute bg-green-700 rounded-lg w-40 ml-6 text-white">
                        <button className="col-xs-4 minus" onClick={()=>decrementHandler(itemData.card.info)}>-</button>
                        <div className="col-xs-4">{incrementCounter}</div>
                        <button className="col-xs-4 plus" onClick={()=>incrementHandler(itemData.card.info)}>+</button>
                    </div>
                </div>
            </div>
    )
}

export default SingleResItem;