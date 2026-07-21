import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-medium mb-4">
            🥖 Freshly Baked Every Day
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Freshly Baked <br />
            <span className="text-amber-600">
              Happiness
            </span>{" "}
            Delivered
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Indulge in handcrafted cakes, artisan breads, pastries, cookies,
            and desserts made with premium ingredients. Taste the freshness in
            every bite.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
              Shop Now
            </button>

            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full font-semibold transition duration-300">
              Explore Menu
            </button>
          </div>

          <div className="mt-10 flex justify-center lg:justify-start gap-10">
            <div>
              <h3 className="text-3xl font-bold text-amber-600">50+</h3>
              <p className="text-gray-600">Fresh Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-600">10K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-600">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900"
            alt="Fresh Bakery"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
