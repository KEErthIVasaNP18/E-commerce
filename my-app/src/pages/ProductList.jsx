  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import Post from '../components/post';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Carousel from '../carousel';
  import './ProductList.css'; // Create this CSS file
  import './categories.css'; // or the path to your CSS module


  function ProductList() {
    const [posts, setPosts] = useState([]);

    // Fetch products
    const fetchPost = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/posts')
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };


    useEffect(() => {
      fetchPost();
    }, []);

    
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

      </div>
    );
  }

  export default ProductList;
