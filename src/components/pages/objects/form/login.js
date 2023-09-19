import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(props){
  //axios.defaults.withCredentials = true;
  const [email,setemail]= useState('')
  const [password,setpassword] = useState('')
  //const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const header = {'Content-type':'application/x-www-form-urlencoded'}
      const response = await axios.post("http://localhost:7000/users/login",{username:email,password:password},{headers:header})
      setemail('')
      setpassword('')
      const data = response.data
      console.log(data)
      if(data.access_token){
        localStorage.setItem("access_token",data.access_token);
        const token = data.access_token;
        props.onLogin(token);
        alert("Logged in successfully")
        
      }
      else{
        alert("Invalid credentials")
      }
    }catch(err){
      alert("An error occured while logging in")
    }
  }
  return(
    <React.Fragment>
      <div className='z-0'>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
          Welcome to Historic Data
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
          Please login to your account!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Registered Email"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              setemail(event.target.value)
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-orange-400"
            onChange={(event) => {
              setpassword(event.target.value)
            }}
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-3 w-64 text-xl text-white bg-orange-400 rounded-2xl hover:bg-orange-300 active:bg-orange-500 outline-none"
          >
            Sign In
          </button>
          <p className="mt-4 text-sm">
            You don't have an account?{" "}
            <Link
              to="/login"
              onClick={() => {
                props.setPage=("register"); 
                
              }}
            >
              <span className="underline cursor-pointer">Register!</span>
            </Link> Please contribute.
          </p>
        </div>
      </form>
    </React.Fragment>
  );
}