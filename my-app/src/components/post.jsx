import { Link } from "react-router-dom";
import './post.css'
import { useCart } from '../CartContext';


function Post({ product }) {
  const { addToCart } = useCart();



    return (
        <div>
            <div className="bg-light py-5 min-vh-80">

                <div className="container d-flex justify-content-center">
                    <div className="card shadow rounded-4" style={{ maxWidth: '350px' }}>
                        <img
                            src={product.Img}
                            alt="Product"
                            className="card-img-top rounded-top-4"
                            style={{
                                height: '200px',
                                objectFit: 'cover',
                                opacity: 0,
                                transform: 'translateY(20px)',
                                animation: 'fadeUp 0.8s ease forwards',
                                transition: 'filter 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'brightness(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'brightness(1)';
                            }}
                        />


                        <div className="card-body">
                            <h5 className="card-title">{product.Name}</h5>
                            {/* <p className="card-text"><strong>Category :</strong> {product.Category} </p> */}
                            <p className="card-text"><strong>About :</strong> {product.About?.length > 25 ? product.About.slice(0, 25) + '...'
                                : product.About}</p>
                            <p className="card-text"><strong>Price :</strong> {product.Price} </p>

                            {/* <Link to={`/products/${product._id}`}><button className="btn w-100 mt-2" style={{ marginLeft: '5px' , backgroundColor:'orange' , fontSize:'large' , fontWeight:'600' , color:'white'}}>Add to Cart</button></Link> */}
                            <Link to={`/posts/${product._id}`}>
                                <button
                                    className="btn w-40 mt-2"
                                    style={{
                                        marginLeft: '5px',
                                        backgroundColor: 'orange',
                                        fontSize: 'large',
                                        fontWeight: '600',
                                        color: 'white',
                                        boxShadow: '0 4px 8px rgba(255, 165, 0, 0.4)', // Orange shadow
                                        border: 'none',
                                        borderRadius: '6px',
                                        transition: 'transform 0.2s ease'
                                    }}
                                >
                                    Read More
                                </button>
                            </Link>

                             <Link to={'/cart'} >
                                <button
                                    className="btn w-40 mt-2"
                                    onClick={() => addToCart(product)}
                                    style={{
                                        marginLeft: '5px',
                                        backgroundColor: '#1060c2ff',
                                        fontSize: 'large',
                                        fontWeight: '600',
                                        color: 'white',
                                        boxShadow: '0 4px 8px rgba(8, 113, 179, 0.4)', // Orange shadow
                                        border: 'none',
                                        borderRadius: '6px',
                                        transition: 'transform 0.2s ease'
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post