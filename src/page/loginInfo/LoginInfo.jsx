import React, { useState } from 'react'
import { useSelector } from "react-redux";
import '../loginInfo/loginInfo.css'

const LoginInfo = () => {


  const data = useSelector((state) => state.signin);
  console.log(data);
  
  return (
 
      <div className="container">
        <div className="user_wrapper">
                    <div className="user_info">
                    <h1>Login User</h1>
                    <h3>
                      Name: {data.firstname} {data.lastname}
                    </h3>
                    <p>Email: {data.email}</p>
                    <p>Password: {data.password}</p>
                  </div>
        </div>
      </div>
  )
}

export default LoginInfo