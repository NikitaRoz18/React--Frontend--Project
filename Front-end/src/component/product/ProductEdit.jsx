import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const ProductEdit = () => {

    const navigate = useNavigate()

    const params = useParams()
    const {id} = params

    const [productname, setProductName] = useState('')
    const [code, setCode] = useState('')

    useEffect(() =>{
        axios.get(`http://127.0.0.1:8002/product/${id}/`)
        .then(response => {
            console.log("response", response)
            console.log(response.data.product_name)
            console.log(response.data.product_code)
            setProductName(response.data.product_name)
            setCode(response.data.product_code)
        })
        .catch(error => console.log(error))
    }, [id])

    useEffect(()=>{
        console.log(productname)
        console.log(code)
    },[productname,code])

    const SubmitHandler = event => {
        console.log("object")

        event.preventDefault()

        const product_data = {
            product_name: productname,
            product_code:code
        }

        axios.patch(`http://127.0.0.1:8002/product/${id}/`, product_data)
        .then(response => navigate('/all/products/'))
        .catch(error => console.log(error))

    }

    const DeleteProduct = (event) => {
        axios.delete(`http://127.0.0.1:8002/product/${id}/`)
        .then(response => navigate('/all/products/'))
        .catch(error => console.log(error))

    }

    return (
        <div>
        <button className ="back_button"onClick={() => navigate('/add/products/')}>Go back</button>
        <form onSubmit={SubmitHandler} >
            <label htmlFor="productname">Product Name</label><br/> 
            <input type="text" name="productname" value={productname} onChange={event =>setProductName(event.target.value)}/><br/>   
            
            <label htmlFor="code">Code</label><br/> 
            <input type="number" name="code" value={code} onChange={event =>setCode(event.target.value)}/><br/>
            
            <input type="button" value="Update" onClick={SubmitHandler}/>
            <input type="button" value="Delete" onClick={DeleteProduct}/>
        
        </form>
    </div>
    )
}

export default ProductEdit
