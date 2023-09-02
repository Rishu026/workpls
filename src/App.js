import "./App.css";

import Navbar from './components/Navbar'
import Maps from "./components/pages/maps"
import {Route, Routes } from "react-router-dom"
import Alld from "./components/pages/alldata"
import { Metadata } from "./components/pages/metadata";
import { Login } from "./components/pages/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Maps/>} />
        <Route path = "/Alld" element = {<Alld/>}/>
        <Route path = "/Metadata" element ={<Metadata/>}/>
        <Route path = "/Login" element ={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;