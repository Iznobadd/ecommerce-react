import {
  Ri24HoursLine,
  RiKakaoTalkFill,
  RiLock2Fill,
  RiVisaFill,
} from "react-icons/ri";

export default function Welcome() {
  return (
    <section className="mt-8 py-8 text-center md:text-left mx-auto bg-primary">
      <div className="xl:container xl:mx-auto tablet:px-[20px] xl:px-0">
        <div className="flex flex-row flex-wrap md:flex-nowrap max-w-[90%] md:max-w-full mx-auto">
          <div className="basis-full">
            <h2 className="font-bold text-white mb-8">
              Bienvenue sur Mon super site e-commerce !
            </h2>
            <p className="text-white text-justify lg:max-w-[60%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised.
            </p>
            <div className="mt-8">
              <a
                href="/"
                className="block md:inline-block px-6 py-3 bg-secondary text-black font-bold rounded"
              >
                En savoir plus
              </a>
            </div>
          </div>
          <div className="basis-full">
            <div className="flex flex-row justify-center mt-8 md:mt-0 items-center text-white font-bold flex-wrap">
              <div className="flex justify-center flex-wrap  max-w-[50%] w-1/2 pb-8">
                <Ri24HoursLine color="white" size={100} />
                <p className="w-full text-center mt-5">Livraison Express !</p>
              </div>
              <div className="flex justify-center flex-wrap  max-w-[50%] w-1/2 pb-8">
                <RiLock2Fill color="white" size={100} />
                <p className="w-full text-center mt-5">Paiement sécurisé</p>
              </div>
              <div className="flex justify-center flex-wrap  max-w-[50%] w-1/2 ">
                <RiVisaFill color="white" size={100} />
                <p className="w-full text-center mt-5">
                  Nombreux modes de paiement
                </p>
              </div>
              <div className="flex justify-center flex-wrap max-w-[50%] w-1/2 ">
                <RiKakaoTalkFill color="white" size={100} />
                <p className="w-full text-center mt-5">
                  Service client réactif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
