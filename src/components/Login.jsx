import React,{useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login()
{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div className="flex flex-col items-center justify-center gap-2 bg-gray-100 p-5 rounded-lg shadow-md w-72 mx-auto">
            <h2 className="mb-2 text-gray-800 text-lg font-semibold">Login</h2>
            <input className="w-full p-2 border border-gray-300 rounded-md text-base" type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username" />
            <input className="w-full p-2 border border-gray-300 rounded-md text-base" type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password" />
            <button className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-600 transition text-black" onClick={handleSubmit}>Submit</button>
        </div>
    )
}