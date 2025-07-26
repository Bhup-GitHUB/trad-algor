import { NextRequest, NextResponse } from "next/server";
import { users } from "@/lib/store";
import { TICKER } from "@/lib/types";

/**
 * @swagger
 * /api/balance:
 *   get:
 *     summary: Get user balance
 *     description: Retrieve the current balance for a user including GOOGLE stock and USD
 *     tags: [User Management]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID to get balance for
 *     responses:
 *       200:
 *         description: User balance retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Balance'
 *       404:
 *         description: User not found
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
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'userId is required' }, { status: 400 });
  }

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return NextResponse.json({ USD: 0, [TICKER]: 0 });
  }

  return NextResponse.json({ balances: user.balances });
}
