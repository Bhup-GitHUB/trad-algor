import { NextRequest, NextResponse } from "next/server";
import { users } from "@/lib/store";
import { TICKER } from "@/lib/types";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const user = users.find((u) => u.id === params.userId);

  if (!user) {
    return NextResponse.json({ USD: 0, [TICKER]: 0 });
  }

  return NextResponse.json({ balances: user.balances });
}
