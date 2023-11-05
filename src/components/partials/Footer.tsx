import { RiAtLine, RiPhoneLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="mt-8 py-8 text-center md:text-left mx-auto bg-primary">
      <div className="xl:container xl:mx-auto tablet:px-[20px] xl:px-0">
        <div className="flex items-start justify-center flex-wrap">
          <div className="flex w-full max-w-[100%] flex-wrap md:max-w-[25%] text-white items-start mb-5 md:mb-0">
            <h4 className="font-bold uppercase basis-full mb-2">
              Qui sommes-nous
            </h4>
            <div className="w-[100px] border-white border-b-3 mb-2 hidden md:block"></div>
            <a href="/" className="basis-full mb-1 inline">
              Notre histoire
            </a>
            <a href="/" className="basis-full mb-1">
              CGV / avis clients
            </a>
            <a href="/" className="basis-full mb-1">
              Données personnelles & cookies
            </a>
            <a href="/" className="basis-full mb-1">
              Gérer mes cookies
            </a>
            <a href="/" className="basis-full mb-1">
              Mentions légales
            </a>
          </div>
          <div className="flex w-full flex-wrap md:max-w-[25%] text-white mb-5 md:mb-0">
            <h4 className="font-bold uppercase basis-full mb-2">
              Nous rejoindre
            </h4>
            <div className="w-[100px] border-white border-b-3 mb-2 hidden md:block"></div>
            <a href="/" className="basis-full mb-1">
              Vendre des produits
            </a>
            <a href="/" className="basis-full mb-1">
              Recrutement
            </a>
          </div>
          <div className="flex w-full flex-wrap md:max-w-[25%] text-white mb-5 md:mb-0">
            <h4 className="font-bold uppercase basis-full mb-2">
              Besoin d'aide ?
            </h4>
            <div className="w-[100px] border-white border-b-3 mb-2 hidden md:block"></div>
            <a href="/" className="basis-full mb-1">
              Questions fréquentes
            </a>
            <a href="/" className="basis-full mb-1">
              Modes de livraison
            </a>
            <a href="/" className="basis-full mb-1">
              Modes de réglement
            </a>
            <a href="/" className="basis-full mb-1">
              Demander un retour
            </a>
          </div>
          <div className="flex w-full flex-wrap md:max-w-[25%] text-black">
            <h4 className="font-bold uppercase basis-full mb-2 text-white">
              Nous contacter
            </h4>
            <div className="w-[100px] border-white border-b-3 mb-2 hidden md:block"></div>
            <div className="basis-full bg-secondary px-5 py-3 font-bold flex justify-center items-center mb-5">
              <RiPhoneLine className="mr-2" size={30} />
              <span>07.50.42.19.91</span>
            </div>
            <div className="basis-full bg-secondary px-5 py-3 font-bold flex justify-center items-center md:text-[10px] lg:text-[18px] lg:text-inherit">
              <RiAtLine className="mr-2" size={30} />
              <span>brandon.cebi.pro@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
