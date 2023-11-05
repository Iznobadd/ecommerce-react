import { useState } from "react";
import Menu from "./components/partials/Menu";
import TopBar from "./components/partials/TopBar";
import Home from "./screens/Home";
import Footer from "./components/partials/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <TopBar toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
