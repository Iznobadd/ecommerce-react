import { useState } from "react";
import Menu from "./components/partials/Menu";
import TopBar from "./components/partials/TopBar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <TopBar toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} />
    </>
  );
}

export default App;
