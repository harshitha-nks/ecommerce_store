// In src/components/AddProduct.js

import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = { name, price, description };

        axios.post('http://localhost:8000/api/products/', product)
            .then(response => {
                console.log('Product added successfully:', response.data);
                setName('');
                setPrice('');
                setDescription('');
            })
            .catch(error => {
                console.error('There was an error adding the product!', error);
            });
    };

    return (
        <div>
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
