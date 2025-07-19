import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "@fortawesome/fontawesome-free/css/all.min.css";


const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(ShopContext);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist yet.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-12 col-md-6 mb-3" key={item.id}>
              <div className="card d-flex flex-row align-items-center p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="ms-3">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1">{item.price}</p>

                  <div className="d-flex gap-2">
                    {/*  Add to Cart Button */}
                    <button
                      className="btn btn-sm btn-primary d-flex align-items-center gap-1"
                      onClick={() => addToCart(item)}
                    >
                      <i className="fas fa-shopping-basket"></i> Add to Cart
                    </button>

                    {/*  Remove from Wishlist Button */}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;


