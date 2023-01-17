beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
});

test("Returns Message for Failed Binance Response", async () => {
  const getBTCBUSD = require('../lib/binance.js').getBTCBUSD
  //mock as empty object
  jest.mock('node-binance-api', () => {
    return class Binance {
      prices() {
        return { }
      }
    }
  })
  expect(await getBTCBUSD()).toBe(NaN);
});

test("Returns message for failed ticker price", async () => {
  //must require at the same level as the mocking
  const getBTCBUSD = require('../lib/binance.js').getBTCBUSD
  const MOCK_PRICE = 10
  const MOCK_FORMAT = { BTCBUSD: MOCK_PRICE }
  jest.mock('node-binance-api', () => {
    return class Binance {
      prices() {
        return (MOCK_FORMAT)
      }
    }
  })
  expect(await getBTCBUSD()).toBe(MOCK_PRICE);
})