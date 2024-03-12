import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProductRender = ({product}) => {
  const navigate = useNavigate()
  console.log(product,"data")
  return (
    <tr>
      <td>{product.product_name}</td>
      <td>{product.product_code}</td>
      <td>
      <button onClick={() => navigate(`/edit/products/${product.id}`)}>Edit</button>
      </td>
    </tr>
  );
};

export default ProductRender;
