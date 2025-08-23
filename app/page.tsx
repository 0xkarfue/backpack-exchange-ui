import Carousel from "@/components/LandingComponents/Carousel";
import MarketCategoryCard from "@/components/LandingComponents/MarketCategoryCard";
import MarketOverview from "@/components/LandingComponents/MarketOverview";
import Nav from "@/components/LandingComponents/Nav";
import { TradeOption } from "@/components/LandingComponents/NavComponents";
import {Btn1, Btn2} from "@/components/MarketComponents/Button";
import Input from "@/components/MarketComponents/Input";
import Orderbook from "@/components/MarketComponents/Orderbook";
import OrderOption from "@/components/MarketComponents/OrderOption";
import Range from "@/components/MarketComponents/Range";
// import { SOLUSDChart } from "./trade/SOL_USD/page";

export default function Home() {
  return (
    <div>
      {/* <Nav/>
      <Carousel/>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
      <MarketCategoryCard heading="Coin"/>
      <MarketCategoryCard heading="Top Gainer"/>
      <MarketCategoryCard heading="Popular"/>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
      <MarketOverview/>
      </div> */}

      <Orderbook />
      
    </div>
  );
}
