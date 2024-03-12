import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MachineEdit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const [machineName, setMachineName] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8002/machine/${id}/`)
            .then(response => {
                console.log("response", response);
                console.log(response.data.name);
                console.log(response.data.code);
                setMachineName(response.data.name);
                setCode(response.data.code);
            })
            .catch(error => console.log(error));
    }, [id]);

    useEffect(() => {
        console.log(machineName);
        console.log(code);
    }, [machineName, code]);

    const handleSubmit = event => {
        event.preventDefault();
        const machineData = {
            name: machineName,
            code: code
        };
        axios.patch(`http://127.0.0.1:8002/machine/${id}/`, machineData)
            .then(response => navigate('/all/machine/'))
            .catch(error => console.log(error));
    };

    const deleteMachine = event => {
        axios.delete(`http://127.0.0.1:8002/machine/${id}/`)
            .then(response => navigate('/all/machine/'))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <button className="back_button" onClick={() => navigate('/add/machines/')}>Go back</button>
            <form onSubmit={handleSubmit} >
                <label htmlFor="machineName">Machine Name</label><br/>
                <input type="text" name="machineName" value={machineName} onChange={event => setMachineName(event.target.value)}/><br/>

                <label htmlFor="code">Code</label><br/>
                <input type="number" name="code" value={code} onChange={event => setCode(event.target.value)}/><br/>

                <input type="submit" value="Update"onClick={handleSubmit} />
                <input type="button" value="Delete" onClick={deleteMachine}/>
            </form>
        </div>
    );
};

export default MachineEdit;
