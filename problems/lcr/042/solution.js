/*
 * @lc app=leetcode.cn id=LCR 042 lang=javascript
 *
 * [LCR 042] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
  this.requests = [];
  this.head = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // 移除所有超出窗口 [t-3000, t] 的过期请求
  while (this.head < this.requests.length && this.requests[this.head] < t - 3000) {
    this.head++;
  }
  this.requests.push(t);
  return this.requests.length - this.head;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

// TEST:
(function() {
  // 示例
  const r1 = new RecentCounter();
  console.assert(r1.ping(1) === 1, 'ping(1) = 1');
  console.assert(r1.ping(100) === 2, 'ping(100) = 2');
  console.assert(r1.ping(3001) === 3, 'ping(3001) = 3');
  console.assert(r1.ping(3002) === 3, 'ping(3002) = 3');

  // 间隔 3001:每个请求都超出窗口被清出,窗口始终只有 1 个
  const r2 = new RecentCounter();
  for (let i = 0; i < 100; i++) {
    console.assert(r2.ping(i * 3001) === 1, `ping(${i * 3001}) = 1`);
  }

  // 混合场景:手动验证窗口数量
  const r3 = new RecentCounter();
  console.assert(r3.ping(100) === 1, 'r3 ping(100) = 1');
  console.assert(r3.ping(200) === 2, 'r3 ping(200) = 2');
  console.assert(r3.ping(4000) === 1, 'r3 ping(4000) = 1'); // 100,200 均过期
  console.log('RecentCounter tests passed');
})();
