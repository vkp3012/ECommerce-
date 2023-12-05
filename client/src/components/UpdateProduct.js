import React, { useState } from 'react'

const UpdateProduct = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")


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
