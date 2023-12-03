import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav-link">
            <ul><Link to="/">🛒Products</Link></ul>
            <ul><Link to="/add">Add Product</Link></ul>
            <ul><Link to="/update">Update Product</Link></ul>
            <ul><Link to="/logout">Logout</Link></ul>
            <ul><Link to="/profile">👧Profile</Link></ul>
            <ul><Link to="/signup">SignUp</Link></ul>
        </div>
    )
}

export default Navbar