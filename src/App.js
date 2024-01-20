import './App.css';
import Calorie from './Components/Calorie/Calorie';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Calorie />
      <Footer />
    </div>
  );
}

export default App;
