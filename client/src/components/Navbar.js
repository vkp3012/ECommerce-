import React from "react";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/signup")
    }
    return (
        <div className="nav-link">
            <ul><Link to="/">🛒Products</Link></ul>
            <ul><Link to="/add">Add Product</Link></ul>
            <ul><Link to="/update">Update Product</Link></ul>
            <ul><Link to="/profile">👧Profile</Link></ul>
            {/* <ul>
                {   auth ? 
                        <Link onClick={logout} to="/signup">Logout</Link> :  <Link to="/signup">SignUp</Link>
                }
            </ul>
            <ul><Link to="/login">Login</Link></ul> */}
                {
                    auth ? <ul><Link onClick={logout} to="/signup">Logout</Link> </ul>:
                    <>
                        <ul><Link to="/signup">SignUp</Link></ul>
                        <ul><Link to="/login">Login</Link></ul>
                    </>
                }
        </div>
    )
}

export default Navbar