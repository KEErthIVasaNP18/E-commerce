import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Post from "../components/post";

function CategoryPost() {
    const [category, setCategory] = useState([])
    const [posts, setPosts] = useState([])
    const { id } = useParams()




    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axios.get(`http://localhost:5500/api/categories/${id}`);
            setCategory(response.data);
        };

        const fetchPost = async () => {
            const response = await axios.get(`http://localhost:5500/api/posts/category/${id}`);
            setPosts(response.data);
        };

        fetchCategory();
        fetchPost();
    }, [id]);



    if (!category) {
        return <p>Loading ...</p>
    }


    return (

        <div className="container my-4">
            <div className="bg-light p-4 rounded shadow-sm">
                <h4 className="text-secondary border-start border-4 ps-2 border-warning mb-3">Categories</h4>

                <h1 className="text-dark fw-bold mb-4">{category.Category}  </h1>

                {posts.length > 0 ? (
                    <div className="row g-4">
                        {posts.map((product) => (
                            <div key={product._id} className="col-md-4">
                                <Post product={product} />
                            </div>

                        ))}


                    </div>
                ) : (
                    <h3 className="text-muted text-center mt-5">No Products available</h3>
                )}
            </div>
        </div>

    )
}

export default CategoryPost;