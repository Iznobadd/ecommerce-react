import Vente from "../../assets/images/vente.jpg";
import MoreButton from "../partials/MoreButton";

export default function Category() {
  return (
    <section className="text-center md:text-left max-w-[90%] mx-auto md:max-w-full">
      <div className="flex flex-col md:flex-row justify-between items-center pb-8">
        <h2 className="uppercase font-bold">Nos différentes catégories</h2>
        <MoreButton desktop={true} link="/" />
      </div>
      <div className="flex flex-row gap-7 flex-wrap md:flex-nowrap">
        <div className="basis-auto">
          <a href="/">
            <img src={Vente} alt="Best sells" className="w-full block" />
          </a>
        </div>
        <div className="basis-auto">
          <a href="/">
            <img src={Vente} alt="Best sells" className="w-full block" />
          </a>
        </div>
        <MoreButton desktop={false} link="/" />
      </div>
      <div className="md:flex flex-row gap-7 flex-wrap md:flex-nowrap mt-8 hidden">
        <div className="basis-auto">
          <a href="/">
            <img src={Vente} alt="Best sells" className="w-full block" />
          </a>
        </div>
        <div className="basis-auto">
          <a href="/">
            <img src={Vente} alt="Best sells" className="w-full block" />
          </a>
        </div>
        <div className="basis-auto">
          <a href="/">
            <img src={Vente} alt="Best sells" className="w-full block" />
          </a>
        </div>
      </div>
    </section>
  );
}
