/*
 * @lc app=leetcode id=3980 lang=javascript
 *
 * [3980] Minimum Operations to Transform Binary String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minOperations = function (s1, s2) {
  const n = s1.length;
  const INF = Infinity;

  // dp0: 位置 i 未被左边的操作 2 影响（当前值 = s1[i]）的最小代价
  // dp1: 位置 i 已被作用在 (i-1, i) 上的操作 2 置 '0' 的最小代价
  let dp0 = 0;
  let dp1 = INF;

  for (let i = 0; i < n; i++) {
    const t = s2.charCodeAt(i) - 48; // 目标值
    const nextIsOne = s1.charCodeAt(i + 1) === 49; // s1[i+1] 是否为 '1'（越界时 charCodeAt 返回 NaN）
    let ndp0 = INF;
    let ndp1 = INF;

    // 两种来源：dp0（cur = s1[i]）与 dp1（cur = 0）
    for (const [dp, cur] of [[dp0, s1.charCodeAt(i) - 48], [dp1, 0]]) {
      if (dp === INF) continue;

      // 转移 1：不使用涉及 (i, i+1) 的操作 2
      if (cur === t) {
        ndp0 = Math.min(ndp0, dp);
      } else if (cur === 0) {
        // cur == 0 且 t == 1：一次操作 1 补成 '1'
        ndp0 = Math.min(ndp0, dp + 1);
      }
      // cur == 1 且 t == 0：单点无法把 '1' 变 '0'，只能走转移 2

      // 转移 2：对 (i, i+1) 使用操作 2（需要 i+1 存在）
      if (i + 1 < n) {
        // 执行前两位都得是 '1'：cur==0 先补 i，s1[i+1]=='0' 先补 i+1；
        // 执行后两位都变 '0'：t==1 时还要再补一次 i
        const cost = (cur === 0 ? 1 : 0) + (nextIsOne ? 0 : 1) + 1 + (t === 1 ? 1 : 0);
        ndp1 = Math.min(ndp1, dp + cost);
      }
    }
    dp0 = ndp0;
    dp1 = ndp1;
  }

  // 末位不可能再被操作 2 影响，dp1 此时必为 INF
  return Math.min(dp0, dp1) === INF ? -1 : Math.min(dp0, dp1);
};
// @lc code=end

// TEST:
const assertEquals = (actual, expected, label) => {
  const ok = actual === expected;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${label}: got ${actual}, expect ${expected}`);
  return ok;
};

assertEquals(minOperations('11', '00'), 1, '示例1: 11 -> 00');
assertEquals(minOperations('01', '10'), 3, '示例2: 01 -> 10');
assertEquals(minOperations('1', '0'), -1, '示例3: 1 -> 0（无法做到）');
assertEquals(minOperations('1', '1'), 0, 'n=1 已相等');
assertEquals(minOperations('0', '1'), 1, 'n=1 单点补 1');
assertEquals(minOperations('0', '0'), 0, '全 0 相等');
assertEquals(minOperations('111', '000'), 3, '111 -> 000（B+A+B 链）');
assertEquals(minOperations('110', '000'), 1, '110 -> 000（一次操作 2）');
assertEquals(minOperations('1100', '0011'), 3, '1100 -> 0011（B+2A）');
assertEquals(minOperations('10', '10'), 0, '10 相等');
assertEquals(minOperations('10', '00'), 2, '10 -> 00（尾部补 1 再 B）');
assertEquals(minOperations('11', '10'), 2, '11 -> 10（B 后补回首位的 1）');
assertEquals(minOperations('00', '11'), 2, '00 -> 11（两次操作 1）');
assertEquals(minOperations('100', '000'), 2, '100 -> 000（A+B）');
assertEquals(minOperations('01', '00'), 2, '01 -> 00（末位只能靠左侧 B 顺带清零）');
