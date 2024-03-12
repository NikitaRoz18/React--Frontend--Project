import React from 'react';
import { useNavigate } from 'react-router-dom';


const MachineRender = ({machine}) => {
  const navigate = useNavigate()

  console.log(machine,"data")

  return (
    <tr>
      <td>{machine.name}</td>
      <td>{machine.code}</td>
      <td>
      <button onClick={() => navigate(`/edit/machine/${machine.id}`)}>Edit</button>
      </td>
    </tr>
  );
};

export default MachineRender;
