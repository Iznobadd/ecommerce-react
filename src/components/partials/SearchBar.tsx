import { RiArrowDropDownLine, RiSearchLine } from "react-icons/ri";
function SearchBar() {
  return (
    <form className="w-full pt-0 p-[5px] bg-primaryContrast lg:p-0">
      <div className="hidden lg:block min-w-[175px] h-[40px] bg-gray-200">
        <select
          name=""
          id=""
          className="invisible h-px w-px min-h-[40px] -m-px"
        ></select>
        <span className="w-full inline-block h-[40px]">
          <span className="block pt-1.5 pb-1 pr-8 pl-3 h-full relative">
            <span className="text-[0.7rem] text-[#505050]">
              TOUS LES PRODUITS
            </span>
            <span className="absolute right-1 top-1/2 -translate-y-1/2">
              <RiArrowDropDownLine size={30} color="#505050" />
            </span>
          </span>
        </span>
      </div>
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
    </form>
  );
}

export default SearchBar;
