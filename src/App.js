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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/calorie" element={<Calorie />}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
