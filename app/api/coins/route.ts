import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pump,solana,bitcoin,ethereum,dogecoin&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
