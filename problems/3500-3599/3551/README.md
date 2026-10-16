# [3551] 数位和排序需要的最小交换次数

## Description


```md
https://leetcode.cn/problems/minimum-swaps-to-sort-by-digit-sum/description/
* algorithms
* Medium (54.49%)
* Likes:    30
* Dislikes: -
* Testcase Example:  '[37,100]'
给你一个由 互不相同 的正整数组成的数组 nums，需要根据每个数字的数位和（即每一位数字相加求和）按 升序 对数组进行排序。如果两个数字的数位和相等，则较小的数字排在前面。
返回将 nums 排列为上述排序顺序所需的 最小 交换次数。
一次 交换 定义为交换数组中两个不同位置的值。

示例 1：
输入: nums = [37,100]
输出: 1
解释:
计算每个整数的数位和：[3 + 7 = 10, 1 + 0 + 0 = 1] → [10, 1]
根据数位和排序：[100, 37]。将 37 与 100 交换，得到排序后的数组。
因此，将 nums 排列为排序顺序所需的最小交换次数为 1。
示例 2：
输入: nums = [22,14,33,7]
输出: 0
解释:
计算每个整数的数位和：[2 + 2 = 4, 1 + 4 = 5, 3 + 3 = 6, 7 = 7] → [4, 5, 6, 7]
根据数位和排序：[22, 14, 33, 7]。数组已经是排序好的。
因此，将 nums 排列为排序顺序所需的最小交换次数为 0。
示例 3：
输入: nums = [18,43,34,16]
输出: 2
解释:
计算每个整数的数位和：[1 + 8 = 9, 4 + 3 = 7, 3 + 4 = 7, 1 + 6 = 7] → [9, 7, 7, 7]
根据数位和排序：[16, 34, 43, 18]。将 18 与 16 交换，再将 43 与 34 交换，得到排序后的数组。
因此，将 nums 排列为排序顺序所需的最小交换次数为 2。

提示:
1 <= nums.length <= 105
1 <= nums[i] <= 109
nums 由 互不相同 的正整数组成。
Hint 1: First, sort the array based on digit sum (and value as a tiebreaker). Then, map each original value to its index in the sorted array.
Hint 2: Now, the problem reduces to finding the minimum number of swaps to sort this mapped array. The answer is n - number_of_cycles in the permutation.

```

## Description (English)

You are given an array `nums` of **distinct** positive integers. You need to sort the array in **ascending** order based on the digit sum of each number (i.e., the sum of its digits). If two numbers have the same digit sum, the smaller number comes first.

Return the **minimum** number of swaps required to arrange `nums` into the above sorted order.

A swap is defined as exchanging the values at two different positions in the array.

Example 1:
Input: nums = [37,100]
Output: 1
Explanation:
Compute the digit sum of each integer: [3 + 7 = 10, 1 + 0 + 0 = 1] → [10, 1]
Sort by digit sum: [100, 37]. Swap 37 with 100 to get the sorted array.
Thus the minimum number of swaps required is 1.

Example 2:
Input: nums = [22,14,33,7]
Output: 0
Explanation:
Compute the digit sum of each integer: [2 + 2 = 4, 1 + 4 = 5, 3 + 3 = 6, 7 = 7] → [4, 5, 6, 7]
Sort by digit sum: [22, 14, 33, 7]. The array is already sorted.
Thus the minimum number of swaps required is 0.

Example 3:
Input: nums = [18,43,34,16]
Output: 2
Explanation:
Compute the digit sum of each integer: [1 + 8 = 9, 4 + 3 = 7, 3 + 4 = 7, 1 + 6 = 7] → [9, 7, 7, 7]
Sort by digit sum: [16, 34, 43, 18]. Swap 18 with 16, then swap 43 with 34 to get the sorted array.
Thus the minimum number of swaps required is 2.

Constraints:
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
nums consists of distinct positive integers.

## Approach

最小交换次数的经典结论：把数组看成目标排列的一个置换，最小交换次数 = n - 置换环的个数。

步骤：
1. 对数组副本按（数位和升序，数值升序）排序，得到目标排列 target。
2. 因为元素互不相同，可以建立 value → 目标下标 的映射 pos。
3. 原数组每个元素 pos[nums[i]] 构成一个置换 p。遍历求环：对每个未访问的下标 i，沿 p 走一圈，环长为 len，则该环需要 len - 1 次交换。
4. 答案 = Σ(len - 1) = n - 环的个数。

复杂度：时间 O(n log n)（排序），空间 O(n)。

## Solution

[SourceCode](./solution.js)
