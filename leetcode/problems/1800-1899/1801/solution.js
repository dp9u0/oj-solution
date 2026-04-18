/*
 * @lc app=leetcode id=1801 lang=javascript
 *
 * [1801] Number of Orders in the Backlog
 */

// @lc code=start
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
  const MOD = 1e9 + 7;
  // sellHeap: min-heap by price, buyHeap: max-heap by price
  // stored as [price, amount]
  const sellHeap = [[-1]]; // sentinel
  const buyHeap = [[Infinity]]; // sentinel

  const peekSell = () => sellHeap[1];
  const peekBuy = () => buyHeap[1];

  const siftUpSell = (i) => {
    while (i > 1 && sellHeap[i][0] < sellHeap[i >> 1][0]) {
      [sellHeap[i], sellHeap[i >> 1]] = [sellHeap[i >> 1], sellHeap[i]];
      i >>= 1;
    }
  };
  const siftDownSell = (i) => {
    const n = sellHeap.length;
    while (true) {
      let s = i, l = i << 1, r = l + 1;
      if (l < n && sellHeap[l][0] < sellHeap[s][0]) s = l;
      if (r < n && sellHeap[r][0] < sellHeap[s][0]) s = r;
      if (s === i) break;
      [sellHeap[i], sellHeap[s]] = [sellHeap[s], sellHeap[i]];
      i = s;
    }
  };
  const pushSell = (price, amount) => {
    sellHeap.push([price, amount]);
    siftUpSell(sellHeap.length - 1);
  };
  const popSell = () => {
    const top = sellHeap[1];
    sellHeap[1] = sellHeap[sellHeap.length - 1];
    sellHeap.pop();
    if (sellHeap.length > 1) siftDownSell(1);
    return top;
  };

  const siftUpBuy = (i) => {
    while (i > 1 && buyHeap[i][0] > buyHeap[i >> 1][0]) {
      [buyHeap[i], buyHeap[i >> 1]] = [buyHeap[i >> 1], buyHeap[i]];
      i >>= 1;
    }
  };
  const siftDownBuy = (i) => {
    const n = buyHeap.length;
    while (true) {
      let s = i, l = i << 1, r = l + 1;
      if (l < n && buyHeap[l][0] > buyHeap[s][0]) s = l;
      if (r < n && buyHeap[r][0] > buyHeap[s][0]) s = r;
      if (s === i) break;
      [buyHeap[i], buyHeap[s]] = [buyHeap[s], buyHeap[i]];
      i = s;
    }
  };
  const pushBuy = (price, amount) => {
    buyHeap.push([price, amount]);
    siftUpBuy(buyHeap.length - 1);
  };
  const popBuy = () => {
    const top = buyHeap[1];
    buyHeap[1] = buyHeap[buyHeap.length - 1];
    buyHeap.pop();
    if (buyHeap.length > 1) siftDownBuy(1);
    return top;
  };

  for (const [price, amount, type] of orders) {
    if (type === 0) {
      // buy: match with cheapest sell
      let rem = amount;
      while (rem > 0 && sellHeap.length > 1 && peekSell()[0] <= price) {
        const [sp, sa] = peekSell();
        if (sa <= rem) {
          rem -= sa;
          popSell();
        } else {
          sellHeap[1][1] -= rem;
          rem = 0;
        }
      }
      if (rem > 0) pushBuy(price, rem);
    } else {
      // sell: match with most expensive buy
      let rem = amount;
      while (rem > 0 && buyHeap.length > 1 && peekBuy()[0] >= price) {
        const [bp, ba] = peekBuy();
        if (ba <= rem) {
          rem -= ba;
          popBuy();
        } else {
          buyHeap[1][1] -= rem;
          rem = 0;
        }
      }
      if (rem > 0) pushSell(price, rem);
    }
  }

  let ans = 0;
  for (let i = 1; i < sellHeap.length; i++) ans = (ans + sellHeap[i][1]) % MOD;
  for (let i = 1; i < buyHeap.length; i++) ans = (ans + buyHeap[i][1]) % MOD;
  return ans;
};
// @lc code=end

// TEST:
console.log(getNumberOfBacklogOrders([[10,5,0],[15,2,1],[25,1,1],[30,4,0]])); // 6
console.log(getNumberOfBacklogOrders([[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]])); // 999999984
console.log(getNumberOfBacklogOrders([[1,1,0]])); // 1
console.log(getNumberOfBacklogOrders([[1,1,1]])); // 1
console.log(getNumberOfBacklogOrders([[10,5,0],[10,5,1]])); // 0
