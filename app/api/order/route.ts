import { asks, bids } from "@/lib/store";
import { fillOrders } from "@/lib/utils";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Place a new order
 *     description: Place a bid (buy) or ask (sell) order. The order will be matched against existing orders and any unfilled portion will be added to the order book.
 *     tags: [Trading]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order placed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderResponse'
 *       400:
 *         description: Invalid order parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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
    