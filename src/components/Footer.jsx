import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🥐</span>
              <h2 className="text-2xl font-bold text-white">
                Sweet Bakery
              </h2>
            </div>

            <p className="text-gray-400 leading-7">
              Freshly baked breads, cakes, pastries, cookies, and desserts
              made with premium ingredients and lots of love.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center hover:bg-amber-700 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center hover:bg-amber-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center hover:bg-amber-700 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center hover:bg-amber-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-500">Home</a></li>
              <li><a href="#products" className="hover:text-amber-500">Products</a></li>
              <li><a href="#about" className="hover:text-amber-500">About</a></li>
              <li><a href="#contact" className="hover:text-amber-500">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Categories
            </h3>

            <ul className="space-y-3">
              <li>Cakes</li>
              <li>Breads</li>
              <li>Cookies</li>
              <li>Pastries</li>
              <li>Donuts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-500 mt-1" />
                <span>Palakkad, Kerala, India</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-500" />
                <span>Sweetwala@sweetbakery.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Sweet Bakery. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
