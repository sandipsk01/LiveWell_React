import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/calorie" element={<Calorie />}/>
            <Route path="/spiritual" element={<Spiritual />}/>
            <Route path="/men" element={<Fitmen />} />
            <Route path="/women" element={<Fitwomen/>} />
            <Route path="/yoga" element={<Yoga/>} />
            <Route path="/register" element={<Register/>}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
