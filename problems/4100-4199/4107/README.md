# [4107] 统计有效后缀排序的数量 I

## Description


```md
https://leetcode.cn/problems/count-valid-suffix-sorts-i/description/
* algorithms
* Medium (34.43%)
* Dislikes: -
* Testcase Example:  '[1,2,3]\n[3,2,1]'
给你两个长度均为 n 的整数数组 nums 和 target。
对于每个下标 i，考虑将原数组的 后缀 nums[i..n - 1] 按 非递增顺序 排序。
返回使排序后的数组等于 target 的下标 i 的数量。
子数组 是数组中一个连续的 非空 元素序列。
数组的 后缀 是从任意下标开始并延伸至数组末尾的子数组。

示例 1：
输入： nums = [1,2,3], target = [3,2,1]
输出： 1
解释：
i = 0：排序后的数组为 [3, 2, 1]，等于 target。
i = 1：排序后的数组为 [1, 3, 2]。
i = 2：排序后的数组为 [1, 2, 3]。
只有 i = 0 符合要求，因此答案为 1。
示例 2：
输入： nums = [1,5,6,4,6], target = [1,5,6,6,4]
输出： 2
解释：
选择 i = 2 或 i = 3，排序后都会得到 [1, 5, 6, 6, 4]。其他下标均无法得到 target。因此，答案为 2。
示例 3：
输入： nums = [7,6,8], target = [8,6,7]
输出： 0
解释：
分别对从下标 0、1 和 2 开始的后缀排序，会依次得到 [8, 7, 6]、[7, 8, 6] 和 [7, 6, 8]。它们均不等于 target，因此答案为 0。

提示：
1 <= n == nums.length == target.length <= 105
1 <= nums[i], target[i] <= 10​​​​​​​5​​​​​​​​​​​​​​

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given two integer arrays nums and target, both of length n.
For each index i, consider sorting the suffix nums[i..n-1] of the original array in non-increasing
order (in place). Return the number of indices i such that the sorted array equals target.

Example 1: nums=[1,2,3], target=[3,2,1] -> 1 (only i=0).
Example 2: nums=[1,5,6,4,6], target=[1,5,6,6,4] -> 2 (i=2 or i=3).
Example 3: nums=[7,6,8], target=[8,6,7] -> 0.

Constraints: 1 <= n <= 1e5; 1 <= nums[i], target[i] <= 1e5.

## Approach

Sorting suffix i in place yields nums[0..i-1] ++ sorted_desc(nums[i..]). Valid(i) iff
(1) nums[j] == target[j] for all j < i (i <= z, the LCP length of nums and target);
(2) multiset(nums) == multiset(target) (with the prefix copied elementwise this makes the tail
    multiset equal automatically);
(3) target[i..n-1] is non-increasing.
Valid i's form a suffix [i0, n-1]: (3) is monotone in i, and the smallest such i is
i0 = max(0, n - runEnd), where runEnd is the length of the longest non-increasing segment of
target ending at n-1. Counting-sort check for (2), linear scan for z. Answer:
0 if multisets differ, else max(0, min(z, n-1) - i0 + 1). O(n + V).
