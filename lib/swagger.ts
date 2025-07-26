import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Trading Algorithm API',
      version: '1.0.0',
      description: 'A RESTful API for algorithmic trading with order matching engine',
      contact: {
        name: 'API Support',
        email: 'support@trad-algo.com'
      }
    },
    servers: [
      {
        url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
        description: process.env.VERCEL_URL ? 'Production server' : 'Development server'
      }
    ],
    components: {
      schemas: {
        Order: {
          type: 'object',
          properties: {
            side: {
              type: 'string',
              enum: ['bid', 'ask'],
              description: 'Order side - bid (buy) or ask (sell)'
            },
            price: {
              type: 'number',
              description: 'Order price'
            },
            quantity: {
              type: 'number',
              description: 'Order quantity'
            },
            userId: {
              type: 'string',
              description: 'User ID placing the order'
            }
          },
          required: ['side', 'price', 'quantity', 'userId']
        },
        Quote: {
          type: 'object',
          properties: {
            bestBid: {
              type: 'number',
              nullable: true,
              description: 'Best bid price'
            },
            bestAsk: {
              type: 'number',
              nullable: true,
              description: 'Best ask price'
            }
          }
        },
        Depth: {
          type: 'object',
          properties: {
            depth: {
              type: 'object',
              additionalProperties: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['bid', 'ask']
                  },
                  quantity: {
                    type: 'number'
                  }
                }
              }
            }
          }
        },
        Balance: {
          type: 'object',
          properties: {
            balances: {
              type: 'object',
              properties: {
                GOOGLE: {
                  type: 'number',
                  description: 'GOOGLE stock quantity'
                },
                USD: {
                  type: 'number',
                  description: 'USD balance'
                }
              }
            }
          }
        },
        OrderResponse: {
          type: 'object',
          properties: {
            filledQuantity: {
              type: 'number',
              description: 'Quantity that was filled immediately'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message'
            }
          }
        }
      }
    }
  },
  apis: ['./app/api/**/*.ts'], // Path to the API docs
};

export const specs = swaggerJsdoc(options); 