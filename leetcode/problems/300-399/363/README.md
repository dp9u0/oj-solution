# [363] Max Sum of Rectangle No Larger Than K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/description/)

* algorithms
* Hard (45.44%)
* Testcase Example:  '[[1,0,1],[0,-2,3]]\n2'

```md
Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.
It is guaranteed that there will be a rectangle with a sum no larger than k.

Example 1:
Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
Example 2:
Input: matrix = [[2,2,-1]], k = 3
Output: 3

Constraints:
m == matrix.length
n == matrix[i].length
1
-100
-10^5

Follow up: What if the number of rows is much larger than the number of columns?

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给定一个 m x n 的矩阵 `matrix` 和一个整数 `k`，返回矩阵中矩形的最大和，使得这个和不超过 `k`。
题目保证至少存在一个和不超过 `k` 的矩形。

示例 1：
输入: matrix = [[1,0,1],[0,-2,3]], k = 2
输出: 2
解释: 蓝色矩形 [[0, 1], [-2, 3]] 的和是 2，2 是不超过 k (k = 2) 的最大数字。

示例 2：
输入: matrix = [[2,2,-1]], k = 3
输出: 3

约束：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-100 <= matrix[i][j] <= 100
-10^5 <= k <= 10^5

进阶：如果行数远大于列数，你该如何解答？

### 解题思路 (Approach)
这道题是求二维矩阵中，和不超过 k 的最大矩形和。
常规的最大子矩阵和问题可以将二维问题降维为一维问题：固定矩形的上边界和下边界，然后将这两行之间的每一列求和，得到一个一维数组。然后对这个一维数组求最大子数组和（Kadane算法）。
但本题增加了一个限制：和不超过 k。所以在得到一维数组后，我们需要求其和不超过 k 的最大连续子数组和。
求一维数组 `arr` 中和不超过 k 的最大子数组和：
可以利用前缀和，对于某个前缀和 `sum`，我们需要找到之前出现过的一个前缀和 `prev_sum`，使得 `sum - prev_sum <= k`，即 `prev_sum >= sum - k`，并且 `prev_sum` 要尽可能小（以使得差值最大）。
在 JS 中没有自带的平衡二叉搜索树（如 C++ 的 `std::set`），因此可以通过二分查找维护一个有序数组来寻找最优的 `prev_sum`。
整个算法流程：
1. 为了优化，根据 m 和 n 的大小关系，我们可以决定是固定行还是固定列。由于题目进阶提示行数可能远大于列数，我们选择较小的一边来作为上/下（或左/右）边界。这里假设固定列（即左右边界）。
2. 枚举左边界 `left`，从 0 到 n-1。
3. 初始化一个大小为 m 的数组 `rowSum`，记录每一行的和。
4. 枚举右边界 `right`，从 `left` 到 n-1：
   - 累加每一行的值到 `rowSum`。
   - 对 `rowSum` 求不超过 k 的最大子数组和。
   - 更新全局最大和。

求一维数组不超过 k 的最大子数组和的方法：
- 初始化 `sums = [0]` (表示空前缀和)
- `cur = 0`, `maxSum = -Infinity`
- 遍历 `rowSum`，`cur += num`
- 在 `sums` 中通过二分查找找到第一个 `>= cur - k` 的元素。如果找到了，更新 `maxSum = Math.max(maxSum, cur - sums[idx])`。如果 `maxSum == k`，可以直接返回（因为这是可能的最大值）。
- 将 `cur` 通过二分查找插入到 `sums` 中，保持有序。

注意，二分查找插入的复杂度最坏是 O(N)，但是由于这里一维数组长度最大为 100，所以即使 O(N) 也是可以接受的。
