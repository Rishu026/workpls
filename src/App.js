import "./App.css";

import Navbar from './components/Navbar'
import Maps from "./components/pages/maps"
import {  Route, Routes } from "react-router-dom"
import Alld from "./components/pages/alldata"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Maps/>} />
        <Route path = "/Alld" element = {<Alld/>}/>
        
      </Routes>
    </div>
  );
}

export default App;