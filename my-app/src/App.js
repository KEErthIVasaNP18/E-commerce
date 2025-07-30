// import logo from './logo.svg';
// import './App.css';

// import AdminPanel from './admin/AdminPanel';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react';
import Footer from "./Footer";
// import CarouselComponent from "./carousel";
import Nav from "./Nav";
import ProductList from "./pages/ProductList";
import ProductDetails from './pages/ProductDetails';
// import AddToCart from './pages/Cart';
import AllCategories from './pages/AllCategory';
import CategoryPost from './pages/categorypost';


function App() {




  return (
    <div className="App">

      {/* <CarouselComponent /> */}
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/posts/:id' element={<ProductDetails />} />
          <Route path="/posts/categories" element={<AllCategories />} />
          <Route path='/category/:id' element={<CategoryPost/>}  />
          {/* <Route path='/addtocart' element={<AddToCart/>} />
          <Route path='/admin' element={<AdminPanel />} /> */}



        </Routes>
        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;

