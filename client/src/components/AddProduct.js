import React, { useState } from 'react'

const AddProduct = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const [error,setError] = useState(false)

    

    const handleAddProduct = async () => {
        
        if(!name || !price || !category || !company){
            setError(true)
            return false
        }

        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        // console.log(userId._id);
        let result = await fetch("http://localhost:5000/add-product",{
            method : "post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers : {
                "content-type":"application/json"
            }
        })

        result = await result.json();
        console.log(result)
    }

    return (
        <div className='add-product'>
            <h1>Add Product</h1>
            <div className='input-form'>
                <input
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Name'
                />
                { error && !name && <span className='invalid-input'>Enter Valid Product Name</span> }
                <input
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Price'
                />
                 { error && !price && <span className='invalid-input'>Enter Valid Product Price</span> }
                <input
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Category'
                />
                 { error && !category && <span className='invalid-input'>Enter Valid Product Category</span> }
                <input
                    value={company}
                    onChange={(e)=>setCompany(e.target.value)}
                    type='text'
                    placeholder='Enter your Product Company'
                />
                 { error && !company && <span className='invalid-input'>Enter Valid Product Company</span> }
                <button onClick={handleAddProduct} type='button'>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct
