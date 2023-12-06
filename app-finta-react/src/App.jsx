import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Profilo from "./components/profilo/Profilo";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profilo />} />
      </Routes>
    </>
  );
}

export default App;
