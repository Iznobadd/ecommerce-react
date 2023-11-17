import { PiTextAlignJustify } from "react-icons/pi";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { BsCart3, BsPersonFill } from "react-icons/bs";
import Logo from "../../assets/images/logo.png";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

type TopBarProps = {
  toggleMenu: () => void;
};
function TopBar({ toggleMenu }: TopBarProps) {
  const [openLogin, setOpenLogin] = useState(false);

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <header className="w-full bg-primaryContrast">
      <div className="flex items-center gap-2 lg:container lg:mx-auto lg:h-[80px] lg:gap-6">
        <div
          className="p-[5px] border-r border-primary lg:hidden"
          onClick={toggleMenu}
        >
          <PiTextAlignJustify size={40} color="white" />
        </div>
        <div className="px-[5px] py-[1px] border-r border-primary flex-grow lg:grow-0 lg:border-r-0">
          <Link to="/">
            <img
              src={Logo}
              alt="E-commerce website logo"
              className="max-w-full h-12 mx-auto"
            />
          </Link>
        </div>
        <div className="hidden flex-grow lg:block">
          <SearchBar />
        </div>
        <div className="text-white border-primary border-r p-[5px] lg:border-r-0 lg:flex lg:flex-col-reverse lg:items-center">
          <Link to="/login" className="inline lg:hidden">
            Se connecter <RiArrowRightSLine className="inline" />
          </Link>
          <p
            className="hidden lg:block relative cursor-pointer"
            onClick={toggleLogin}
          >
            Identifiez-vous <RiArrowDownSLine className="inline" />
            <div
              className={`${
                openLogin ? "block" : "hidden"
              } absolute top-8 w-[300px] left-1/2 transform -translate-x-1/2 bg-[#d9d9d9] text-black text-center p-5 z-20 rounded before:content-[''] before:w-0 before:h-0 before:border-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[10px] before:border-t-transparent before:border-solid before:border-[#d9d9d9] before:absolute before:top-[-20px] before:left-1/2 before:transform before:-translate-x-1/2`}
            >
              <Link
                to="/login"
                className="bg-secondary w-5/6 block mx-auto rounded py-2 px-4"
              >
                Connexion
              </Link>
              <div className="mt-4">
                Nouveau client ?{" "}
                <Link to="/register" className="underline text-blue-600">
                  Créer un compte
                </Link>
              </div>
            </div>
          </p>
          <BsPersonFill className="inline lg:hidden" size={40} />
        </div>
        <div className="text-white p-[5px] lg:flex lg:flex-col">
          <BsCart3 size={40} />
          <p className="hidden lg:block">Panier</p>
        </div>
      </div>
      <div className="lg:hidden">
        <SearchBar />
      </div>
    </header>
  );
}

export default TopBar;
