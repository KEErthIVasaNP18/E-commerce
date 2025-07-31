// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./Footer";
import Nav from "./Nav";
import ProductList from "./pages/ProductList";
import ProductDetails from './pages/ProductDetails';
import AllCategories from './pages/AllCategory';
import CategoryPost from './pages/categorypost';
import { CartProvider } from './CartContext';
import CartPage from './pages/CartPage';


function App() {




  return (
    <div className="App">
      <CartProvider>

        <BrowserRouter>

          <Nav />

          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/posts/:id' element={<ProductDetails />} />
            <Route path='/category/:id' element={<CategoryPost />} />
            <Route path="/posts/categories" element={<AllCategories />} />
            <Route path="/cart" element={<CartPage />} />

          </Routes>

          <Footer />

        </BrowserRouter>
      </CartProvider>



    </div>
  );
}

export default App;

