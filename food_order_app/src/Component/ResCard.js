// nkbl;import './ResCard.css';
import { FOOD_IMG_URL } from '../Utils/config';

const ResCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,slaString,costForTwo} = resData?.data;
    return(
        <div className="card w-96 hover:border hover:bg-slate-300 m-2 shadow-lg">
            <div className="food-img px-4">
                <img className="food-image w-full h-80 p-3 shadow-sm" 
                src={FOOD_IMG_URL+cloudinaryImageId}></img>
            </div>
            <div className='h-32 w-full m-2 p-2 items-center'>
            <h3 className='h-10 text-3xl'>{name}</h3>
            <h5 className='h-12 text-lg'>{cuisines.join(", ")}</h5>
            <div className="rating flex text-xl">
                {avgRating >= 4 ? <h5 className="rating-star-green h-8 text-white bg-green-500 px-2">
                    <span id="boot-icon" className="bi bi-star-fill"></span>
                    <span>{" " + avgRating}</span>
                </h5> : <h5 className="rating-star-orange h-8 text-white bg-orange-500">
                    <span id="boot-icon" className="bi bi-star-fill"></span>
                    <span>{" " + avgRating}</span>
                </h5> }
                <h5 className='px-2'>{slaString}</h5>
                <h5 className='px-2 h-10'>₹{costForTwo/100} FOR TWO</h5>
            </div>
            </div>
        </div>
    )
}

export default ResCard;