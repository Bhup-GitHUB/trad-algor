import { users, bids, asks } from "./store";
import { TICKER } from "./types";

export function flipBalance(
  sellerId: string,
  buyerId: string,
  quantity: number,
  price: number
) {
  const seller = users.find((u) => u.id === sellerId);
  const buyer = users.find((u) => u.id === buyerId);
  if (!seller || !buyer) return;

  seller.balances[TICKER] -= quantity;
  buyer.balances[TICKER] += quantity;
  seller.balances["USD"] += quantity * price;
  buyer.balances["USD"] -= quantity * price;
}

export function fillOrders(
  side: string,
  price: number,
  quantity: number,
  userId: string
): number {
  let remaining = quantity;

  if (side === "bid") {
    for (let i = asks.length - 1; i >= 0; i--) {
      const ask = asks[i];
      if (ask.price > price) continue;

      if (ask.quantity > remaining) {
        ask.quantity -= remaining;
        flipBalance(ask.userId, userId, remaining, ask.price);
        return 0;
      } else {
        remaining -= ask.quantity;
        flipBalance(ask.userId, userId, ask.quantity, ask.price);
        asks.splice(i, 1);
      }
    }
  } else {
    for (let i = bids.length - 1; i >= 0; i--) {
      const bid = bids[i];
      if (bid.price < price) continue;

      if (bid.quantity > remaining) {
        bid.quantity -= remaining;
        flipBalance(userId, bid.userId, remaining, price);
        return 0;
      } else {
        remaining -= bid.quantity;
        flipBalance(userId, bid.userId, bid.quantity, price);
        bids.splice(i, 1);
      }
    }
  }

  return remaining;
}
