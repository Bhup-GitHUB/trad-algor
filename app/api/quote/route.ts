import { NextResponse } from "next/server";
import { bids, asks } from "@/lib/store";

/**
 * @swagger
 * /api/quote:
 *   get:
 *     summary: Get current market quotes
 *     description: Retrieve the best bid and ask prices from the order book
 *     tags: [Market Data]
 *     responses:
 *       200:
 *         description: Current market quotes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quote'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export async function GET() {
  const bestBid = bids.length ? Math.max(...bids.map((b) => b.price)) : null;
  const bestAsk = asks.length ? Math.min(...asks.map((a) => a.price)) : null;

  return NextResponse.json({ bestBid, bestAsk });
}
