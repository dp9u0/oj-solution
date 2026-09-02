/*
 * @lc app=leetcode.cn id=LCR 109 lang=javascript
 *
 * [LCR 109] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  if (target === '0000') return 0;
  const visited = new Set(deadends);
  if (visited.has('0000')) return -1;

  const queue = ['0000'];
  visited.add('0000');
  let head = 0;
  let steps = 0;

  while (head < queue.length) {
    const size = queue.length;
    for (; head < size; head++) {
      const cur = queue[head];
      if (cur === target) return steps;
      // 逐位生成 8 个邻居
      for (let j = 0; j < 4; j++) {
        const digit = Number(cur[j]);
        for (const delta of [1, -1]) {
          const nextDigit = (digit + delta + 10) % 10;
          const next = cur.slice(0, j) + nextDigit + cur.slice(j + 1);
          if (!visited.has(next)) {
            if (next === target) return steps + 1;
            visited.add(next);
            queue.push(next);
          }
        }
      }
    }
    steps++;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(openLock(["0201","0101","0102","1212","2002"], "0202")); // 6
console.log(openLock(["8888"], "0009")); // 1
console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888")); // -1
console.log(openLock(["0000"], "8888")); // -1
console.log(openLock([], "1234")); // 10 (每位独立: 1+2+3+4)
console.log(openLock([], "0009")); // 1
console.log(openLock(["1000","0100","0010","0001","9000","0900","0090","0009"], "0000")); // 0 (target 即起点)
