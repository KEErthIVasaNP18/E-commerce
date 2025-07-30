import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../carousel';
import './ProductList.css'; // Create this CSS file
import './categories.css'; // or the path to your CSS module
import { Link } from 'react-router-dom';


function ProductList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([])

  // const [loading, setLoading] = useState(true);

  // Fetch products
  const fetchPost = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchCategories = async () => {
   const response = await axios.get('http://localhost:5500/api/category')
  setCategories(response.data)
  }

  useEffect(() => {
    fetchPost();
    fetchCategories();

    // Set 5-second loading timeout
    // const timer = setTimeout(() => {
    //   setLoading(false);
    // }, 1000);

    // return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="splash-screen">
  //       <div className="loader">
  //         <h1 className="text-white">Welcome to Our Store</h1>
  //         <div className="spinner"></div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Carousel />
      <div className="bg-light py-1 min-vh-80" style={{ marginTop: '20px' }}>
        <h1 className="text-center mb-1 fw-bold">Latest Posts</h1>
        <div className="container" >
          <div className="d-flex flex-wrap justify-content-center ">
            {posts.length > 0 ? posts.map((product) => (
              <Post key={product._id} product={product} />
            )) : <h3>No Products available</h3>}
          </div>
        </div>
      </div>

      <div  className="categories-container">
        <h4>Categories</h4>
        <ul>
          {categories.map((category) => 
            <li key={category._id}>
              <Link to={`/category/${category._id}`} >{category.Category}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
