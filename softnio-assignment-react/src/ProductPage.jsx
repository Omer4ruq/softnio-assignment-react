import React, { useState } from "react";
import Star from "./Star";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const bandColors = {
    black: "../public/images/black.jpg",
    green: "../public/images/green.jpg",
    blue: "../public/images/blue.jpg",
    cyan: "../public/images/cyan.jpg",
  };

  const customColors = {
    black: "#3B4747",
    green: "#816BFF",
    blue: "#4B97D3",
    cyan: "#1FCEC9",
  };

  const size = [
    { size: "S", price: 69 },
    { size: "M", price: 79 },
    { size: "L", price: 89 },
    { size: "XL", price: 99 },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    const newItem = {
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: size.find((s) => s.size === selectedSize).price * quantity,
    };

    setCart((prevCart) => [...prevCart, newItem]);
    setShowCheckout(true);
  };

  const handleCheckoutClick = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-roboto bg-gray-100 p-4">
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <section>
            <div className="flex-1 w-[630px] h-[720px]">
              <img
                src={bandColors[selectedColor]}
                alt="Smartwatch"
                className="w-[400px] md:w-[630px] h-[720px]"
              />
            </div>
          </section>

          <section id="product-details" className="flex items-center">
            <div className="flex-1 text-start">
              <h1 className="text-4xl font-bold mb-2">
                Classy Modern Smart Watch
              </h1>
              <p className="text-gray-600 text-sm mb-4">
                <Star></Star> (20 Reviews)
              </p>
              <div className="text-2xl font-bold text-[#6576FF] mb-4">
                <span className="text-xl line-through font-normal text-[#8091A7]">
                  $99.00
                </span>{" "}
                $79.00
              </div>
              <p className="text-gray-600 mb-6">
                I must explain to you how all this mistaken idea of denoun cing
                ple praising pain was born and I will give you a complete
                account of the system, and expound the actual teaching.
              </p>

              <div className="flex gap-8 mb-6">
                <div>
                  <p className="text-[#8091A7] text-sm mb-2">Type:</p>
                  <p className="font-bold text-base text-[#364A63]">Watch</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Model Number:</p>
                  <p className="font-bold text-[#364A63]">P298XT</p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Band Color</h3>
                <div className="flex space-x-4">
                  {Object.keys(bandColors).map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className="relative w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <div
                        className={`absolute w-12 h-12 rounded-full transition ${
                          color === selectedColor ? "ring-[3px]" : ""
                        }`}
                        style={{
                          borderColor:
                            color === selectedColor
                              ? customColors[color]
                              : "transparent",
                          borderWidth: "3px",
                        }}
                      ></div>
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{
                          backgroundColor: customColors[color],
                        }}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Wrist Size</h3>
                <div className="flex space-x-2">
                  {size.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(item.size)}
                      className={`px-4 py-2 border rounded-sm ${
                        selectedSize === item.size
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      <div className="flex gap-2">
                        <h1 className="font-bold">{item.size}</h1>
                        <p className="text-xs text-[#8091A7] py-1 text-center justify-center items-center ">
                          ${item.price}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="border-2 flex">
                  <button
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="px-2 py-1 bg-white text-[#8091A7] rounded-lg text-2xl w-9 h-8"
                  >
                    -
                  </button>
                  <div className="px-10 py-1 bg-white text-[#8091A7] text-2xl border-l-2 border-r-2">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-1 bg-white text-[#8091A7] rounded-lg text-2xl w-9 h-8"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-[155px] h-[46px] py-2 px-5 bg-blue-500 text-white font-medium rounded-sm hover:bg-blue-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      {showCheckout && (
        <button
          onClick={handleCheckoutClick}
          className="fixed bottom-4 inset-x-0 mx-auto bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg text-center w-fit flex items-center gap-2"
        >
          <span className="font-bold">{totalCartItems}</span>
          <span>Checkout</span>
        </button>
      )}
      {showCartModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[500px] rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Your Cart
              </h2>
              <div className="overflow-auto max-h-64">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left text-gray-500 text-sm border-b">
                      <th className="py-2">Item</th>
                      <th className="py-2">Color</th>
                      <th className="py-2">Size</th>
                      <th className="py-2">Qnt</th>
                      <th className="py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr
                        key={index}
                        className="text-sm text-gray-700 border-b"
                      >
                        <td className="py-2 flex items-center">
                          <img
                            src={bandColors[item.color]}
                            alt="Product"
                            className="w-10 h-10 rounded mr-2"
                          />
                          Classy Modern Smart Watch
                        </td>
                        <td className="py-2">{item.color}</td>
                        <td className="py-2">{item.size}</td>
                        <td className="py-2">{item.quantity}</td>
                        <td className="py-2">${item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between text-gray-700 font-medium mb-2">
                  <span>Total</span>
                  <span>
                    ${cart.reduce((total, item) => total + item.price, 0)}
                  </span>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={closeCartModal}
                    className="w-[152px] h-[36px] bg-gray-200 text-gray-700 rounded items-center hover:bg-gray-300"
                  >
                    Continue Shopping
                  </button>
                  <button className="w-[94px] h-[36px] bg-blue-500 text-white rounded hover:bg-blue-600">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
