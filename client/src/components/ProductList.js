import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json()
        setProducts(result)
    }

    console.log("products", products);

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
            </ul>
            {
                products.map((item,index) =>
                    <ul>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>$ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList
