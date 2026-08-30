/*
 * @lc app=leetcode id=488 lang=javascript
 *
 * [488] Zuma Game
 */

// @lc code=start
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  // 循环消除所有连续 3 个及以上的同色段（级联消除）
  const clean = (s) => {
    let prev;
    do {
      prev = s;
      s = s.replace(/(.)\1{2,}/g, '');
    } while (s !== prev);
    return s;
  };

  const memo = new Map();

  // 返回清空棋盘所需的最少插入次数，无法清空返回 -1
  const dfs = (b, h) => {
    if (b.length === 0) return 0;
    const key = b + '#' + h;
    if (memo.has(key)) return memo.get(key);

    // 可行性剪枝：板上出现的每种颜色，总数（板+手）必须 >= 3 才可能被消除
    const count = {};
    for (const c of b) count[c] = (count[c] || 0) + 1;
    for (const c of h) if (count[c]) count[c]++;
    for (const c in count) {
      if (count[c] < 3) {
        memo.set(key, -1);
        return -1;
      }
    }

    let best = Infinity;
    for (let i = 0; i < h.length; i++) {
      if (i > 0 && h[i] === h[i - 1]) continue; // 同色球只尝试一次
      const ball = h[i];
      const rest = h.slice(0, i) + h.slice(i + 1);
      for (let pos = 0; pos <= b.length; pos++) {
        // 位置剪枝：只插在同色球旁边，或插在两个相同的球之间（拆 run 制造后续合并）
        if (b[pos - 1] !== ball && b[pos] !== ball && b[pos - 1] !== b[pos]) continue;
        const sub = dfs(clean(b.slice(0, pos) + ball + b.slice(pos)), rest);
        if (sub !== -1) best = Math.min(best, sub + 1);
      }
    }

    const res = best === Infinity ? -1 : best;
    memo.set(key, res);
    return res;
  };

  return dfs(board, hand.split('').sort().join(''));
};
// @lc code=end

// TEST:
console.log(findMinStep('WRRBBW', 'RB')); // -1
console.log(findMinStep('WWRRBBWW', 'WRBRW')); // 2
console.log(findMinStep('G', 'GGGGG')); // 2
console.log(findMinStep('RRWWRRBBRR', 'WB')); // 2（经典陷阱：把 B 插进 RR 中间拆 run）
console.log(findMinStep('RBYYBBRRB', 'YBR')); // -1
console.log(findMinStep('RWYWRRWRRWWR', 'WWYR')); // -1
