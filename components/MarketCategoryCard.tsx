"use client"

import { useEffect, useState } from "react";

type CategoryProps = {
  heading: string;
};

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

type CoinSecProps = {
  coin: Coin;
};

export default function ({ heading }: CategoryProps) {
  const [coinData, setCoinData] = useState<Coin[] | null>(null);
  useEffect(() => {
    const fetchApi = async () => {
      let responese = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pump,solana,bitcoin,ethereum,dogecoin&order=market_cap_desc&per_page=5&page=1&sparkline=false", { cache: "no-store" })
      let data = await responese.json()
      console.log(data)
      setCoinData(data)
    }
    fetchApi()
  }, [])

  if (coinData) {

    return (
      <div>
        <h1>{heading}</h1>
        <CoinSec coin={coinData[0]}/>
      </div>
    )
  }
  return (
    <div>
      <h1>Loadinggggggggg...........</h1>
    </div>
  )
}

export function CoinSec({coin}: CoinSecProps) {
  return (
    <div className="flex justify-between">
      <img className="w-16" src={coin.image} alt="" />
      <span>{coin.name}</span>
      <span>{coin.current_price}</span>
      <span>{coin.price_change_percentage_24h}</span>
    </div>
  )
}