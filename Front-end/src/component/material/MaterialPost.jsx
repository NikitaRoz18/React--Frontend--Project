import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const MaterialPost = () => {
    const navigate = useNavigate()
    const [materialname, setMaterialName] = useState('')
    const [code, setCode] = useState('')

    const SubmitHandler = (event) =>{
        event.preventDefault()
        const material_data={
            material_name:materialname,
            material_code:code
        }
        axios.post("http://127.0.0.1:8002/material/",material_data)
        .then(response => {
            console.log(response.data)
            setMaterialName('')
            setCode('')
        })
        .catch(error => console.log(error))
        axios.get("http://127.0.0.1:8002/material/")
        .then(response => navigate('/all/material/'))
        .catch(error => console.log(error))

    }

  return (
    <div>
        <h1>Add Material</h1>
        <button className ="back_button"onClick={() => navigate('/add/material/')}>Go back</button>
        <form onSubmit={SubmitHandler} >
            <label htmlFor="materialname">Material Name</label><br/> 
            <input type="text" name="materialname" value={materialname} onChange={event =>setMaterialName(event.target.value)}/><br/>
            
            <label htmlFor="code">Code</label><br/> 
            <input type="number" name="code"value={code} onChange={event =>setCode(event.target.value)}/><br/>
            
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default MaterialPost