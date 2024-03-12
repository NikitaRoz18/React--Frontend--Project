import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ProcessMachineRender from './ProcessMachineRender';


const ProcessMachineGet = () => {
  const navigate = useNavigate();
  const [process_data, setMachineData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8002/procedure/')
      .then(response => setMachineData(response.data))
      .catch(error => console.log(error));
  }, []);

  let process_render = process_data.length > 0 ? process_data.map(process => <ProcessMachineRender key={process.id} process={process} />) : <div>No Data Found</div>;

  return (
    <div>
      <h1>Process</h1>
      <button onClick={() => navigate('/add/process/')}>Add Machine</button>
      <table>
        <thead>
          <tr>
            <th>process Name</th>
            <th>machine</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {process_render}
        </tbody>
      </table>
    </div>
  );
}

export default ProcessMachineGet;
