import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProcessRender = ({process}) => {
  const navigate = useNavigate()
  console.log(process,"data")
  return (
    <tr>
      <td>{process.name}</td>
      <td>{process.duration}</td>
      <td>
        <button onClick={() => navigate(`/all/processmachine/${process.id}`)}>Add machine</button>
      </td>
      <td>
      <button onClick={() => navigate(`/edit/process/${process.id}`)}>Edit</button>
      </td>

    </tr>
  );
};

export default ProcessRender;
