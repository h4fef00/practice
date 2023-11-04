// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home";
// import Login from "./components/login/Form";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
      <Navbar />
    </>
  );
}

export default App;
