// "use client";

// import dynamic from "next/dynamic";

// // --- Chart ---
// const AdvancedRealTimeChart = dynamic(
//   async () => {
//     const mod = await import("react-ts-tradingview-widgets");
//     return mod.AdvancedRealTimeChart;
//   },
//   { ssr: false }
// );

// export function ChartPage() {
//   return (
//     <div className="w-full h-[600px]">
//       <AdvancedRealTimeChart
//         symbol="BINANCE:SOLUSD"
//         theme="dark"
//         autosize
//       />
//     </div>
//   );
// }

// --- Ticker Tape ---
// const TickerTape = dynamic(
//   async () => {
//     const mod = await import("react-ts-tradingview-widgets");
//     return mod.TickerTape;
//   },
//   { ssr: false }
// );

// export function TickerBar() {
//   return (
//     <TickerTape
//       symbols={[
//         { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
//         { proName: "BINANCE:ETHUSDT", title: "ETH/USDT" },
//         { proName: "BINANCE:SOLUSDT", title: "SOL/USDT" },
//       ]}
//       colorTheme="dark"
//       isTransparent={false}
//       displayMode="adaptive"
//     />
//   );
// }
