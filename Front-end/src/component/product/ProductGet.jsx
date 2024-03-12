// ProductGet.js
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ProductRender from './ProductRender';


const ProductGet = () => {
  const navigate = useNavigate();
  const [product_data, setProductData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8002/product/')
      .then(response => setProductData(response.data))
      .catch(error => console.log(error));
  }, []);

  let product_render = product_data.length > 0 ? product_data.map(product => <ProductRender key={product.id} product={product} />) : <div>No Data Found</div>;

  return (
    <div>
      <h1>Product</h1>
      <button onClick={() => navigate('/add/products/')}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Code</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {product_render}
        </tbody>
      </table>
    </div>
  );
}

export default ProductGet;
