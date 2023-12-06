import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";

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

    const deleteProduct = async (id) =>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method : "Delete"
        })
        result = await result.json()
        if(result){
            alert("Product is delete")
            getAllProducts();
        }
    }

    const handleSearch = async (event) => {
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            setProducts(result)
        }else{
            getAllProducts();
        }
    }


    // console.log("products", products);

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <input
                type='text'
                placeholder='🔍Search Your Product...'
                onChange={handleSearch}
                className='search-box'
            />
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Delete</li>
            </ul>
            {
                products.length > 0 ? products.map((item,index) =>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>$ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                            <Link to = {`/update/`+item._id} style={{color:"green"}}>Update</Link>
                        </li>
                    </ul>
                ) :
                    <h1>No Result Found</h1>
            }
        </div>
    )
}

export default ProductList
