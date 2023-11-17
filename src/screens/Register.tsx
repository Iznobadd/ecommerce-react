import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="w-full">
      <h1 className="uppercase text-center font-bold py-10">INSCRIPTION</h1>
      <div className="bg-white md:w-1/2 lg:w-1/3 md:mx-auto pb-5">
        <h2 className="text-center font-bold py-10">Vos identifiants</h2>
        <form action="">
          <input
            type="text"
            placeholder="Votre e-mail"
            className="border border-black w-5/6 block mx-auto py-2 px-4 mb-4"
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            className="border border-black w-5/6 block mx-auto py-2 px-4 mb-4"
          />

          <div className="w-full border-t-2 border-black mt-10"></div>

          <h2 className="text-center font-bold py-10">
            Informations personnelles
          </h2>
          <input
            type="text"
            placeholder="Prénom"
            className="border border-black w-5/6 block mx-auto py-2 px-4 mb-4"
          />
          <input
            type="text"
            placeholder="Nom"
            className="border border-black w-5/6 block mx-auto py-2 px-4 mb-4"
          />
          <input
            type="password"
            placeholder="Pays"
            className="border border-black w-5/6 block mx-auto py-2 px-4 mb-4"
          />
          <input
            type="password"
            placeholder="Date de naissance"
            className="border border-black w-5/6 block mx-auto py-2 px-4 mb-4"
          />
          <button className="bg-primary w-5/6 block mx-auto py-3 px-4 text-white uppercase font-bold my-10 text-center">
            Créer un compte
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
