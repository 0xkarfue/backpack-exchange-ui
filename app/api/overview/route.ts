import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum,solana,bitcoin,hype,sui,ena,binancecoin,ripple,dogecoin,uniswap&order=market_cap_desc&per_page=10&page=1&sparkline=true")
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}