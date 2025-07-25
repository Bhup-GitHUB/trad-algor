export interface Balance {
  [key: string]: number;
}

export interface Order {
  userID: string;
  prince: number;
  quantity: number;
}

export interface User {
  id: string;
  balance: Balance;
}
