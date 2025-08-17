"use client";

import { useEffect, useState } from "react";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
};

export default function OverviewCard() {
  const [coinData, setCoinData] = useState<Coin[] | null>(null);

  // Normalize to ensure consistent array structure from API
  const normalize = (data: any): Coin[] => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (data.coins && Array.isArray(data.coins)) return data.coins;
    if (data.data && Array.isArray(data.data)) return data.data;
    if (data.result && Array.isArray(data.result)) return data.result;
    if (data.items && Array.isArray(data.items)) return data.items;
    const vals = Object.values(data).filter(
      (v) => v && typeof v === "object" && "id" in v && "image" in v
    );
    if (vals.length) return vals as Coin[];
    return [];
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/overview");
        if (!response.ok) {
          console.error("fetch failed", response.status);
          return;
        }
        const data = await response.json();
        const normalized = normalize(data);
        if (normalized.length) setCoinData(normalized);
        else setCoinData(null);
      } catch (err) {
        console.error("fetch error:", err);
        setCoinData(null);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="bg-[#0f1113] p-4 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.6)] w-full sm:w-[90%]">
      {/* Top nav bar */}
      <div className="m-4 flex gap-6">
        <span className="text-gray-600 text-lg cursor-pointer hover:text-white transition">Spot</span>
        <span className="text-gray-600 text-lg cursor-pointer hover:text-white transition">Futures</span>
        <span className="text-gray-600 text-lg cursor-pointer hover:text-white transition">Lend</span>
      </div>

      {/* Data list */}
      {coinData ? (
        <div className="space-y-2">
          {coinData.slice(0, 10).map((coin) => (
            <CoinRow key={coin.id} coin={coin} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm px-4">Loading...</p>
      )}
    </div>
  );
}

function CoinRow({ coin }: { coin: Coin }) {
  const price = `$${coin.current_price.toLocaleString()}`;
  const pct = `${coin.price_change_percentage_24h.toFixed(2)}%`;
  const pctClass =
    coin.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="flex justify-between items-center py-2 px-2 rounded-md hover:bg-[#151616] transition-colors">
      <div className="flex items-center gap-3">
        <img className="w-6 h-6 rounded-full" src={coin.image} alt={coin.name} />
        <span className="text-gray-100 text-sm font-medium uppercase">
          {coin.symbol}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-300 text-sm">{price}</span>
        <span className={`text-sm font-medium ${pctClass}`}>{pct}</span>
      </div>
    </div>
  );
}











// "use client"

// import { useEffect, useState } from "react"

// const [coinData, setCoinData] = useState("")

// export default function() {

//     useEffect(() => {
//         const fetchApi = async () => {
//             const response = await fetch("http://localhost:3000/api/overview")
//             const data = await response.json()
//         }
//         fetchApi()
//     })

//     return (
//         <div className="bg-[#0f1113] p-4 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.6)] w-full sm:w-[90%]">
//             <div className="m-4">
//                 <span className="m-4 text-gray-600 text-lg">Spot</span>
//                 <span className="m-4 text-gray-600 text-lg">Futures</span>
//                 <span className="m-4 text-gray-600 text-lg">Lend</span>
//             </div>
//         </div>
//     )
// }