import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ Name: '', Category: '', About: '', Price: '', Img: '' });

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5500/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5500/api/products', form);
    fetchProducts();
    setForm({ Name: '', Category: '', About: '', Price: '', Img: '' });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5500/api/products/${id}`);
    fetchProducts();
  };

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:5500/api/products/${id}`, form);
    fetchProducts();
    setForm({ Name: '', Category: '', About: '', Price: '', Img: '' });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input className="form-control mb-2" value={form.Name} placeholder="Name" onChange={e => setForm({ ...form, Name: e.target.value })} />
        <input className="form-control mb-2" value={form.Category} placeholder="Category" onChange={e => setForm({ ...form, Category: e.target.value })} />
        <input className="form-control mb-2" value={form.About} placeholder="About" onChange={e => setForm({ ...form, About: e.target.value })} />
        <input className="form-control mb-2" type="number" value={form.Price} placeholder="Price" onChange={e => setForm({ ...form, Price: e.target.value })} />
        <input className="form-control mb-2" value={form.Img} placeholder="Image URL" onChange={e => setForm({ ...form, Img: e.target.value })} />
        <button className="btn btn-success">Add Product</button>
      </form>

      <div className="row">
        {products.map(prod => (
          <div className="col-md-4 mb-3" key={prod._id}>
            <div className="card">
              <img src={prod.Img} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={prod.Name} />
              <div className="card-body">
                <h5 className="card-title">{prod.Name}</h5>
                <p>{prod.Category}</p>
                <p>{prod.About}</p>
                <p><strong>₹{prod.Price}</strong></p>
                <button className="btn btn-danger me-2" onClick={() => handleDelete(prod._id)}>Delete</button>
                <button className="btn btn-warning" onClick={() => handleUpdate(prod._id)}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
