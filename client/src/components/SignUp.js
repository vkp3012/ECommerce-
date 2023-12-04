import React,{useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
const SignUp = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    })

    const SignUp = async () =>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/signup',{
            method : "post",
            body : JSON.stringify({name,email,password}),
            headers : {
                'Content-Type' : "application/json"
            }
        })
        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result){
            navigate("/")
        }
    }
    return (
        <div className="signUp-page">
            <h1>Sign-Up</h1>
            <div className="sign-form">
                <input 
                    type = "text" 
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input 
                    type = "text" 
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type = "password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button 
                    type="button"
                    onClick={SignUp}
                >  
                    SignUp
                </button>
            </div>
        </div>
    )
}

export default SignUp