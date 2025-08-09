// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./Footer";
import Nav from "./Nav";
import ProductList from "./pages/ProductList";
import ProductDetails from './pages/ProductDetails';
import AllCategories from './pages/AllCategory';
import CategoryPost from './pages/categorypost';
import { CartProvider } from './CartContext';
import CartPage from './pages/CartPage';
import OtpLoginForm from './LoginOtp';
import RazorpayPayment from './RazorPayment';

function App() {
const [search, setSearch] = useState('');




  return (
    <div className="App">
      <CartProvider>

        <BrowserRouter>

          <Nav search={search} setSearch={setSearch} />

          <Routes>
            <Route path='/' element={<ProductList search={search}/>} />
            <Route path='/posts/:id' element={<ProductDetails />} />
            <Route path='/category/:id' element={<CategoryPost />} />
            <Route path="/posts/categories" element={<AllCategories />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<OtpLoginForm />} />
            <Route path='/verify_payment'  element={<RazorpayPayment/>} />


          </Routes>

          <Footer />

        </BrowserRouter>
      </CartProvider>



    </div>
  );
}

export default App;

