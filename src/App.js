import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import './App.css';
import Calorie from './Components/Calorie/Calorie';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Spiritual from "./Components/Spiritual/Spiritual";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/calorie" element={<Calorie />}/>
            <Route path="/spiritual" element={<Spiritual />}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
