/*
 * @lc app=leetcode id=927 lang=javascript
 *
 * [927] Three Equal Parts
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function (arr) {
  const n = arr.length;
  const ones = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) ones.push(i);
  }
  const count = ones.length;

  // 1 的总数必须能被 3 整除
  if (count % 3 !== 0) return [-1, -1];
  // 全 0: 任意划分都表示 0
  if (count === 0) return [0, n - 1];

  const t = count / 3;
  // 第三部分固定到数组末尾, 每部分最后一个 1 之后必须跟同样多的尾随 0
  const zeros = n - 1 - ones[count - 1];
  const i = ones[t - 1] + zeros;          // 第一部分结束(含)
  const j = ones[2 * t - 1] + zeros + 1;  // 第三部分开始
  if (i + 1 >= j || j > n - 1) return [-1, -1];

  // 去掉前导零后逐位比较 (空串代表值 0)
  const strip = (from, to) => {
    while (from <= to && arr[from] === 0) from++;
    return arr.slice(from, to + 1).join('');
  };
  const p1 = strip(0, i);
  const p2 = strip(i + 1, j - 1);
  const p3 = strip(j, n - 1);
  return p1 === p2 && p2 === p3 ? [i, j] : [-1, -1];
};
// @lc code=end

// TEST:
// 校验函数: 验证返回的切分是否使三部分二进制值相等
const valid = (arr, res) => {
  if (res[0] === -1) return true;
  const [i, j] = res;
  if (i + 1 >= j || j > arr.length - 1) return false;
  const val = (from, to) => {
    let v = 0;
    for (let k = from; k <= to; k++) v = v * 2 + arr[k];
    return v;
  };
  return val(0, i) === val(i + 1, j - 1) && val(i + 1, j - 1) === val(j, arr.length - 1);
};

// 用例 1: 示例 [1,0,1,0,1] → 划分 [1] [0,1] [0,1], 值均为 1
console.log('case1:', JSON.stringify(threeEqualParts([1, 0, 1, 0, 1])), valid([1, 0, 1, 0, 1], threeEqualParts([1, 0, 1, 0, 1])));

// 用例 2: 示例 [1,1,0,1,1], 5 个 1 不能整除 3 → [-1,-1]
console.log('case2:', JSON.stringify(threeEqualParts([1, 1, 0, 1, 1])) === JSON.stringify([-1, -1]));

// 用例 3: 示例 [1,1,0,0,1] → [0,2], 三部分 [1] [1] [0,0,1] 值均为 1
console.log('case3:', JSON.stringify(threeEqualParts([1, 1, 0, 0, 1])), valid([1, 1, 0, 0, 1], threeEqualParts([1, 1, 0, 0, 1])));

// 用例 4: 全 0 数组 → 任意合法划分, 三部分值均为 0
const r4 = threeEqualParts([0, 0, 0, 0, 0]);
console.log('case4:', JSON.stringify(r4), valid([0, 0, 0, 0, 0], r4));

// 用例 5: 尾随 0 约束 —— [1,0,1,0,1,0,0] 末尾多 2 个 0, 第三部分必须带走它们, 无解
console.log('case5:', JSON.stringify(threeEqualParts([1, 0, 1, 0, 1, 0, 0])) === JSON.stringify([-1, -1]));

// 用例 6: [1,0,1,0,1,0,0,0] 每部分尾随 0 充足 → [1] [0,1,0,0] [0,1,0,0]... 验证器判定
const r6 = threeEqualParts([1, 0, 1, 0, 1, 0, 0, 0]);
console.log('case6:', JSON.stringify(r6), valid([1, 0, 1, 0, 1, 0, 0, 0], r6));

// 用例 7: 最小规模 [1,1,1] → [0,1]... i+1<j 校验, 实际应返回 [-1,-1] (无法相等: 1,1,1 值相同可分 [1][1][1] 即 [0,2])
const r7 = threeEqualParts([1, 1, 1]);
console.log('case7:', JSON.stringify(r7), valid([1, 1, 1], r7));
