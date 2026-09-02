/*
 * @lc app=leetcode.cn id=LCP 05 lang=javascript
 *
 * [LCP 05] 发 LeetCoin
 */

// @lc code=start
const MOD = 1000000007;

/**
 * Two Fenwick trees implement range-add + range-sum on a 1-indexed array.
 * Standard trick: maintain BIT1 (diff) and BIT2 (diff * (i-1)); sum(1..x)
 * = x*query(BIT1,x) - query(BIT2,x).
 */
function Fenwick(n) {
  const tree = new Array(n + 2).fill(0);
  return {
    add(i, v) {
      for (; i <= n; i += i & (-i)) tree[i] += v;
    },
    sum(i) {
      let s = 0;
      for (; i > 0; i -= i & (-i)) s += tree[i];
      return s;
    },
  };
}

/**
 * @param {number} n
 * @param {number[][]} leadership
 * @param {number[][]} operations
 * @return {number[]}
 */
var bonus = function(n, leadership, operations) {
  // build children from leadership (b reports to a)
  const children = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of leadership) children[a].push(b);

  // Euler tour: subtree of u = contiguous [tin[u], tout[u]]
  const tin = new Array(n + 1);
  const tout = new Array(n + 1);
  let timer = 0;
  const stack = [[1, 0]]; // [node, childIndex]
  tin[1] = ++timer;
  // iterative DFS
  while (stack.length) {
    const top = stack[stack.length - 1];
    const u = top[0];
    if (top[1] < children[u].length) {
      const v = children[u][top[1]++];
      tin[v] = ++timer;
      stack.push([v, 0]);
    } else {
      tout[u] = timer;
      stack.pop();
    }
  }

  const bit1 = Fenwick(n);
  const bit2 = Fenwick(n);

  const rangeAdd = (l, r, v) => {
    if (l > r) return;
    bit1.add(l, v); bit1.add(r + 1, -v);
    bit2.add(l, v * (l - 1)); bit2.add(r + 1, -v * r);
  };
  const prefixSum = (x) => x * bit1.sum(x) - bit2.sum(x);
  const rangeSum = (l, r) => prefixSum(r) - prefixSum(l - 1);

  const ans = [];
  for (const op of operations) {
    const type = op[0], u = op[1];
    if (type === 1) {
      rangeAdd(tin[u], tin[u], op[2]);      // only member u
    } else if (type === 2) {
      rangeAdd(tin[u], tout[u], op[2]);     // u and all reports
    } else {
      ans.push(rangeSum(tin[u], tout[u]) % MOD);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// brute force reference (direct subtree walk per operation)
function brute(n, leadership, operations) {
  const children = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of leadership) children[a].push(b);
  const sub = (u, out) => { out.push(u); for (const c of children[u]) sub(c, out); };
  const subs = new Array(n + 1);
  for (let i = 1; i <= n; i++) { const arr = []; sub(i, arr); subs[i] = arr; }
  const val = new Array(n + 1).fill(0);
  const ans = [];
  for (const op of operations) {
    if (op[0] === 1) val[op[1]] += op[2];
    else if (op[0] === 2) for (const m of subs[op[1]]) val[m] += op[2];
    else { let s = 0; for (const m of subs[op[1]]) s += val[m]; ans.push(s % 1000000007); }
  }
  return ans;
}

// examples
assert.deepStrictEqual(bonus(6, [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]], [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]]), [650, 665]);

// hand checks
// single node tree
assert.deepStrictEqual(bonus(1, [], [[1, 1, 5], [3, 1]]), [5]);
assert.deepStrictEqual(bonus(1, [], [[2, 1, 7], [3, 1]]), [7]);
// chain 1-2-3: [2,1,10] -> all +10; [3,2] -> 2+3 =20; [1,3,4] -> member3 +4; [3,1] -> 1+2+3 =10+10+14=34
assert.deepStrictEqual(bonus(3, [[1, 2], [2, 3]], [[2, 1, 10], [3, 2], [1, 3, 4], [3, 1]]), [20, 34]);
// subtree add then query a leaf: leaf should include its own share
assert.deepStrictEqual(bonus(2, [[1, 2]], [[2, 1, 3], [3, 2]]), [3]);
// big mod check: values grow; ensure exact arithmetic not overflowing
assert.deepStrictEqual(bonus(2, [[1, 2]], [[2, 1, 1000000006], [3, 1]]), [2000000012 % 1000000007]);

// randomized cross-check vs brute
let seed = 5001;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 500; t++) {
  const n = 1 + Math.floor(rnd() * 9);
  const leadership = [];
  for (let i = 2; i <= n; i++) leadership.push([1 + Math.floor(rnd() * (i - 1)), i]); // random tree parent < child
  const ops = [];
  const Q = 1 + Math.floor(rnd() * 15);
  for (let q = 0; q < Q; q++) {
    const type = 1 + Math.floor(rnd() * 3);
    const u = 1 + Math.floor(rnd() * n);
    if (type === 3) ops.push([3, u]);
    else ops.push([type, u, 1 + Math.floor(rnd() * 30)]);
  }
  const got = bonus(n, leadership, ops);
  const exp = brute(n, leadership, ops);
  assert.deepStrictEqual(got, exp, `mismatch n=${n} leadership=${JSON.stringify(leadership)} ops=${JSON.stringify(ops)}`);
}

console.log('All tests passed!');
console.log('ex1 =', JSON.stringify(bonus(6, [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]], [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]])));
