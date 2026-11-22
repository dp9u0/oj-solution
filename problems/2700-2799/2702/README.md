# [2702] 使数字变为非正数的最小操作次数

## Description


```md
https://leetcode.cn/problems/minimum-operations-to-make-numbers-non-positive/description/
* algorithms
* Hard (27.50%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '[3,4,1,7,6]\n4\n2'
给定一个 下标从0开始 的整数数组 nums，以及两个整数 x 和 y。在每一次操作中，你需要选择一个满足条件 0 <= i < nums.length 的下标 i ，并执行以下操作：
将 nums[i] 减去 x。
将除了下标为 i 的位置外，其他位置的值都减去 y。
返回使得 nums 中的所有整数都 小于等于零 所需的最小操作次数。

示例 1：
输入：nums = [3,4,1,7,6], x = 4, y = 2
输出：3
解释：你需要进行三次操作。其中一种最优操作序列如下：
操作 1: 选择 i = 3。 然后, nums = [1,2,-1,3,4].
操作 2: 选择 i = 3。 然后, nums = [-1,0,-3,-1,2].
操作 3: 选择 i = 4。 然后, nums = [-3,-2,-5,-3,-2].
现在，nums 中的所有数字都是非正数。因此，返回 3。
示例 2：
输入：nums = [1,2,1], x = 2, y = 1
输出：1
解释：我们可以在 i = 1 处执行一次操作，得到 nums = [0,0,0]。所有正数都被移除，因此返回 1。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= y < x <= 109
Hint 1: Given a candidate, can you check if it is possible to decrement all values to be less than or equal to 0 within the given steps in O(N) time?
Hint 2: If so, run a binary search to look for the minimum such valid candidate.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Each operation picks index i, subtracts x from nums[i] and y from every other element. Find the minimum number of operations so all elements become <= 0. 1 <= y < x <= 1e9, nums[i] up to 1e9.

Approach: binary search on the answer k. If index i is targeted c_i times (sum c_i <= k), element i drops by c_i*x + (k - c_i)*y = k*y + c_i*(x - y). So for a candidate k, each element with v - k*y > 0 needs c_i = ceil((v - k*y) / (x - y)) targeted operations; feasible iff sum of c_i <= k. Feasibility is monotone in k.

Precision note: using upper bound hi = ceil(max/y) (every op lowers every element by >= y, so hi always suffices) keeps k*y <= max + y < 2^53, so plain number arithmetic stays exact — no BigInt needed.

Complexity: O(n log(max/y)).
