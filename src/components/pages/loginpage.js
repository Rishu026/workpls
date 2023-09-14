import "./loginpage.css";
import React, { useState, useEffect } from "react";
//import Forgot from "./form/Forgot";
import Login from "./objects/form/login";
import Register from "./objects/form/Register";
import Home from "./loginhome";


function Loginpage() {
  const [page, setPage] = useState("register");
  const [token, setToken] = useState();

  useEffect(() => {
    const auth = localStorage.getItem("auth_token");
    setToken(auth);
  }, [token]);

  const choosePage = () => {
    if (page === "login") {
      return <Login setPage = {setPage} />;
    }
    
      
    
    //if (page === "forgot") {
      //return <Forgot setPage={setPage} />;
   // }
    if (page === "register") {
      return <Register setPage= {setPage }  />;
    }
  };
//implement role based if checking?

  const pages = () => {
    if (token == null) {
      return (
        <div className="min-h-screen bg-orange-300 flex justify-center items-center">
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            {choosePage()}
          </div>
        </div>
      );
    } else {
      //implement role based if checking"? so that 
      return <Home />;
      //if auth.role = yes then 
      //  return <Authorized_user />
      //if auth.role = no then
      //   return <Normal_user /> or <Home/>
    }
  };

  return <React.Fragment>{pages()}</React.Fragment>;
}

export default Loginpage;