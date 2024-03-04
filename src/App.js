import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Calorie from './Components/Calorie/Calorie';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Spiritual from "./Components/Spiritual/Spiritual";
import Fitmen from "./Components/Fitness/Fitmen/Fitmen";
import Fitwomen from "./Components/Fitness/Fitwomen/Fitwomen";
import Yoga from "./Components/Fitness/Yoga/Yoga";
import Register from "./Components/Auth/register/Register";
import Login from "./Components/Auth/login/Login";

function App() {
  const [docId, setDocId]=useState(null)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar doc={[docId, setDocId]}/>
          <Routes>
            <Route path="/" element={docId===null?<Login setDocId={setDocId}/>:<Home />} />
            <Route path="/calorie" element={docId===null?<Login setDocId={setDocId}/>:<Calorie />}/>
            <Route path="/spiritual" element={docId===null?<Login setDocId={setDocId}/>:<Spiritual />}/>
            <Route path="/men" element={docId===null?<Login setDocId={setDocId}/>:<Fitmen />} />
            <Route path="/women" element={docId===null?<Login setDocId={setDocId}/>:<Fitwomen/>} />
            <Route path="/yoga" element={docId===null?<Login setDocId={setDocId}/>:<Yoga/>} />
            <Route path="/register" element={<Register/>}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
