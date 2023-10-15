import { PiTextAlignJustify } from "react-icons/pi";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsCart3, BsPersonFill } from "react-icons/bs";
import Logo from "../../assets/images/logo.png";
import SearchBar from "./SearchBar";
function Menu() {
  return (
    <header className="w-full bg-primaryContrast">
      <div className="flex items-center gap-2 lg:container lg:mx-auto lg:h-[80px] lg:gap-6">
        <div className="p-[5px] border-r border-primary lg:hidden">
          <PiTextAlignJustify size={40} color="white" />
        </div>
        <div className="px-[5px] py-[1px] border-r border-primary flex-grow lg:grow-0 lg:border-r-0">
          <img
            src={Logo}
            alt="E-commerce website logo"
            className="max-w-full h-12 mx-auto"
          />
        </div>
        <div className="hidden flex-grow lg:block">
          <SearchBar />
        </div>
        <div className="text-white border-primary border-r p-[5px] lg:border-r-0 lg:flex lg:flex-col-reverse lg:items-center">
          <p className="inline">
            Se connecter <RiArrowRightSLine className="inline" />
          </p>
          <BsPersonFill className="inline lg:block" size={40} />
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

export default Menu;
