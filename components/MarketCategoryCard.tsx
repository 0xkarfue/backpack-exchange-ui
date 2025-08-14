"use client";

import { useEffect, useState } from "react";

type CategoryProps = { heading: string };

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

export default function MarketCategoryCard({ heading }: CategoryProps) {
  const [coinData, setCoinData] = useState<Coin[] | null>(null);

  const normalize = (data: any): Coin[] => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    // common wrappers
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
        const response = await fetch("http://localhost:3000/api/coins");
        if (!response.ok) {
          console.error("fetch failed", response.status);
          return;
        }
        const data = await response.json();
        console.log("raw /api/coins:", data);
        const normalized = normalize(data);
        console.log("normalized coins array:", normalized);
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
    <div className="bg-[#0f1113] p-4 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.6)] w-full sm:w-[30%]">
      <h1 className="text-white text-sm font-semibold mb-3">{heading}</h1>

      {coinData ? (
        <div className="space-y-2">
          {coinData.slice(0, 5).map((coin) => (
            <CoinSec key={coin.id} coin={coin} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}

function CoinSec({ coin }: { coin?: Coin | null }) {
  const price = coin ? `$${coin.current_price.toLocaleString()}` : "--";
  const pct =
    coin && typeof coin.price_change_percentage_24h === "number"
      ? `${coin.price_change_percentage_24h.toFixed(2)}%`
      : "--";
  const pctClass =
    coin && coin.price_change_percentage_24h > 0
      ? "text-green-400"
      : "text-red-400";

  return (
    <div className="flex justify-between items-center py-2 px-2 rounded-md hover:bg-[#151616] transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#0b0c0d] overflow-hidden">
          {coin ? (
            <img className="w-5 h-5 rounded-full" src={coin.image} alt={coin.name} />
          ) : (
            <div className="w-5 h-5 rounded-full bg-gray-700" />
          )}
        </div>
        <span className="text-gray-100 text-sm font-medium uppercase">
          {coin ? coin.symbol : "--"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-300 text-sm">{price}</span>
        <span className={`text-sm font-medium ${coin ? pctClass : "text-gray-500"}`}>
          {pct}
        </span>
      </div>
    </div>
  );
}


// tip never blindly paster ai code and remove yours