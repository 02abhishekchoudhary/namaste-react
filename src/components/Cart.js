import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Right way of subscribing the store -> High efficient
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // Less efficient - Because it will change whenever store changes.
  // const store = useSelector((store) => store);
  // const cartItems2 = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-red-400 text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div>
        {cartItems.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <MenuItem key={index} menuInfo={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
