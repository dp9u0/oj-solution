/*
 * @lc app=leetcode.cn id=LCR 114 lang=javascript
 *
 * [LCR 114] 火星词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  // 收集所有出现的字母,并用邻接表 + 入度建图
  const graph = new Map(); // char -> Set(后继)
  const indegree = new Map(); // char -> 入度

  for (const w of words) {
    for (const c of w) {
      if (!graph.has(c)) graph.set(c, new Set());
      if (!indegree.has(c)) indegree.set(c, 0);
    }
  }

  // 相邻单词比较,第一个不同字母处建立依赖关系
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    // 若 w2 是 w1 的前缀且 w1 更长,顺序矛盾
    if (w1.length > w2.length && w1.slice(0, w2.length) === w2) {
      return "";
    }
    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        if (!graph.get(w1[j]).has(w2[j])) {
          graph.get(w1[j]).add(w2[j]);
          indegree.set(w2[j], indegree.get(w2[j]) + 1);
        }
        break;
      }
    }
  }

  // 小顶堆:用数组模拟,保证弹出最小字母(按字母递增顺序输出)
  const heap = [];
  const push = (c) => {
    heap.push(c);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      const n = heap.length;
      while (true) {
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let min = i;
        if (l < n && heap[l] < heap[min]) min = l;
        if (r < n && heap[r] < heap[min]) min = r;
        if (min === i) break;
        [heap[i], heap[min]] = [heap[min], heap[i]];
        i = min;
      }
    }
    return top;
  };

  for (const [c, d] of indegree) {
    if (d === 0) push(c);
  }

  let result = "";
  while (heap.length > 0) {
    const c = pop();
    result += c;
    for (const next of graph.get(c)) {
      indegree.set(next, indegree.get(next) - 1);
      if (indegree.get(next) === 0) push(next);
    }
  }

  return result.length === indegree.size ? result : "";
};
// @lc code=end

// TEST:
const tests = [
  { words: ["wrt", "wrf", "er", "ett", "rftt"], expected: "wertf" },
  { words: ["z", "x"], expected: "zx" },
  { words: ["z", "x", "z"], expected: "" },
  { words: ["ab", "adc"], expected: "abcd" },
  { words: ["abc", "ab"], expected: "" },
  { words: ["a", "a"], expected: "a" },
  { words: ["zy", "zx"], expected: "yxz" },
  { words: ["baa", "abcd", "abca", "cab", "cad"], expected: "bdac" },
  { words: ["aac", "aabb", "aaba"], expected: "cba" },
];
tests.forEach(({ words, expected }, idx) => {
  const got = alienOrder(words);
  const ok = got === expected;
  console.log(`test ${idx + 1}:`, ok ? "PASS" : "FAIL", `got=${got} expected=${expected}`);
});
