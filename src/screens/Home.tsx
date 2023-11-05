import Banner from "../components/home/Banner";
import BestSell from "../components/home/BestSell";
import Category from "../components/home/Category";
import Faq from "../components/home/Faq";
import Welcome from "../components/home/Welcome";

function Home() {
  return (
    <main>
      <div className="lg:container lg:mx-auto">
        <Banner />
        <BestSell />
        <Category />
      </div>
      <Welcome />
      <div className="lg:container lg:mx-auto">
        <Faq />
      </div>
    </main>
  );
}

export default Home;
