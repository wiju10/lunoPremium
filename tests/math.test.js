import { add } from '../lib/math'

test("Returns the correct sum value", () => {
  expect(add(1, 2, 3, 4, 5)).toBe(15);
});

import { convertCoinXR } from '../lib/utils';

test("Returns converted coin price in selected currency"
  , async () => {
      expect (await convertCoinXR(8, 2)).toBe(4);
  })

import { priceDiff } from '../lib/utils';

test("Returns price diff of 2 coins", async () => {
  expect (await priceDiff(10, 2)).toBe(8);
})