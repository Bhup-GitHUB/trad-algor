import { NextResponse } from "next/server";
import { bids, asks } from "@/lib/store";

/**
 * @swagger
 * /api/depth:
 *   get:
 *     summary: Get order book depth
 *     description: Retrieve the complete order book showing all bid and ask orders grouped by price
 *     tags: [Market Data]
 *     responses:
 *       200:
 *         description: Order book depth
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Depth'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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
