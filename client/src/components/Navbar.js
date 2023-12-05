import React from "react";
import { Link, useNavigate } from "react-router-dom"
import Logo from "../images/logo.png"
const Navbar = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/signup")
    }
    return (
        <div className="nav-link">
            <img
                alt="logo1"
                className="logo"
                src = {Logo}
            />
            { auth ? 
                <ul>
                    <li><Link to="/">🛒Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    <li><Link to="/profile">👧Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout <strong>{JSON.parse(auth).name}</strong></Link></li>
                </ul>:
                <ul className="nav-right">
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>  
            }
            
            {/* <ul>
                {   auth ? 
                        <Link onClick={logout} to="/signup">Logout</Link> :  <Link to="/signup">SignUp</Link>
                }
            </ul>
            <ul><Link to="/login">Login</Link></ul> */}
                {/* {
                    auth ? <ul><Link onClick={logout} to="/signup">Logout</Link> </ul>:
                    <>
                        <ul><Link to="/signup">SignUp</Link></ul>
                        <ul><Link to="/login">Login</Link></ul>
                    </>
                } */}
        </div>
    )
}

export default Navbar