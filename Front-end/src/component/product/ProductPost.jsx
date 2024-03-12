import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ProductPost = () => {
    const navigate = useNavigate()
    const [productname, setProductName] = useState('')
    const [code, setCode] = useState('')

    const SubmitHandler = (event) =>{
        event.preventDefault()
        const product_data={
            product_name:productname,
            product_code:code
        }
        axios.post("http://127.0.0.1:8002/product/",product_data)
        .then(response => {
            console.log(response.data)
            setProductName('')
            setCode('')
        })
        .catch(error => console.log(error))
        axios.get("http://127.0.0.1:8002/product/")
        .then(response => navigate('/all/products/'))
        .catch(error => console.log(error))

    }

  return (
    <div>
        <h1>Add Product</h1>
        <button className ="back_button"onClick={() => navigate('/add/products/')}>Go back</button>
        <form onSubmit={SubmitHandler} >
            <label htmlFor="productname">Product Name</label><br/> 
            <input type="text" name="productname" value={productname} onChange={event =>setProductName(event.target.value)}/><br/>
            
            <label htmlFor="code">Code</label><br/> 
            <input type="number" name="code"value={code} onChange={event =>setCode(event.target.value)}/><br/>
            
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default ProductPost