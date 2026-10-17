/*
 * @lc app=leetcode.cn id=1569 lang=javascript
 *
 * [1569] 将子数组重新排序得到同一个二叉搜索树的方案数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
  // 乘积可达 ~1e18 超出 Number 安全范围，用 BigInt 保证精度
  const MOD = 1000000007n;
  const n = nums.length;
  // 杨辉三角预处理组合数 C[i][j] = C(i, j) mod MOD
  const c = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0n));
  for (let i = 0; i <= n; i++) {
    c[i][0] = 1n;
    for (let j = 1; j <= i; j++) {
      c[i][j] = (c[i - 1][j - 1] + c[i - 1][j]) % MOD;
    }
  }

  // ways(arr)：arr 产生与按序插入相同 BST 的排列数（含原排列自身）
  const dfs = (arr) => {
    if (arr.length <= 2) return 1n;
    const root = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      (arr[i] < root ? left : right).push(arr[i]);
    }
    return c[left.length + right.length][left.length] * dfs(left) % MOD * dfs(right) % MOD;
  };

  return Number((dfs(nums) - 1n + MOD) % MOD);
};
// @lc code=end

// TEST:
console.log(numOfWays([2, 1, 3]) === 1);
console.log(numOfWays([3, 4, 5, 1, 2]) === 5);
console.log(numOfWays([1, 2, 3]) === 0);
console.log(numOfWays([1]) === 0);
console.log(numOfWays([2, 1, 3, 4]) === 2);
console.log(numOfWays([3, 1, 4, 2]) === 2);
