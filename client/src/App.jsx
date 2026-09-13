
import { CartProvider } from './context/CartContext';
import { CustomerAuthProvider } from './context/CustomerAuthContext';
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import About from "./pages/About";

const App = () => {
  return (
    <CartProvider>
      <CustomerAuthProvider>
    
        <Routes>
          <Route path="/" element={<Layout />}>
 <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/login" element={<Login />} />          
            <Route path="/register" element={<Register />} />      
            <Route path="/checkout" element={<Checkout />} />      
            <Route path="/order-success/:orderId" element={<OrderSuccess />} />
             <Route path="/profile" element={<Profile />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/about" element={<About />} />
            </Route>
        </Routes>
        
      </CustomerAuthProvider>
    </CartProvider>
  );
};

export default App;