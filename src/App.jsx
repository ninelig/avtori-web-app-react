import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Home from "./pages/home";
import Login from "./pages/Login"; 
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import Google from "./pages/Google";
import Cart from "./pages/Cart";
import { CartProvider } from "./providers/CartProvider";
import Shop from "./pages/Shop"

function App() {
  return (
    <CartProvider> 
    <Router>
      <Layout>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/google" element={<Google/>} />
            <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
    </CartProvider>
  );
}

export default App;
