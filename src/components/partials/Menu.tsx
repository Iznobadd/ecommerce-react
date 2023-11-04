import { useState } from "react";
type isMenuOpen = {
  isMenuOpen: boolean;
};
function Menu({ isMenuOpen }: isMenuOpen) {
  return (
    <nav
      className={`bg-primary lg:h-[40px] menu lg:relative absolute top-[50px] w-full lg:top-0 lg:block ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-full xl:container xl:mx-auto h-full">
        <ul className="lg:flex text-center text-white font-bold items-center justify-center h-full">
          <li>
            <a href="/">TOUS NOS PRODUITS</a>
          </li>
          <li>
            <a href="/">MEILLEURES VENTES</a>
          </li>
          <li>
            <a href="/">NOUVEAUTÉS</a>
          </li>
          <li>
            <a href="/">PROMOTIONS</a>
          </li>
          <li>
            <a href="/">NOUS CONTACTER</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
