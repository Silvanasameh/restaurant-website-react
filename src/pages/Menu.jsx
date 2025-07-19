import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./menu.css";
import { ShopContext } from "../context/ShopContext";

const MenuPage = () => {
  const { addToWishlist, addToCart } = useContext(ShopContext);

  //  All Products with Category
  const allProducts = [
    {
      id: 1,
      name: "Creamy Rice Pudding",
      description:
        "Classic Egyptian rice pudding, rich and creamy, topped with nuts and cinnamon.",
      price: "5.99L.E",
      image: "/images/menu/om ali.png",
      category: "Signature Desserts",
    },
    {
      id: 2,
      name: "Traditional Om Ali",
      description:
        "Warm bread pudding soaked in milk, baked to perfection with cream and raisins.",
      price: "6.50L.E",
      image: "/images/menu/om ali.png",
      category: "Signature Desserts",
    },
    {
      id: 3,
      name: "Kunafa with Cream",
      description:
        "Shredded phyllo pastry baked with sweet cheese or cream, drizzled with syrup.",
      price: "7.25L.E",
      image: "/images/menu/rozblaban.png",
      category: "Signature Desserts",
    },
    {
      id: 4,
      name: "Soft Basbousa",
      description:
        "Sweet semolina cake baked with yogurt, soaked in rosewater syrup.",
      price: "4.75L.E",
      image: "/images/menu/rozblaban.png",
      category: "Signature Desserts",
    },
    {
      id: 5,
      name: "Roz Bel Laban with Ice Cream",
      description:
        "Our classic rice pudding served with a scoop of premium vanilla ice cream.",
      price: "7.00L.E",
      image: "/images/menu/om ali.png",
      category: "Signature Desserts",
    },
    {
      id: 6,
      name: "Fresh Mango Juice",
      description: "100% natural mango juice, sweet and invigorating.",
      price: "4.00L.E",
      image: "/images/menu/om ali.png",
      category: "Refreshing Drinks",
    },
    {
      id: 7,
      name: "Iced Hibiscus Tea",
      description: "Traditional Karkadeh tea, served chilled and sweetened.",
      price: "3.50L.E",
      image: "/images/menu/om ali.png",
      category: "Refreshing Drinks",
    },
    {
      id: 8,
      name: "Sweet Tamarind Juice",
      description:
        "A tangy and sweet traditional drink, perfect for hot days.",
      price: "3.75L.E",
      image: "/images/menu/rozblaban.png",
      category: "Refreshing Drinks",
    },
    {
      id: 9,
      name: "Cheese Pastry",
      description: "Flaky pastry filled with a blend of savory cheeses.",
      price: "4.20L.E",
      image: "/images/menu/ice cream cup.png",
      category: "Savory Bites",
    },
    {
      id: 10,
      name: "Spinach Fatayer",
      description: "Baked dough pockets filled with seasoned spinach and sumac.",
      price: "4.50L.E",
      image: "/images/menu/ice cream cone.png",
      category: "Savory Bites",
    },
  ];

  //  Categories
  const categories = ["All", "Signature Desserts", "Refreshing Drinks", "Savory Bites"];

  //  State for Filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className="fas fa-home me-1"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Our Menu
              </li>
            </ol>
          </nav>
          <h1 className="text-white">Our Delicious Menu</h1>
        </div>
      </section>

      {/* Category Buttons */}
      <div className="container text-center mt-5">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn me-2 mb-3 ${
              selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Content */}
      <main className="container py-5 mt-4">
        <section className="menu-category-section mb-5 p-4 p-md-5">
          <h2 className="mb-5">{selectedCategory}</h2>
          <div className="row">
            {filteredProducts.map((item) => (
              <div className="col-12 col-md-6 mb-4" key={item.id}>
                <div className="menu-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-image"
                  />
                  <div className="menu-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="menu-item-price">{item.price}</span>
                  <div className="item-icons">
                    <button
                      className="icon-btn"
                      aria-label="Add to Wishlist"
                      onClick={() => addToWishlist(item)}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                    <button
                      className="icon-btn"
                      aria-label="Add to Cart"
                      onClick={() => addToCart(item)}
                    >
                      <i className="fas fa-shopping-basket"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;

