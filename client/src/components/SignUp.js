import React,{useState} from "react"

const SignUp = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const SignUp = () =>{
        console.log(name,email,password)
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