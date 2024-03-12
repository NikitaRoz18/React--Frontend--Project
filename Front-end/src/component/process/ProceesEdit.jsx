import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProcessEdit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const [processName, setProcessName] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8002/process/${id}/`)
            .then(response => {
                console.log("response", response);
                console.log(response.data.name);
                console.log(response.data.duration);
                setProcessName(response.data.name);
                setDuration(response.data.duration);
            })
            .catch(error => console.log(error));
    }, [id]);

    useEffect(() => {
        console.log(processName);
        console.log(duration);
    }, [processName, duration]);

    const handleSubmit = event => {
        event.preventDefault();
        const process_data = {
            name: processName,
            duration: duration
        };
        axios.patch(`http://127.0.0.1:8002/process/${id}/`, process_data)
            .then(response => navigate('/all/process/'))
            .catch(error => console.log(error));
    };

    const deleteProcess = event => {
        axios.delete(`http://127.0.0.1:8002/process/${id}/`)
            .then(response => navigate('/all/process/'))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <button className="back_button" onClick={() => navigate('/add/processes/')}>Go back</button>
            <form onSubmit={handleSubmit} >
                <label htmlFor="processName">Process Name</label><br/>
                <input type="text" name="processName" value={processName} onChange={event => setProcessName(event.target.value)}/><br/>

                <label htmlFor="duration">Duration</label><br/>
                <input type="number" name="duration" value={duration} onChange={event => setDuration(event.target.value)}/><br/>

                <input type="submit" value="Update"onClick={handleSubmit}/>
                <input type="button" value="Delete" onClick={deleteProcess}/>
            </form>
        </div>
    );
};

export default ProcessEdit;
