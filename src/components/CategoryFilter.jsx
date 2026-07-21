import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Cakes",
  "Bread",
  "Pastries",
  "Cookies",
  "Donuts",
  "Muffins",
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <motion.section
      className="py-8 px-4 bg-amber-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Browse by Category
          </h2>
          <p className="text-gray-500 mt-2">
            Choose your favorite bakery items
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? "bg-amber-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default CategoryFilter;
