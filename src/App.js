import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_bk.png";
import women_banner from "./Components/Assets/banner_bk.png";
import kids_banner from "./Components/Assets/banner_bk.png";
import Thanks from "./Pages/Thanks";
import ShopContextProvider from "./Context/ShopContext"; // Import the ShopContextProvider

function App() {
  return (
    <div>
      <ShopContextProvider>
        {" "}
        {/* Wrap application with ShopContextProvider */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route
              path="/Home Furniture"
              element={
                <ShopCategory banner={men_banner} category="Home Furniture" />
              }
            />
            <Route
              path="/Office Furniture"
              element={
                <ShopCategory
                  banner={women_banner}
                  category="Office Furniture"
                />
              }
            />
            <Route
              path="/Outdoors Furniture"
              element={
                <ShopCategory
                  banner={kids_banner}
                  category="Outdoors Furniture"
                />
              }
            />
            <Route path="product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
