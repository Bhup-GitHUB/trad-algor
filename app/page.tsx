import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Trading Algorithm Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A real-time trading platform built with Next.js that implements a basic order matching engine for algorithmic trading.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/documentation" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              View API Documentation
            </Link>
            <Link 
              href="/api/quote" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Test API
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Market Data</h3>
              <p className="text-gray-600 mb-4">
                Get real-time quotes and order book depth for informed trading decisions.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Current bid/ask prices</p>
                <p>• Order book depth</p>
                <p>• Real-time updates</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Trading Engine</h3>
              <p className="text-gray-600 mb-4">
                Advanced order matching with price-time priority and automatic balance updates.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Bid/Ask order placement</p>
                <p>• Automatic order matching</p>
                <p>• Balance management</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">RESTful API</h3>
              <p className="text-gray-600 mb-4">
                Clean, well-documented API endpoints for seamless integration.
              </p>
              <div className="text-sm text-gray-500">
                <p>• OpenAPI 3.0 specification</p>
                <p>• Interactive documentation</p>
                <p>• TypeScript support</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quick Start</h2>
            <div className="text-left">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">1. Get Market Quotes</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  GET /api/quote
                </code>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">2. Place an Order</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  POST /api/order
                </code>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">3. Check Balance</h3>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  GET /api/balance?userId=1
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
