import Carousel from "@/components/Carousel";
import MarketCategoryCard from "@/components/MarketCategoryCard";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Carousel/>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
      <MarketCategoryCard heading="Coin"/>
      <MarketCategoryCard heading="Top Gainer"/>
      <MarketCategoryCard heading="Popular"/>
      </div>
    </div>
  );
}
