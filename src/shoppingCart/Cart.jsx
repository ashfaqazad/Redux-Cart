import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAddItem = () => {
    dispatch(addItem({ id: 1, name: 'Pizza', price: 10 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={handleAddItem}>Add Pizza</button>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price} 
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Quantity: {cart.totalQuantity}</p>
      <p>Total Price: ${cart.totalPrice}</p>
    </div>
  );
};

export default Cart;
