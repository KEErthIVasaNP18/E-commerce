import React, { useEffect, useState } from 'react'
// import Nav from '../Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './productdetail.css'


const ProductDetails = () => {
  const [pdetail, setPdetails] = useState(null)
  const { id } = useParams()

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5500/api/posts/${id}`)
      setPdetails(response.data);
    } catch (error) {
      console.log('Error fetching post')
    }
  }

  useEffect(() => {

    fetchPost()
  }, [id])

  if (!pdetail) {
    return <h1 style={{ justifyContent: 'center', textAlign: 'center' }}>Loading....</h1 >
  }

  return (
    <div >
      {/* <Nav /> */}

      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Details</h1>
      <div className="product-details-container" style={{ marginTop: '-80px', height: '100vh' }}>
        <div className="product-details-wrapper" style={{ boxShadow: '5px 5px 10px black' }}>
          <div className="product-details-image">
            <img src={pdetail.Img} alt="Product" />
          </div>

          <div className="product-details-content">
            <h1>Name : {pdetail.Name}</h1>
            {/* <p><strong>Category:</strong> {pdetail.Category}</p> */}
            <p><strong>About: </strong>{pdetail.About}</p>
            <p className="price">Price : ₹ {pdetail.Price}</p>

          </div>
        </div>
      </div>
    </div>
  );

}

export default ProductDetails