# Trading Algorithm Platform

A real-time trading platform built with Next.js that implements a basic order matching engine for algorithmic trading. This project provides a RESTful API for managing orders, retrieving market data, and handling user balances.

## 🚀 Features

- **Real-time Order Matching**: Implements a basic order book with bid/ask matching
- **Market Data API**: Get current quotes and order book depth
- **User Balance Management**: Track user balances for different assets
- **RESTful API**: Clean API endpoints for trading operations
- **TypeScript**: Full TypeScript support for type safety
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Bhup-GitHUB/trad-algor
cd trad-algo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
trad-algo/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── balance/       # User balance endpoints
│   │   ├── depth/         # Order book depth
│   │   ├── order/         # Order management
│   │   └── quote/         # Market quotes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility functions and types
│   ├── store.ts           # In-memory data store
│   ├── types.ts           # TypeScript interfaces
│   └── utils.ts           # Trading logic utilities
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🔌 API Endpoints

### Market Data

#### GET `/api/quote`
Get the best bid and ask prices.

**Response:**
```json
{
  "bestBid": 150.50,
  "bestAsk": 151.00
}
```

#### GET `/api/depth`
Get the complete order book depth.

**Response:**
```json
{
  "depth": {
    "150.50": { "type": "bid", "quantity": 100 },
    "151.00": { "type": "ask", "quantity": 50 }
  }
}
```

### Trading Operations

#### POST `/api/order`
Place a new order (bid or ask).

**Request Body:**
```json
{
  "side": "bid",        // "bid" or "ask"
  "price": 150.50,
  "quantity": 100,
  "userId": "1"
}
```

**Response:**
```json
{
  "filledQuantity": 50
}
```

### User Management

#### GET `/api/balance`
Get user balance (currently returns dummy data for user "1").

**Response:**
```json
{
  "balances": {
    "GOOGLE": 10,
    "USD": 50000
  }
}
```

## 📊 Trading Logic

The platform implements a basic order matching engine:

1. **Order Matching**: When a new order is placed, it's matched against existing orders in the opposite side
2. **Price-Time Priority**: Orders are matched based on best price first, then by time
3. **Partial Fills**: Orders can be partially filled if there's insufficient liquidity
4. **Balance Updates**: User balances are automatically updated when trades are executed

### Order Types

- **Bid**: Buy orders - matched against existing ask orders
- **Ask**: Sell orders - matched against existing bid orders

## 🛡️ Error Handling

The API includes proper error handling for:
- Invalid order parameters
- Insufficient balances
- User not found scenarios

## 🧪 Testing

Run the linter to check code quality:
```bash
npm run lint
```

## 🚀 Deployment

Build the application for production:
```bash
npm run build
npm start
```

## 📚 Documentation

Interactive API documentation is available at `/documentation` when the server is running.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

