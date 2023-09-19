import "./loginpage.css";
import React, { useState, useEffect } from "react";
import Login from "./objects/form/login";
import Register from "./objects/form/Register";
import Home from "./loginhome";
import jwt_decode from "jwt-decode";

function Loginpage() {
  const [page, setPage] = useState("register");
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Update the token whenever it changes in localStorage
    const auth = localStorage.getItem("access_token");
    setToken(auth);

  }, []);


  const choosePage = () => {
    if (page === "login") {
      return <Login setPage={setPage} onLogin={handleLogin} />;
    }
    if (page === "register") {
      return <Register setPage={setPage} onLogin={handleLogin} />;
    }
  };
  const handleLogin = (accessToken) => {
    // Set the token in Loginpage's state
    setToken(accessToken);
    const decodedToken = jwt_decode(accessToken);
    console.log(decodedToken.role)
    setUserRole(decodedToken.role);
  };

  // Render Home immediately if token is not null
  if (userRole==="no privileges") {
    return <Home />;
  }
  else if(userRole==="low privelege"){
    return 
  }
  else{
    
  }
//if auth.role = yes then 
      //  return <Authorized_user />
      //if auth.role = no then
      //   return <Normal_user /> or <Home/>
  return (
    <div className="min-h-screen bg-orange-300 flex justify-center items-center">
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        {choosePage()}
      </div>
    </div>
  );
}

export default Loginpage;