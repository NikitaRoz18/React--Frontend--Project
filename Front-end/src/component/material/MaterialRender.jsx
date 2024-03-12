import React from 'react';
import { useNavigate } from 'react-router-dom'
const MaterialRender = ({material}) => {
  const navigate = useNavigate()
  console.log(material,"data")
  return (
    <tr>
      <td>{material.material_name}</td>
      <td>{material.material_code}</td>
      <td>
      <button onClick={() => navigate(`/edit/material/${material.id}`)}>Edit</button>
      </td>
    </tr>
  );
};

export default MaterialRender;
