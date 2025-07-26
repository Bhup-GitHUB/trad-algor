import { NextResponse } from "next/server";
import { bids, asks } from "@/lib/store";

export async function GET() {
  const bestBid = bids.length ? Math.max(...bids.map((b) => b.price)) : null;
  const bestAsk = asks.length ? Math.min(...asks.map((a) => a.price)) : null;

  return NextResponse.json({ bestBid, bestAsk });
}
