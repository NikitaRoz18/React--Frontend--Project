import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ProcessPost = () => {
    const navigate = useNavigate()
    const [processname, setProcessName] = useState('')
    const [duration, setDuration] = useState('')

    const SubmitHandler = (event) =>{
        event.preventDefault()
        const process_data={
            name:processname,
            duration:duration
        }
        axios.post("http://127.0.0.1:8002/process/",process_data)
        .then(response => {
            console.log(response.data)
            setProcessName('')
            setDuration('')
        })
        .catch(error => console.log(error))
        axios.get("http://127.0.0.1:8002/process/")
        .then(response => navigate('/all/process/'))
        .catch(error => console.log(error))

    }

  return (
    <div>
        <h1>Add Process</h1>
        <button className ="back_button"onClick={() => navigate('/add/process/')}>Go back</button>
        <form onSubmit={SubmitHandler} >
            <label htmlFor="processname">Process Name</label><br/> 
            <input type="text" name="processname" value={processname} onChange={event =>setProcessName(event.target.value)}/><br/>
            
            <label htmlFor="duration">Duration</label><br/> 
            <input type="number" name="duration"value={duration} onChange={event =>setDuration(event.target.value)}/><br/>
            
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default ProcessPost