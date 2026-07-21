import { motion } from "framer-motion";
import {
  FaBreadSlice,
  FaTruck,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBreadSlice className="text-5xl text-amber-600" />,
    title: "Fresh Ingredients",
    description:
      "We use only premium-quality ingredients to ensure every bite is fresh, delicious, and unforgettable.",
  },
  {
    id: 2,
    icon: <FaTruck className="text-5xl text-amber-600" />,
    title: "Fast Delivery",
    description:
      "Enjoy quick and reliable doorstep delivery so your favorite bakery treats arrive fresh every time.",
  },
  {
    id: 3,
    icon: <FaAward className="text-5xl text-amber-600" />,
    title: "Premium Quality",
    description:
      "Our skilled bakers craft every product with care, passion, and years of baking expertise.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-600 uppercase font-semibold tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Baking Happiness Every Day
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We believe every bakery item should be made with passion, quality,
            and care. Experience freshly baked products prepared just for you.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
