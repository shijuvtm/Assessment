import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductGrid = () => {
  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Freshly Made
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Featured Bakery Products
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our handcrafted collection of cakes, breads, cookies,
            pastries, muffins, and more—baked fresh every day.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
