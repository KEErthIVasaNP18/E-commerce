import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useCart } from '../CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);

  return (
    <div className="container my-5 cart-container">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">No items in cart</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.Img} alt={item.Name} />
              <div>
                <h5>{item.Name}</h5>
                <p>₹{item.Price}</p>
              </div>
              <div className="cart-quantity-controls">
                <button onClick={() => updateQuantity(item._id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, 1)}>+</button>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}

          <div className="text-end fw-bold fs-5 mt-4">
            Total: ₹{totalAmount}
          </div>

         <button
            className="btn btn-warning px-4 py-2 fw-bold rounded-pill shadow"
            onClick={() => navigate('/verify_payment', { state: { amount: totalAmount } })}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
