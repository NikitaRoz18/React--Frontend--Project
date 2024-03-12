import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MaterialEdit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const [materialName, setMaterialName] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8002/material/${id}/`)
            .then(response => {
                console.log("response", response);
                console.log(response.data.material_name);
                console.log(response.data.material_code);
                setMaterialName(response.data.material_name);
                setCode(response.data.material_code);
            })
            .catch(error => console.log(error));
    }, [id]);

    useEffect(() => {
        console.log(materialName);
        console.log(code);
    }, [materialName, code]);

    const handleSubmit = event => {
        event.preventDefault();
        const materialData = {
            material_name: materialName,
            material_code: code
        };
        axios.patch(`http://127.0.0.1:8002/material/${id}/`, materialData)
            .then(response => navigate('/all/material/'))
            .catch(error => console.log(error));
    };

    const deleteMaterial = event => {
        axios.delete(`http://127.0.0.1:8002/material/${id}/`)
            .then(response => navigate('/all/material/'))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <button className="back_button" onClick={() => navigate('/add/materials/')}>Go back</button>
            <form onSubmit={handleSubmit} >
                <label htmlFor="materialName">Material Name</label><br/>
                <input type="text" name="materialName" value={materialName} onChange={event => setMaterialName(event.target.value)}/><br/>

                <label htmlFor="code">Code</label><br/>
                <input type="number" name="code" value={code} onChange={event => setCode(event.target.value)}/><br/>

                <input type="submit" value="Update"onClick={handleSubmit}/>
                <input type="button" value="Delete" onClick={deleteMaterial}/>
            </form>
        </div>
    );
};

export default MaterialEdit;
