import { RiArrowDropDownLine, RiSearchLine } from "react-icons/ri";
function SearchBar() {
  return (
    <form className="w-full pt-0 p-[5px] bg-primaryContrast lg:p-0 lg:flex">
      <div className="relative w-1/2 hidden lg:block h-[40px]">
        <select
          className="appearance-none h-[40px] pl-3 w-full bg-gray-200"
          placeholder="Rechercher un produit"
        >
          <option value="all">Tous les produits</option>
          <option value="all">Tous les produits</option>
          <option value="all">Tous les produits</option>
          <option value="all">Tous les produits</option>
        </select>
        <RiArrowDropDownLine
          size={30}
          className="absolute right-0 top-0 bottom-0 m-auto mr-3 pointer-events-none"
        />
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
