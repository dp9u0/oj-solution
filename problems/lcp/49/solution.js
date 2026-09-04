/*
 * @lc app=leetcode.cn id=LCP 49 lang=javascript
 *
 * [LCP 49] 环形闯关游戏
 */

// @lc code=start
/**
 * 环形 N 个关卡, 初始任选一个开启; 每次可挑战"开启且 challenge<=当前积分"的关卡,
 * 挑战后 积分 |= challenge[i], 并开启其左右相邻关卡。求最小初始积分使得可挑战完全部关卡。
 *
 * 思路(逐位贪心 + 区间扩张判定):
 *  - 不能直接二分初始积分(判定并不单调, 见题解反例), 改为从高到低逐位确定答案的二进制位。
 *  - 判定 solve(val): 初始积分恰为 val 时能否通关。
 *      把所有关卡按 challenge 降序作为候选起点(起点需 challenge<=val 才有意义)。
 *      从候选起点 src 出发, 用 key=当前已吃关卡积分的 OR 向两侧扩张区间 [s,t]:
 *        若能吃下左邻 prev(s) 或右邻 next(t)(其 challenge<=key) 则吃掉并 key|=其值,
 *        直到区间包住整个环(next(t)==s) => 通关 true; 吃不动则换下一个起点。
 *      用 visited 跳过已访问关卡, 多个起点分别尝试。
 *  - 逐位: ret 从高到低, 试探"当前位为 0、更高位沿用 ret"的最大值 cand=(ret|bit)-1,
 *      若 solve(cand) 为假说明去掉该位不够(必须保留), 置 ret 该位为 1。最终 ret 即最小积分。
 *
 * challenge<=1e14(<2^47), 用 BigInt 安全(题目签名即 BigInt)。
 * 复杂度: 位次数(<=62) × 判定(近似线性于 n)。
 *
 * @param {BigInt[]} challenge
 * @return {BigInt}
 */
var ringGame = function(challenge) {
  const n = challenge.length;
  const a = challenge;

  const prev = (p) => (p === 0 ? n - 1 : p - 1);
  const next = (p) => (p === n - 1 ? 0 : p + 1);

  // 候选起点按 challenge 从大到小排序
  const order = Array.from({ length: n }, (_, idx) => idx)
    .sort((x, y) => (a[x] < a[y] ? 1 : a[x] > a[y] ? -1 : 0));

  // 初始积分恰为 val 能否通关
  const solve = (val) => {
    const visited = new Array(n).fill(false);
    for (const src of order) {
      if (val < a[src] || visited[src]) continue;
      let key = val | a[src];
      visited[src] = true;
      let s = src;
      let t = src;
      // 从 src 向两侧扩张: 优先向左吃再向右吃, 任一能吃即扩
      for (;;) {
        if (next(t) === s) return true;          // 区间已包住整个环
        if (key >= a[prev(s)]) {
          s = prev(s);
          key |= a[s];
          visited[s] = true;
        } else if (key >= a[next(t)]) {
          t = next(t);
          key |= a[t];
          visited[t] = true;
        } else {
          break;                                 // 两侧都吃不动
        }
      }
    }
    return false;
  };

  let ret = 0n;
  // 答案一定 <= 全部关卡挑战值的 OR(初始积分=orAll 时可直接挑战任何关卡),
  // 因此只需要从 orAll 的最高位向下试探, 高于它的位必然不会被置 1。
  let orAll = 0n;
  for (const v of a) orAll |= v;
  const topBit = orAll.toString(2).length - 1;
  for (let i = topBit; i >= 0; i--) {
    const bit = 1n << BigInt(i);
    if (!solve((ret | bit) - 1n)) ret |= bit;
  }
  return ret;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 官方示例
assert.strictEqual(ringGame([5n, 4n, 6n, 2n, 7n]), 4n);
assert.strictEqual(ringGame([12n, 7n, 11n, 3n, 9n]), 8n);
assert.strictEqual(ringGame([1n, 1n, 1n]), 1n);

// 边界: 单关卡
assert.strictEqual(ringGame([100n]), 100n);
assert.strictEqual(ringGame([1n]), 1n);
// 两关卡 (值由暴力对拍确认)
assert.strictEqual(ringGame([5n, 3n]), 4n);
assert.strictEqual(ringGame([10n, 1n]), 10n);
assert.strictEqual(ringGame([1n, 2n]), 2n);
assert.strictEqual(ringGame([7n, 8n]), 8n);
// 递增需求
assert.strictEqual(ringGame([1n, 2n, 3n, 4n]), 4n);
assert.strictEqual(ringGame([1n, 1n]), 1n);
assert.strictEqual(ringGame([3n, 5n, 2n]), 4n);

// ---- 暴力 DFS 对拍(小环) ----
function bruteMin(a) {
  const n = a.length;
  const next = (p) => (p === n - 1 ? 0 : p + 1);
  const prev = (p) => (p === 0 ? n - 1 : p - 1);
  const FULL = (1 << n) - 1;
  function canFinish(x) {
    const memo = new Map();
    function dfs(mask, score) {
      if (mask === FULL) return true;
      const k = mask + ',' + score;
      if (memo.has(k)) return memo.get(k);
      const open = [];
      if (mask === 0) { for (let i = 0; i < n; i++) open.push(i); }
      else { for (let i = 0; i < n; i++) { if (mask & (1 << i)) continue; if ((mask & (1 << prev(i))) || (mask & (1 << next(i)))) open.push(i); } }
      for (const i of open) { if (score >= a[i] && dfs(mask | (1 << i), score | a[i])) { memo.set(k, true); return true; } }
      memo.set(k, false); return false;
    }
    return dfs(0, x);
  }
  let orAll = 0n;
  for (const v of a) orAll |= v;
  for (let x = 1n; x <= orAll; x++) if (canFinish(x)) return x;
  return orAll;
}
for (let t = 0; t < 300; t++) {
  const n = 1 + Math.floor(Math.random() * 5);
  const arr = Array.from({ length: n }, () => BigInt(1 + Math.floor(Math.random() * 16)));
  assert.strictEqual(ringGame(arr), bruteMin(arr), `mismatch on [${arr}]`);
}

console.log('All tests passed!');
