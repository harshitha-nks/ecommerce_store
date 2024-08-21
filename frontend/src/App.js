import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
    return (
        <div className="App">
            <div className="content">
                <div className="product-list">
                    <ProductList />
                </div>
                <div className="add-product">
                    <AddProduct />
                </div>
            </div>
        </div>
    );
}

export default App;
