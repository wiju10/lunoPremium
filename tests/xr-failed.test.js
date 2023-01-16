const MOCK_STATUS_CODE = 500

// we're modifying the fetch method to return these values
global.fetch = jest.fn(() => Promise.resolve({
  status: MOCK_STATUS_CODE,
  json: () => { }
}));

import { getUsdtoMyrRate } from '../lib/utils.js'

test("Returns Message for Failed Exchange rate Response", async () => {
  expect(await getUsdtoMyrRate()).toBe("Failed to retrieve exchange rate");
});