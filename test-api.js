// Simple API test script
const BASE_URL = 'http://localhost:3000';

async function testAPI() {
  console.log('🧪 Testing Trading Algorithm API...\n');

  try {
    // Test 1: Get quotes
    console.log('1. Testing GET /api/quote...');
    const quoteResponse = await fetch(`${BASE_URL}/api/quote`);
    const quoteData = await quoteResponse.json();
    console.log('✅ Quote response:', quoteData);

    // Test 2: Get depth
    console.log('\n2. Testing GET /api/depth...');
    const depthResponse = await fetch(`${BASE_URL}/api/depth`);
    const depthData = await depthResponse.json();
    console.log('✅ Depth response:', depthData);

    // Test 3: Get balance
    console.log('\n3. Testing GET /api/balance?userId=1...');
    const balanceResponse = await fetch(`${BASE_URL}/api/balance?userId=1`);
    const balanceData = await balanceResponse.json();
    console.log('✅ Balance response:', balanceData);

    // Test 4: Place a bid order
    console.log('\n4. Testing POST /api/order (bid)...');
    const orderResponse = await fetch(`${BASE_URL}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        side: 'bid',
        price: 150.50,
        quantity: 100,
        userId: '1'
      })
    });
    const orderData = await orderResponse.json();
    console.log('✅ Order response:', orderData);

    // Test 5: Place an ask order
    console.log('\n5. Testing POST /api/order (ask)...');
    const askResponse = await fetch(`${BASE_URL}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        side: 'ask',
        price: 151.00,
        quantity: 50,
        userId: '2'
      })
    });
    const askData = await askResponse.json();
    console.log('✅ Ask order response:', askData);

    // Test 6: Check updated quotes
    console.log('\n6. Testing GET /api/quote (after orders)...');
    const updatedQuoteResponse = await fetch(`${BASE_URL}/api/quote`);
    const updatedQuoteData = await updatedQuoteResponse.json();
    console.log('✅ Updated quote response:', updatedQuoteData);

    console.log('\n🎉 All API tests completed successfully!');
    console.log('\n📚 You can view the interactive API documentation at:');
    console.log('   http://localhost:3000/documentation');

  } catch (error) {
    console.error('❌ API test failed:', error.message);
  }
}

// Run the tests
testAPI(); 