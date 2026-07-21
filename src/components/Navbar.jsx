import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        
        <div className="flex items-center gap-2">
          <span className="text-3xl">🥐</span>
          <h1 className="text-2xl font-bold text-amber-700">
            Sweet Bakery
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-amber-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-amber-600 transition">
              Products
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-amber-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-amber-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-xl text-gray-700">
          <FaSearch className="cursor-pointer hover:text-amber-600 transition" />
          <FaShoppingCart className="cursor-pointer hover:text-amber-600 transition" />

          {/* Mobile Menu */}
          <button className="md:hidden">
            <FaBars />
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
