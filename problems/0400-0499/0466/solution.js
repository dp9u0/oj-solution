/*
 * @lc app=leetcode id=466 lang=javascript
 *
 * [466] Count The Repetitions
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  const len2 = s2.length;
  if (n1 === 0 || len2 === 0) return 0;

  // 逐块扫描 s1：index 为当前匹配到 s2 的下标，count 为 s2 完整匹配次数
  let index = 0, count = 0;
  // 记录每块扫描结束时的状态：index -> { block: 块号, count }
  const recall = new Map();

  for (let i = 1; i <= n1; i++) {
    for (const c of s1) {
      if (c === s2[index]) {
        if (++index === len2) {
          index = 0;
          count++;
        }
      }
    }
    // 状态 (index) 重复 => 找到循环节，可以直接跳跃
    if (recall.has(index)) {
      const { block, count: prevCount } = recall.get(index);
      const cycleLen = i - block;        // 周期：多少块 s1
      const cycleCount = count - prevCount; // 每周期 s2 完整匹配次数
      const remaining = n1 - i;
      const fullCycles = Math.floor(remaining / cycleLen);
      count += fullCycles * cycleCount;
      // 剩余不足一个周期的部分，逐块模拟
      let leftover = remaining % cycleLen;
      while (leftover-- > 0) {
        for (const c of s1) {
          if (c === s2[index]) {
            if (++index === len2) {
              index = 0;
              count++;
            }
          }
        }
      }
      return Math.floor(count / n2);
    }
    recall.set(index, { block: i, count });
  }
  return Math.floor(count / n2);
};
// @lc code=end

// TEST:
console.log(getMaxRepetitions("acb", 4, "ab", 2) === 2);   // 示例 1
console.log(getMaxRepetitions("acb", 1, "acb", 1) === 1);  // 示例 2
console.log(getMaxRepetitions("aaa", 3, "aa", 1) === 4);   // 多次完整匹配
console.log(getMaxRepetitions("abc", 1, "xyz", 1) === 0);  // 完全无法匹配
console.log(getMaxRepetitions("ab", 1000000, "ab", 1000000) === 1); // 大 n1/n2 循环优化
console.log(getMaxRepetitions("abcdefghijklmnopqrst", 1000000, "zyxwvutsrqponmlkjihgfedcba", 1000000) === 0); // 大输入无匹配
console.log(getMaxRepetitions("aaa", 20, "aaaa", 5) === 3); // 60 个 a 贪心匹配 "aaaa" 共 15 次，15/5=3
