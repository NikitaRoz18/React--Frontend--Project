import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; 

const ProcessMachinePost = () => {

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [processName, setProcessName] = useState('');
  const [machineData, setMachineData] = useState([]);
  const [procedureData, setProcedureData] = useState([]);
  const [selectedMachineIds, setSelectedMachineIds] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8002/process/${id}/`)
      .then(response => {
        setProcessName(response.data.name);
      })
      .catch(error => console.log(error));
  }, [id]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8002/machine/")
      .then(response => {
        setMachineData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8002/procedure/")
      .then(response => {
        setProcedureData(response.data.filter(value => Number(value.process) === Number(id)))
        console.log(procedureData,'iuytrew')
        // data =[]
        // if( Number(value.process) === Number(id)){
        //     let machine_id =procedureData.machine
        //     data.push(machine_id)
        //     setSelectedMachineIds(data)

        // }
      })
      .catch(error => console.log(error));
  }, []);

  const updatedSelectedIds = (machineId) => {
    setSelectedMachineIds(prevState => {
      if (prevState.includes(machineId)) {
        return prevState.filter(id => id !== machineId);
      } else {
        return [...prevState, machineId];
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const procedureData = {
      machines: selectedMachineIds,
      process: id
    };

    axios.post("http://127.0.0.1:8002/procedure/", procedureData)
      .then(response => {
        console.log(response.data);
        // const processId = response.data;
        // if (processId === id) {
        //   const machineIds = response.data.machines;
        //   setSelectedMachineIds(machineIds);
        // }
        setProcessName('');
        setSelectedMachineIds([]);
        navigate('/all/process/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
        <h1>Add Machine to Process</h1>
        <button className="back_button" onClick={() => navigate('/all/process/')}>Go back</button>
        <p>Process name: {processName}</p><br/>
        <table>
            <thead>
            <tr>
                <th>Machine Options</th>
            </tr>
            </thead>
            <tbody>
            {machineData.length > 0 ? 
            machineData.map(machine => {
                let checked_id = "false"
                for (let b of selectedMachineIds ){
                if (b === machine.id){
                checked_id = "true"
                console.log(checked_id)
                }

                }
                
                return (
                    <tr key={machine.id}>
                        <td>
                        {machine.name}
                        </td>
                        <td>
                        <button onClick={() => navigate(`/edit/machine/${machine.id}`)}>Edit</button>
                        </td>
                        <td>
                        <input type="checkbox"  checked = {checked_id} onChange={() => updatedSelectedIds(machine.id)} />
                        </td>
                    </tr>)})
                    : <tr><td>No Data Found</td></tr>

                }
            </tbody>
        </table>
        <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default ProcessMachinePost;
