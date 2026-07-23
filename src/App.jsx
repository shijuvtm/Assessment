import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Search */}
      <SearchBar />

      {/* Category Filter */}
      <CategoryFilter />

      {/* Featured Products */}
      <ProductGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;
