import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:5500/api/category");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="container my-5">
            <h2 className="mb-4">Browse Categories</h2>
            <div className="list-group">
                {categories.map((cat) => (
                    <Link
                        key={cat._id}
                        to={`/category/${cat._id}`}
                        className="list-group-item list-group-item-action"
                    >
                        {cat.Category}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllCategories;
