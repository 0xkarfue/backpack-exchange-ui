
"use client";

import dynamic from "next/dynamic";


const AdvancedRealTimeChart = dynamic(
  async () => {
    const mod = await import("react-ts-tradingview-widgets");
    return mod.AdvancedRealTimeChart;
  },
  { ssr: false }
);

export default function SOLUSDChart() {
  return (
    <div className="w-full h-[600px]">
      <AdvancedRealTimeChart
        symbol="BINANCE:SOLUSD"
        theme="dark"
        autosize
      />
    </div>
  );
}
