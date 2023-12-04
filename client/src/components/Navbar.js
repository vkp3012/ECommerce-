import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const auth = localStorage.getItem("user");
    return (
        <div className="nav-link">
            <ul><Link to="/">🛒Products</Link></ul>
            <ul><Link to="/add">Add Product</Link></ul>
            <ul><Link to="/update">Update Product</Link></ul>
            <ul><Link to="/profile">👧Profile</Link></ul>
            <ul>
                {   auth ? 
                        <Link to="/logout">Logout</Link> :  <Link to="/signup">SignUp</Link>
                }
            </ul>
        </div>
    )
}

export default Navbar