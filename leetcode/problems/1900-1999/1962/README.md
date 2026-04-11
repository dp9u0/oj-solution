# [1962] Remove Stones to Minimize the Total

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-stones-to-minimize-the-total/description/)

* algorithms
* Medium (65.62%)
* Likes:    1972
* Dislikes: 183
* Testcase Example:  '[5,4,9]\n2'

```md
You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times:

Choose any piles[i] and remove floor(piles[i] / 2) stones from it.

Notice that you can apply the operation on the same pile more than once.
Return the minimum possible total number of stones remaining after applying the k operations.
floor(x) is the largestinteger that is smaller than or equal to x (i.e., rounds xdown).

Example 1:

Input: piles = [5,4,9], k = 2
Output: 12
Explanation:Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [5,4,5].
- Apply the operation on pile 0. The resulting piles are [3,4,5].
The total number of stones in [3,4,5] is 12.

Example 2:

Input: piles = [4,3,6,7], k = 3
Output: 12
Explanation:Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [4,3,3,7].
- Apply the operation on pile 3. The resulting piles are [4,3,3,4].
- Apply the operation on pile 0. The resulting piles are [2,3,3,4].
The total number of stones in [2,3,3,4] is 12.


Constraints:

1 <= piles.length <= 105
1 <= piles[i] <= 104
1 <= k <= 105


```

## 题目翻译

给定整数数组 `piles`，piles[i] 表示第 i 堆石头的数量，和整数 k。执行恰好 k 次操作：每次选择任意 piles[i]，移除 floor(piles[i] / 2) 个石头。可以对同一堆多次操作。返回 k 次操作后剩余石头的最少总数。

**示例 1：** piles = [5,4,9], k = 2 → 12
**示例 2：** piles = [4,3,6,7], k = 3 → 12

**约束：**
- 1 <= piles.length <= 10^5
- 1 <= piles[i] <= 10^4
- 1 <= k <= 10^5

## 解题思路 (Approach)

贪心 + 最大堆。每次选择当前最大的堆进行操作，使移除的石头最多。用最大堆维护所有堆的石头数，每次取堆顶元素，减去 floor(piles[i]/2) 后放回，重复 k 次。

时间复杂度：O((n+k) log n)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
