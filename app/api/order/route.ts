import { asks, bids } from "@/lib/store";
import { fillOrders } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { side, price, quantity, userId } = body;

  const remaining = fillOrders(side, price, quantity, userId);

  if (remaining > 0) {
    return NextResponse.json({
      filledQuantity: quantity,
    });
  }

  const order = { userId, price, quantity: remaining };

  if (side === "bid") {
    bids.push(order);
    bids.sort((a, b) => a.price - b.price);
  } else {
    asks.push(order);
    asks.sort((a, b) => b.price - a.price);
  }
  return NextResponse.json({ filledQuantity: quantity - remaining });
}
