import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const UpdateProduct = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getProductDetails()
    })

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        // console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }


    const handleUpdateProduct = async () => {
        console.log(name,price,category,company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method : "put",
            body : JSON.stringify({name,price,category,company}),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        result = await result.json()
        console.log(result)
        navigate("/")
    }

    return (
        <div className='add-product'>
            <h1>Update Product</h1>
            <div className='input-form'>
                <input
                    type='text'
                    placeholder='Enter your Product Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Price'
                />
                <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Category'
                />
                <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Company'
                />
                <button onClick={handleUpdateProduct} type='button'>Update Product</button>
            </div>
        </div>
    )
}

export default UpdateProduct
