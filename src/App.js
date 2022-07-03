import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>iNotesbooks</h1>
      <BrowserRouter>
    <Routes>
      <Route  path="Navbar" element={<Navbar />}></Route>
      <Route  path="HomePage" element={<Home />}></Route>
      <Route  path="AboutPage" element={<About />}></Route>
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
