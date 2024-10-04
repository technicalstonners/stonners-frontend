import "../styles/home.css";
import BrandsBanner from "./homepage/Brandsbanner";
import Deals from "./homepage/Deals";
import Explore from "./homepage/Explore";
import Hero from "./homepage/Hero";
import HomeCategory from "./homepage/HomeCategory";
import OfferSwiper from "./homepage/OfferSwiper";
import Peaky from "./homepage/Peaky";
import SummerBanner from "./homepage/SummerBanner";
import TopPicks from "./homepage/topPicks";

export default function Home() {  
  return (
    <main className="col-center">
      <Hero />
      <OfferSwiper />
      <Explore />
      <Deals />
      <BrandsBanner />
      <HomeCategory category='category' />
      <TopPicks />
      <HomeCategory category='trendmakers' />
      {/* <Peaky /> */}
      <SummerBanner />
    </main>
  );
}
