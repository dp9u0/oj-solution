/*
 * @lc app=leetcode.cn id=LCP 32 lang=javascript
 *
 * [LCP 32] 批量处理任务
 */

// @lc code=start
/**
 * 每个任务 [start, end, period] 需要在闭区间 [start, end] 内被选中 period 个时刻。
 * 被选中的时刻可被多个任务共享，求最少选中的总时刻数。
 *
 * 贪心：把任务按 end 升序处理；处理到某任务时，若其区间内已选点数 < period，
 * 则从最右端（end 附近）向左补足——右端点覆盖更多"后续"任务的区间，尽可能共享。
 *
 * 实现要点（坐标达 1e9，需离散化）：
 *  1. 收集所有 start 与 end+1（半开区间边界），排序去重后相邻边界形成若干原子段
 *     [uni[k], uni[k+1]-1]。一个任务完全覆盖从 lowerBound(start) 到 idx(end+1)-1 的段。
 *  2. 段内所有整数等价：只需记录每段被选中的点数，一段选满即跳过。
 *  3. BIT 维护每段已选点数前缀和，用于快速统计某任务区间内已选点数。
 *  4. DSU（并查集"向右压缩"）维护"最右仍未选满的段"，补点时从右往左跳过已满段。
 *
 * 复杂度：O(N log N) 时间，O(N) 空间（N = tasks.length ≤ 1e5）。
 *
 * @param {number[][]} tasks
 * @return {number}
 */
var processTasks = function(tasks) {
  // ---- 坐标收集与去重 ----
  const coords = [];
  for (const [s, e] of tasks) { coords.push(s); coords.push(e + 1); }
  coords.sort((a, b) => a - b);
  const uni = [];
  for (const c of coords) if (uni.length === 0 || uni[uni.length - 1] !== c) uni.push(c);
  const K = uni.length - 1; // 原子段数
  const segLen = new Array(K);
  for (let k = 0; k < K; k++) segLen[k] = uni[k + 1] - uni[k];

  // ---- BIT ----
  const bitN = K;
  const bit = new Array(bitN + 1).fill(0);
  const bitAdd = (i, d) => { for (; i <= bitN; i += i & -i) bit[i] += d; };
  const bitSum = (i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  const bitRange = (l, r) => (l > r ? 0 : bitSum(r) - bitSum(l - 1));

  // ---- DSU：段已选满则并到左边 ----
  const fullPar = new Array(K + 1);
  for (let i = 0; i <= K; i++) fullPar[i] = i;
  const findFree = (x) => {
    let r = x;
    while (fullPar[r] !== r) { fullPar[r] = fullPar[fullPar[r]]; r = fullPar[r]; }
    return r;
  };
  const markFull = (idx) => { fullPar[idx] = findFree(idx - 1); };

  // ---- 离散化 lowerBound ----
  const lowerBound = (v) => {
    let L = 0, R = uni.length;
    while (L < R) { const mid = (L + R) >> 1; if (uni[mid] >= v) R = mid; else L = mid + 1; }
    return L;
  };

  const sorted = tasks.slice().sort((a, b) => a[1] - b[1]);
  const chosen = new Array(K).fill(0); // 每段已选点数
  let ans = 0;

  for (const [s, e, p] of sorted) {
    const L = lowerBound(s);            // 第一个 uni >= s 的段起点
    const Rseg = lowerBound(e + 1) - 1; // 最后一个完全位于区间内的段
    const have = bitRange(L + 1, Rseg + 1);
    let need = p - have;
    while (need > 0) {
      const idx1 = findFree(Rseg + 1); // 最右仍未选满的段（1-based）
      const k = idx1 - 1;
      const take = Math.min(need, segLen[k] - chosen[k]);
      chosen[k] += take;
      bitAdd(idx1, take);
      need -= take;
      ans += take;
      if (chosen[k] >= segLen[k]) markFull(idx1);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例 1
assert.strictEqual(processTasks([[1, 3, 2], [2, 5, 3], [5, 6, 2]]), 4);
// 示例 2
assert.strictEqual(processTasks([[2, 3, 1], [5, 5, 1], [5, 6, 2]]), 3);
// 重复区间
assert.strictEqual(processTasks([[1, 5, 5], [1, 5, 5]]), 5);
// 单任务：period 全在区间内
assert.strictEqual(processTasks([[3, 8, 6]]), 6);
// 区间巨大（坐标 1e9）但只用少量点
assert.strictEqual(processTasks([[0, 1000000000, 5], [0, 1000000000, 7]]), 7);

// ---- 朴素贪心（小坐标，任意整数点）对拍 ----
function naive(tasks) {
  const arr = tasks.slice().sort((a, b) => a[1] - b[1]);
  const chosen = new Set();
  for (const [s, e, p] of arr) {
    let cnt = 0;
    for (const x of chosen) if (x >= s && x <= e) cnt++;
    let need = p - cnt;
    for (let x = e; need > 0 && x >= s; x--) if (!chosen.has(x)) { chosen.add(x); need--; }
    assert.ok(need <= 0, 'infeasible ' + JSON.stringify([s, e, p]));
  }
  return chosen.size;
}
let seed = 20260903;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
for (let t = 0; t < 3000; t++) {
  const m = ri(1, 10);
  const tasks = [];
  const MAXC = 18;
  for (let i = 0; i < m; i++) {
    const s = ri(0, MAXC), e = ri(s, MAXC);
    tasks.push([s, e, ri(1, e - s + 1)]);
  }
  assert.strictEqual(processTasks(tasks), naive(tasks), 'mismatch ' + JSON.stringify(tasks));
}

console.log('All tests passed!');
console.log('ex1 =', processTasks([[1, 3, 2], [2, 5, 3], [5, 6, 2]]));
console.log('ex2 =', processTasks([[2, 3, 1], [5, 5, 1], [5, 6, 2]]));
console.log('big =', processTasks([[0, 1000000000, 5], [0, 1000000000, 7]]));
