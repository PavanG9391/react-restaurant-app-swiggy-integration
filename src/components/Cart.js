import { useDispatch, useSelector } from "react-redux"
import ItemLists from "./ItemLists"
import { clearCart } from "../uitls/cartSlice";

const Cart =()=>{
    const dispatch=useDispatch();
    const cartItems = useSelector((store)=>store.cart.items)
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
  return(
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
            > Clear Cart</button>
            {cartItems.length ===0 && <h3>Cart is Empty!! Add Items to the cart !!</h3>}
            <ItemLists items={cartItems}/>
        </div>
    </div>
  )
}
export default Cart