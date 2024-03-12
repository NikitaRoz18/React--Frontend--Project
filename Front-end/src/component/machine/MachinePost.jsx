import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MachinePost = () => {
    const navigate = useNavigate()
    const [machinename, setMachineName] = useState('')
    const [code, setCode] = useState('')

    const SubmitHandler = (event) =>{
        event.preventDefault()
        const machine_data={
            name:machinename,
            code:code
        }
        axios.post("http://127.0.0.1:8002/machine/",machine_data)
        .then(response => {
            console.log(response.data)
            setMachineName('')
            setCode('')
        })
        .catch(error => console.log(error))
        axios.get("http://127.0.0.1:8002/machine/")
        .then(response => navigate('/all/machine/'))
        .catch(error => console.log(error))

    }

  return (
    <div>
        <h1>Add Machine</h1>
        <button onClick={() => navigate('/add/machine/')}>Go back</button>
        <form onSubmit={SubmitHandler} >
            <label htmlFor="machinename">Machine Name</label><br/> 
            <input type="text" name="machinename" value={machinename} onChange={event =>setMachineName(event.target.value)}/><br/>
            
            <label htmlFor="code">Code</label><br/> 
            <input type="number" name="code"value={code} onChange={event =>setCode(event.target.value)}/><br/>
            
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default MachinePost