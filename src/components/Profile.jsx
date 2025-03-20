import React, { useState , useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div className="text-center text-gray-600 text-lg font-medium p-4 rounded-lg"> Please Login</div>
    return <div className="text-center text-lg font-semibold text-gray-800 p-4 bg-white rounded-lg shadow-md border">Welcome, {user.username} </div>
}

export default Profile
