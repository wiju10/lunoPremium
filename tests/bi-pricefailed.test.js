import { getBTCBUSD } from '../lib/binance.js'

//mock as empty object
jest.mock('node-binance-api', () => {
  return class Binance {
    prices() {
      return { }
    }
  }
})

test("Returns Message for Failed Binance Response", async () => {
  expect(await getBTCBUSD()).toBe(NaN);
});