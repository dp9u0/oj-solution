# [1524] 和为奇数的子数组数目

## Description


```md
https://leetcode.cn/problems/number-of-sub-arrays-with-odd-sum/description/
* algorithms
* Medium (54.23%)
* Likes:    127
* Dislikes: -
* Testcase Example:  '[1,3,5]'
给你一个整数数组 arr 。请你返回和为 奇数 的子数组数目。
由于答案可能会很大，请你将结果对 10^9 + 7 取余后返回。

示例 1：
输入：arr = [1,3,5]
输出：4
解释：所有的子数组为 [[1],[1,3],[1,3,5],[3],[3,5],[5]] 。
所有子数组的和为 [1,4,9,3,8,5].
奇数和包括 [1,9,3,5] ，所以答案为 4 。
示例 2 ：
输入：arr = [2,4,6]
输出：0
解释：所有子数组为 [[2],[2,4],[2,4,6],[4],[4,6],[6]] 。
所有子数组和为 [2,6,12,4,10,6] 。
所有子数组和都是偶数，所以答案为 0 。
示例 3：
输入：arr = [1,2,3,4,5,6,7]
输出：16
示例 4：
输入：arr = [100,100,99,99]
输出：4
示例 5：
输入：arr = [7]
输出：1

提示：
1 <= arr.length <= 10^5
1 <= arr[i] <= 100
Hint 1: Can we use the accumulative sum to keep track of all the odd-sum sub-arrays ?
Hint 2: if the current accu sum is odd, we care only about previous even accu sums and vice versa.

```

### English Translation

Given an array of integers `arr`, return the number of subarrays with an **odd** sum.

Since the answer can be very large, return it modulo `10^9 + 7`.

Example 1:
Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]. Their sums are [1,4,9,3,8,5]. The odd sums are [1,9,3,5], so the answer is 4.

Example 2:
Input: arr = [2,4,6]
Output: 0
Explanation: All subarray sums are even, so the answer is 0.

Example 3:
Input: arr = [1,2,3,4,5,6,7]
Output: 16

Example 4:
Input: arr = [100,100,99,99]
Output: 4

Example 5:
Input: arr = [7]
Output: 1

Constraints:
- 1 <= arr.length <= 10^5
- 1 <= arr[i] <= 100

### Approach

前缀和奇偶性计数（O(n) 时间，O(1) 空间）：

- 设前缀和 `P[k] = arr[0..k-1]` 的和。子数组 `arr[i..j]` 的和为 `P[j+1] - P[i]`，它是奇数当且仅当 `P[j+1]` 与 `P[i]` 的奇偶性**不同**。
- 从左到右扫描，维护到目前为止「偶数前缀和个数 evenCnt」与「奇数前缀和个数 oddCnt」，初始 `P[0] = 0` 为偶数（evenCnt = 1）。
- 扫描到位置 k 时，当前前缀和为奇数则答案累加 evenCnt，为偶数则累加 oddCnt；随后更新对应计数。
- 答案对 `10^9 + 7` 取模。

## Solution

[SourceCode](./solution.js)
