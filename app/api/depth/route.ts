import { NextResponse } from "next/server";
import { bids, asks } from "@/lib/store";

export async function GET() {
  const depth: Record<string, { type: "bid" | "ask"; quantity: number }> = {};

  for (const b of bids) {
    const key = b.price.toString();
    depth[key] = depth[key]
      ? { ...depth[key], quantity: depth[key].quantity + b.quantity }
      : { type: "bid", quantity: b.quantity };
  }

  for (const a of asks) {
    const key = a.price.toString();
    depth[key] = depth[key]
      ? { ...depth[key], quantity: depth[key].quantity + a.quantity }
      : { type: "ask", quantity: a.quantity };
  }

  return NextResponse.json({ depth });
}
