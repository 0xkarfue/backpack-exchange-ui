import Orderbook from "@/components/MarketComponents/Orderbook";
import OrderOption from "@/components/MarketComponents/OrderOption";
import SOLUSDChart from "@/components/TradingViewComponents/SOL_USD";

export default function () {
  return (
    <div className="flex justify-between p-4">
      <div className="w-[70%]">
        <SOLUSDChart />
      </div>
      <div>
        {/* <Orderbook /> */}
      </div>
      <OrderOption />
    </div>
  )
}