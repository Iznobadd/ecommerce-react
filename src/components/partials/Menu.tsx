import { PiTextAlignJustify } from "react-icons/pi";
import { RiArrowRightSLine, RiSearchLine } from "react-icons/ri";
import { BsCart3, BsPersonFill } from "react-icons/bs";
import Logo from "../../assets/images/logo.png";
function Menu() {
  return (
    <header className="w-full">
      <div className="flex bg-primaryContrast items-center">
        <div className="p-[5px] border-r">
          <PiTextAlignJustify size={40} color="white" />
        </div>
        <div className="px-[5px] py-[1px] border-r flex-grow">
          <img
            src={Logo}
            alt="E-commerce website logo"
            className="max-w-full h-12 mx-auto"
          />
        </div>
        <div className="text-white border-r p-[5px]">
          <p className="inline">
            Se connecter <RiArrowRightSLine className="inline" />
          </p>
          <BsPersonFill className="inline" size={40} />
        </div>
        <div className="text-white p-[5px]">
          <BsCart3 size={40} />
        </div>
      </div>
      <div className="w-full pt-0 p-[5px] bg-primaryContrast">
        <div className="bg-white h-[40px] relative w-full">
          <input
            type="text"
            className="appearance-none h-[35px] mt-1 pl-3 w-full"
            placeholder="Rechercher un produit"
          />
          <button type="submit" className="absolute right-0 h-full w-[45px]">
            <RiSearchLine size={30} className="mx-auto" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Menu;
