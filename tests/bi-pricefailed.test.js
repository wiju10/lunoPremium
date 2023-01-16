import { getBTCBUSD } from '../lib/binance.js'

jest.mock('node-binance-api', () => {
  return class Binance {
    prices() {
      return new Promise(resolve => resolve("Failed to retrieve price"));
    }
  }
})

test("Returns Message for Failed Binance Response", async () => {
  expect(await getBTCBUSD()).toBe("Failed to retrieve price");
});