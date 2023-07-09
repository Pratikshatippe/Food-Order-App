import { useDispatch, useSelector } from "react-redux";
import store from "../Store/store";
import { addItem, removeItem } from "../Utils/cartSlice";


const Cart = () =>{
    const carItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    return(
        <div >
            {carItems.map(item=>
                <li key={item.id} className="border p-4 shadow-lg">
                <span>{item.name} {"  "}</span>
                <span>
                    <button className="bg-green-500 px-4" onClick={()=>dispatch(removeItem(item))}>-</button>
                    <button className="bg-green-500 px-4" onClick={()=>dispatch(addItem(item))}>+</button>
                </span>
                </li>
                )}
        </div>
    )
}

export default Cart;