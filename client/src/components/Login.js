import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    },[])
    const handleLogin = async () => {
        console.log(email,password)
        let result = await fetch("http://localhost:5000/login",{
            method: "post",
            body : JSON.stringify({email,password}),
            headers : {
                'Content-Type' : "application/json"
            }
        })
        result = await result.json();
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")
        }else{
            alert("please enter correct details")
        }
    }

    return (
        <div className='login-page'>
            <h1>Login</h1>
            <div className="input-form">
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="button"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
