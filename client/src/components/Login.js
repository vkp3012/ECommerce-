import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        console.log(email,password)
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
