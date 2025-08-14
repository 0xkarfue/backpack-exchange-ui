import Carousel from "@/components/Carousel";
import MarketCategoryCard from "@/components/MarketCategoryCard";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Carousel/>
      <MarketCategoryCard heading="Coin"/>
    </div>
  );
}
