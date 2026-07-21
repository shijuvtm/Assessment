import { FaStar, FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-amber-600 text-white text-sm px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-800">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2">
          Freshly baked with premium ingredients and rich flavors.
        </p>

        {/* Rating */}
        <div className="flex items-center mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className="text-yellow-400 mr-1"
            />
          ))}

          <span className="ml-2 text-gray-500 text-sm">
            (4.9)
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5">

          <span className="text-2xl font-bold text-amber-600">
            ₹{product.price}
          </span>

          <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition">
            <FaShoppingBasket />
            View Details
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default ProductCard;
