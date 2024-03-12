import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ProcessRender from './ProcessRender';


const ProcessGet = () => {
  const navigate = useNavigate();
  const [process_data, setProcessData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8002/process/')
      .then(response => setProcessData(response.data))
      .catch(error => console.log(error));
  }, []);

  let process_render = process_data.length > 0 ? process_data.map(process => <ProcessRender key={process.id} process={process} />) : <div>No Data Found</div>;

  return (
    <div>
      <h1>Process</h1>
      <button onClick={() => navigate('/add/process/')}>Add Process</button>
      <table>
        <thead>
          <tr>
            <th>Process Name</th>
            <th>Duration</th>
            <th>Add machine</th>
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

export default ProcessGet;
