import React from 'react'

const Userinformation = ({name, username, email}) => {
  return (
    <div className="item">
    <h2>Name : {name}</h2>
    <h2>Username : {username}</h2>
    <h2>Email : {email}</h2>
   </div> 
  )
}

export default Userinformation