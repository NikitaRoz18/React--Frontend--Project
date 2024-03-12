import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MaterialRender from './MaterialRender';

const MaterialGet = () => {
  const navigate = useNavigate();
  const [material_data, setMaterialData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8002/material/')
      .then(response => setMaterialData(response.data))
      .catch(error => console.log(error));
  }, []);

  let material_render = material_data.length > 0 ? material_data.map(material => <MaterialRender key={material.id} material={material} />) : <div>No Data Found</div>;

  return (
    <div>
      <h1>Material</h1>
      <button onClick={() => navigate('/add/material/')}>Add material</button>
      <table>
        <thead>
          <tr>
            <th>Material Name</th>
            <th>Code</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {material_render}
        </tbody>
      </table>
    </div>
  );
}

export default MaterialGet;
