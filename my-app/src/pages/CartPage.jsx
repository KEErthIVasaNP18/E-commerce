// import React from 'react';
// import { useCart } from '../CartContext';
// import './CartPage.css';

// const CartPage = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   return (
//     <div className="container my-5">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         <div>
//           {cartItems.map(item => (
//             <div key={item._id} className="d-flex justify-content-between align-items-center border p-3 my-2">
//               <img src={item.Img} alt={item.Name} style={{ width: '100px', height: '80px', objectFit: 'cover' }} />
//               <div>
//                 <h5>{item.Name}</h5>
//                 <p>₹{item.Price}</p>
//               </div>
//               <div>
//                 <button onClick={() => updateQuantity(item._id, -1)}>-</button>
//                 <span className="mx-2">{item.quantity}</span>
//                 <button onClick={() => updateQuantity(item._id, 1)}>+</button>
//               </div>
//               <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;


import React from 'react';
import { useCart } from '../CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.Price * item.quantity;
    }, 0);
  };

  return (
    <div className="container my-5 cart-container">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">No items in cart</p>
      ) : (
        <div>
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
            Total: ₹{calculateTotal()}
          </div>
        </div>
      )}

      <button className="btn btn-warning px-4 py-2 fw-bold rounded-pill shadow">
        Buy Now
      </button>
    </div>
  );
};

export default CartPage;
