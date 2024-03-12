import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProcessMachineRender = ({process}) => {
  const navigate = useNavigate()
  console.log(process,"data")

  return (
    <tr>
      <td>{process.process_id}</td>
      <td>{process.machine_id}</td>
      <td>
      {/* <button onClick={() => navigate(`/edit/machine/${machine.id}`)}>Edit</button> */}
      </td>
    </tr>
  );
};

export default ProcessMachineRender;