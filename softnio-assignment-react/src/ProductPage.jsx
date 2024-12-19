import React, { useState } from "react";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const bandColors = {
    black: "../public/images/black.jpg",
    green: "../public/images/green.jpg",
    blue: "../public/images/blue.jpg",
    cyan: "../public/images/cyan.jpg",
  };
  const size = [
    {
      size: "S",
      price: "69",
    },
    {
      size: "M",
      price: "79",
    },
    {
      size: "L",
      price: "89",
    },
    {
      size: "XL",
      price: "99",
    },
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    setShowCheckout(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src={bandColors[selectedColor]}
              alt="Smartwatch"
              className="w-[630px] h-[720px]"
            />
          </div>
          <div></div>
          <div className="flex-1 text-start">
            <h1 className="text-3xl font-semibold mb-2">
              Classy Modern Smart Watch
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              ⭐⭐⭐⭐⭐ (20 Reviews)
            </p>
            <div className="text-2xl font-bold text-blue-500 mb-4">
              <span className="line-through text-gray-500">$99.00</span> $79.00
            </div>
            <p className="text-gray-600 mb-6">
              I must explain to you how all this mistaken idea of denoun cing
              ple praising pain was born and I will give you a complete account
              of the system, and expound the actual teaching.
            </p>
            <div className="flex gap-8 ">
              <div>
                <p className="text-gray-600 text-sm mb-2">Type:</p>
                <p className="font-bold text-[#364A63]">Watch</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Model Number:</p>
                <p className="font-bold text-[#364A63]">P298XT</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Band Color</h3>
              <div className="flex space-x-4">
                {Object.keys(bandColors).map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${
                      color === selectedColor ? "ring-4 ring-blue-500" : ""
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Wrist Size</h3>
              <div className="flex space-x-2">
                {size.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size.size)}
                    className={`px-4 py-2 border  ${
                      selectedSize === size.size
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex gap-2">
                      <h1 className="font-bold">{size.size}</h1>
                      <p>{size.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="border-2 flex">
                <button
                  onClick={() =>
                    setCartCount(cartCount > 0 ? cartCount - 1 : 0)
                  }
                  className="px-2 py-1 bg-white text-[#8091A7] rounded-lg text-2xl w-9 h-8"
                >
                  -
                </button>
                <div className="px-10 py-1  bg-white text-[#8091A7] text-2xl border-l-2 border-r-2 ">
                  {cartCount}
                </div>
                <button
                  onClick={() => setCartCount(cartCount + 1)}
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
        </div>
      </div>

      {showCheckout && (
        <div className="fixed bottom-4 right-4 flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg"></div>
      )}
    </div>
  );
};

export default ProductPage;
