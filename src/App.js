import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import { Login } from "./Components/Login";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
      
    <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="Navbar" element={<Navbar />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="AboutPage" element={<About />}></Route>
            <Route path="LoginPage" element={<Login/>}></Route>
            <Route path="SignUpPage" element={<SignUp/>}></Route>
          </Routes>
        </BrowserRouter>
        </NoteState>
    </>
  );
}

export default App;
