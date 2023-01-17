import { getLunoMyrPrice } from '../lib/luno.js'

test("Returns Message for Failed Luno Response", async () => {
  const MOCK_STATUS_CODE = 500

// we're modifying the fetch method to return these values
  global.fetch = jest.fn(() => Promise.resolve({
    status: MOCK_STATUS_CODE,
    json: () => { }
}));

  expect(await getLunoMyrPrice()).toBe("Failed to retrieve price");
});

test("Returns the BTC Price if successful", async () => {
  const MOCK_PRICE = 99

  global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ last_trade: MOCK_PRICE })
  }));
// End mocking the fetch method
  expect(await getLunoMyrPrice()).toBe(MOCK_PRICE);
});