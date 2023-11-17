import { useState } from "react";
import Menu from "./components/partials/Menu";
import TopBar from "./components/partials/TopBar";
import Home from "./screens/Home";
import Footer from "./components/partials/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <TopBar toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
