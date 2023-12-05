import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const params = useParams()

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


    const handleUpdateProduct = () => {
        console.log(name,price,category,company)
    }

    return (
        <div className='add-product'>
            <h1>Update Product</h1>
            <div className='input-form'>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Name'
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
