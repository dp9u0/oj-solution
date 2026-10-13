/*
 * @lc app=leetcode.cn id=4077 lang=javascript
 *
 * [4077] 前缀树中的最小逆序对数目
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number[]} target
 * @return {number}
 */
function minInversions(words, target) {
  const n = words.length;
  // 建前缀树：children[node] = Map<char, nodeId>
  const children = [new Map()];
  const wordNode = new Array(n);
  for (let i = 0; i < n; i++) {
    let node = 0;
    const w = words[i];
    for (let d = 0; d < w.length; d++) {
      const ch = w[d];
      let next = children[node].get(ch);
      if (next === undefined) {
        next = children.length;
        children.push(new Map());
        children[node].set(ch, next);
      }
      node = next;
    }
    wordNode[i] = node;
  }

  // 惰性按节点数据：分叉对累计、子树大小
  const pairMap = new Map();
  const cntMap = new Map();
  const totalMap = new Map();
  const getArr = (map, node, len) => {
    let a = map.get(node);
    if (a === undefined) {
      a = new Int32Array(len);
      map.set(node, a);
    }
    return a;
  };

  // 固定逆序对：标记点先于其子树，rank 小的真后代必然成逆序
  const inCount = new Int32Array(children.length);
  let fixed = 0;

  for (let t = 0; t < n; t++) {
    const i = target[t];
    const w = words[i];
    fixed += inCount[wordNode[i]];
    let node = 0;
    for (let d = 0; d < w.length; d++) {
      const c = w.charCodeAt(d) - 97;
      const cnt = getArr(cntMap, node, 10);
      const pair = getArr(pairMap, node, 100);
      const base = c * 10;
      for (let a = 0; a < 10; a++) {
        if (a !== c && cnt[a]) pair[base + a] += cnt[a];
      }
      cnt[c]++;
      node = children[node].get(w[d]);
    }
    node = 0;
    for (let d = 0; d <= w.length; d++) {
      inCount[node]++;
      if (d < w.length) node = children[node].get(w[d]);
    }
  }

  // 全量子树大小
  for (let i = 0; i < n; i++) {
    let node = 0;
    const w = words[i];
    for (let d = 0; d < w.length; d++) {
      const c = w.charCodeAt(d) - 97;
      getArr(totalMap, node, 10)[c]++;
      node = children[node].get(w[d]);
    }
  }

  // 每个分叉节点：子集 DP 求最优孩子顺序
  const dp = new Int32Array(1 << 10);
  // scAll[j][m]：孩子 j 接在集合 m 之后的交叉成本，按列预计算（O(k·2^k)/节点）
  const scAll = new Int32Array(10 << 10);
  let ans = fixed;
  for (let u = 0; u < children.length; u++) {
    const chMap = children[u];
    const k = chMap.size;
    if (k < 2) continue;
    const cs = [...chMap.keys()].map((ch) => ch.charCodeAt(0) - 97);
    const totals = totalMap.get(u);
    const pair = pairMap.get(u);
    const size = 1 << k;
    const cost = new Int32Array(k * k);
    for (let x = 0; x < k; x++) {
      for (let y = 0; y < k; y++) {
        if (x === y) continue;
        // cost(x,y) = s_x·s_y − #{(i∈x, j∈y): r(i)<r(j)}，后者存在 pair[y][x] 中
        cost[x * k + y] = totals[cs[x]] * totals[cs[y]] - pair[cs[y] * 10 + cs[x]];
      }
    }
    for (let j = 0; j < k; j++) {
      const base = j << 10;
      scAll[base] = 0;
      for (let m = 1; m < size; m++) {
        const low = m & -m;
        const li = 31 - Math.clz32(low);
        scAll[base + m] = scAll[base + (m ^ low)] + cost[li * k + j];
      }
    }
    dp.fill(0x3f3f3f3f, 0, size);
    dp[0] = 0;
    // mask 外层保证 dp[prev] 已被全部 j 松弛完毕（子集 DP 标准顺序）
    for (let mask = 1; mask < size; mask++) {
      for (let j = 0; j < k; j++) {
        const bit = 1 << j;
        if (!(mask & bit)) continue;
        const prev = mask ^ bit;
        const val = dp[prev] + scAll[(j << 10) + prev];
        if (val < dp[mask]) dp[mask] = val;
      }
    }
    ans += dp[size - 1];
  }
  return ans;
}
// @lc code=end

// TEST:
console.log(minInversions(["bad","bag","fig","fed"], [3,1,0,2]) === 2);
console.log(minInversions(["ab","ac","ba","bc"], [0,3,1,2]) === 1);
console.log(minInversions(["a"], [0]) === 0);
console.log(minInversions(["ab","a"], [1,0]) === 0);
console.log(minInversions(["ab","a"], [0,1]) === 1);
console.log(minInversions(["aa","ab","ba"], [2,0,1]) === 0);
