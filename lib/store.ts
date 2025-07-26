import { Order, User } from "./types";

export const users: User[] = [
  //dummy balance for now
  { id: "1", balances: { GOOGLE: 10, USD: 50000 } },
  { id: "2", balances: { GOOGLE: 10, USD: 50000 } },
];

export const bids: Order[] = [];
export const asks: Order[] = [];
