// machineGet.js
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MachineRender from './MachineRender';


const MachineGet = () => {
  const navigate = useNavigate();
  const [machine_data, setMachineData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8002/machine/')
      .then(response => setMachineData(response.data))
      .catch(error => console.log(error));
  }, []);

  let machine_render = machine_data.length > 0 ? machine_data.map(machine => <MachineRender key={machine.id} machine={machine} />) : <div>No Data Found</div>;

  return (
    <div>
      <h1>Machine</h1>
      <button onClick={() => navigate('/add/machine/')}>Add Machine</button>
      <table>
        <thead>
          <tr>
            <th>Machine Name</th>
            <th>Code</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {machine_render}
        </tbody>
      </table>
    </div>
  );
}

export default MachineGet;
