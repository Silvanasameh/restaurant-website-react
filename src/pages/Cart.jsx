import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./cart.css"; 

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(ShopContext);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("L.E", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    alert(" Thank you for your order!\nTotal: " + calculateTotal() + " L.E");
  };

  return (
    <div className="container py-5 cart-page">
      <h2 className="mb-4">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {/*  Left Side - Cart Items */}
          <div className="col-lg-8">
            {cart.map((item) => (
              <div className="cart-item mb-3 p-3 border rounded d-flex align-items-center" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img me-3"
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="text-muted mb-1">{item.price}</p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/*  Right Side - Checkout Box */}
          <div className="col-lg-4">
            <div className="checkout-box p-4 shadow-sm rounded">
              <h4 className="mb-3">Order Summary</h4>
              <p className="d-flex justify-content-between">
                <span>Total Items:</span>
                <strong>{cart.reduce((sum, i) => sum + i.quantity, 0)}</strong>
              </p>
              <p className="d-flex justify-content-between">
                <span>Total Price:</span>
                <strong>{calculateTotal()} L.E</strong>
              </p>
              <button className="btn btn-primary w-100 mt-3" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;





