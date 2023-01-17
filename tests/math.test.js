import { convertCoinXR } from '../lib/utils';

test("Returns converted coin price in selected currency"
  , async () => {
      expect (await convertCoinXR(8, 2)).toBe(4);
  })

import { priceDiff } from '../lib/utils';

test("Returns price diff of 2 coins", async () => {
  expect (await priceDiff(10, 2)).toBe(8);
})

import { calcPremium } from '../lib/utils';

test("Returns premium of 2 coins in %", async () => {
  expect (await calcPremium(10, 1)).toBe(`90.0000%`);
})