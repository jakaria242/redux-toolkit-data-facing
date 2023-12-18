import React, { useState } from 'react'
import '../signIn/signIn.css'
import { useDispatch, useSelector } from "react-redux";
import { addFirstNmae, addLastName, addEmail, addPassword  } from '../../features/signin/siginSile';
import { Link } from 'react-router-dom';





const SignIn = () => {
  const data = useSelector((state) => state.signin);
  const dispatch = useDispatch();
  console.log(data);

  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  let handleForm = (e) =>{
    let {name, value} = e.target
    setFormData({...formData,[name]:value})
  }
  let handleSubmit = (e) =>{
      e.preventDefault();
      console.log(formData.firstName);
      dispatch(addFirstNmae(formData.firstName));
      dispatch(addLastName(formData.lastName));
      dispatch(addEmail(formData.email));
      dispatch(addPassword(formData.password));
  };

  return (
    <div className="container">
    <div className="from">
      <form >
        <input name='firstName' placeholder='FirstName' type="text" onChange={handleForm} />
        <input name='lastName' placeholder='LastName' type="text" onChange={handleForm} />
        <input name='email' placeholder='Email' type="email" onChange={handleForm}/>
        <input name='password' placeholder='Password' type="password" onChange={handleForm} />
      </form>
      <button onClick={handleSubmit} ><Link to="/logininfo">Submit</Link></button>
    </div>
   </div>
  )
}

export default SignIn