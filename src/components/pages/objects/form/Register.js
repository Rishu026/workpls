import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
//import { toast } from "react-toastify";
import axios from 'axios';

export default function Register(props) {
  const navigate = useNavigate()
    const [email_id,setemail_id]=useState("")
    const[contact_number,setContact_number]=useState("")
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")
    const[Confirm,setConfirm]=useState("")
    const[purpose,setPurpose]=useState("")
   

    const handleSubmit =async(e)=>{
      e.preventDefault();
      
      if(name===""||email_id===""||password===""||contact_number===""){
          alert("fill all the fields")
      }
      if(password!==Confirm){
          alert("passwords do not match")
      }
      else{
      try    {
      const header ={'Content-type':'application/json'}
      const response = await axios.post("http://localhost:7000/users/create",{ 
      email_id: email_id,
      password: password,
      name: name,
      purpose: purpose,
      contact_number: contact_number},{headers:header})
      const data = await response.data
      if(data){
            alert("Account has been created , please proceed to login")
            navigate("/Login", { replace: true });
      }
      else{
          alert("User with this email already exists")
      
      }}catch(err){alert("User already exists")}
  }
  setemail_id('')
  setname('')
  setpassword('')
  setConfirm('')   
  setContact_number('')
  setPurpose('')
  }    
  return(
    <React.Fragment >
    <div className='z-0'>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
          Create An Account
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          Welcome to Historic data!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            maxLength={60}
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400 input"
            onChange={(event) => {
              setname(event.target.value);
            }}
          />
          
          <input
          
            type="number"
            maxLength={12}
            placeholder="Phone number"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              setContact_number(event.target.value);
            }}
          />
          <input
            type="email"
            required
            maxLength={50}
            placeholder="Email"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              setemail_id(event.target.value);
            }}
          />
          <input
            type="password"
            required
            minLength={5}
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            
            onChange={(event) => {
              setConfirm(event.target.value);    
        
            }}
          />
          <textarea
            type="text"
            required
            maxLength={300}
            placeholder="Purpose (max 300 characters)"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              setPurpose(event.target.value);
            }}
            
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-4 w-64 text-xl text-white bg-orange-400 rounded-2xl hover:bg-orange-300 active:bg-orange-500 outline-none"
          >
            Create Account
          </button>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/Login"
              onClick={() => {
                props.setPage("login");
              }}
            >
              <span className="underline cursor-pointer">Sign In</span>
            </Link>
          </p>
        </div>
      </form>
      </React.Fragment >
  )
}