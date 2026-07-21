import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.section
      className="bg-white py-8 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">

          {/* Search Input */}
          <div className="flex items-center flex-1 w-full px-5 py-4">
            <FaSearch className="text-gray-400 mr-3 text-lg" />

            <input
              type="text"
              placeholder="Search for cakes, breads, pastries..."
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>

          {/* Search Button */}
          <button
            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-semibold transition duration-300"
          >
            Search
          </button>

        </div>
      </div>
    </motion.section>
  );
};

export default SearchBar;
