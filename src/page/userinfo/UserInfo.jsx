import React, { useEffect, useState } from 'react'


import '../userinfo/userinfo.css'
import Userinformation from '../../components/Userinformation'
import axios from 'axios'




const UserInfo = () => {
  let [userinfo, setUserinfo] = useState()

  useEffect(()=>{
   let data = async () =>{
    let response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUserinfo(response.data);
   }
   data()
  },[])


  console.log(userinfo);
  return (
    <>
    <div className="container">
    <div className="deatils">
      {
      userinfo && userinfo.length ?
        userinfo.map((item, index)=>{
          return(
            <Userinformation key={index} name={item.name} username={item.username} email={item.email} />
          )
        }):
        <h1>Loding.........</h1>
      }
    </div>
    </div>
    </>
  )
}

export default UserInfo