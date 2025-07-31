import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './allcat.css'

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5500/api/categories");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }
    useEffect(() => {

        fetchCategories();
    }, []);

    return (
        <div className="container my-5" style={{ minHeight: '100vh' }}>
            <h2 className="text-center mb-5 fw-bold text-primary">Explore Categories</h2>
            <div className="row g-4">
                {categories.map((category) => (
                    <div key={category._id} className="col-sm-6 col-md-4 col-lg-3">
                        <Link to={`/category/${category._id}`} className="text-decoration-none">
                            <div className="glass-card p-4 text-center">
                                <div className="mb-3">
                                    <i className="bi bi-tags-fill fs-2 text-warning"></i>
                                </div>
                                <h5 className="text-dark fw-semibold">{category.Category}</h5>
                            </div>
                        </Link>
                        
                    </div>
                ))}
            </div>


        </div>
    );
};

export default AllCategories;
