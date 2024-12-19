import React, { useState } from "react";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const bandColors = {
    black: "../public/images/black.jpg",
    purple: "../public/images/blue.jpg",
    gray: "../public/images/cyan.jpg",
  };

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
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-2">
              Classy Modern Smart Watch
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              ⭐⭐⭐⭐⭐ (20 Reviews)
            </p>
            <div className="text-2xl font-bold text-blue-500 mb-4">
              $79.00 <span className="line-through text-gray-500">$99.00</span>
            </div>
            <p className="text-gray-600 mb-6">
              I must explain to you how all this mistaken idea of denouncing
              pleasure...
            </p>

            <p className="text-gray-600 text-sm mb-2">
              <span className="font-bold">Type:</span> Watch
            </p>
            <p className="text-gray-600 text-sm mb-6">
              <span className="font-bold">Model Number:</span> P298XT
            </p>

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
                {["S (16)", "M (17)", "L (18)", "XL (19)"].map(
                  (size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedSize === size
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  )
                )}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {showCheckout && (
        <div className="fixed bottom-4 right-4 flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
          <button
            onClick={() => setCartCount(cartCount > 0 ? cartCount - 1 : 0)}
            className="px-2 py-1 bg-white text-orange-500 rounded-lg"
          >
            -
          </button>
          <span className="mx-4">{cartCount}</span>
          <button
            onClick={() => setCartCount(cartCount + 1)}
            className="px-2 py-1 bg-white text-orange-500 rounded-lg"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
