# [3659] Partition Array Into K-Distinct Groups

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-array-into-k-distinct-groups/description/)

* algorithms
* Medium (47.10%)
* Likes:    116
* Dislikes: 73
* Testcase Example:  '[1,2,3,4]\n2'

```md
You are given an integer array nums and an integer k.
Your task is to determine whether it is possible to partition all elements of nums into one or more groups such that:

Each group contains exactly k elements.
All elements in each group are distinct.
Each element in nums must be assigned to exactly one group.

Return true if such a partition is possible, otherwise return false.

Example 1:

Input: nums = [1,2,3,4], k = 2
Output: true
Explanation:
One possible partition is to have 2 groups:

Group 1: [1, 2]
Group 2: [3, 4]

Each group contains k = 2 distinct elements, and all elements are used exactly once.

Example 2:

Input: nums = [3,5,2,2], k = 2
Output: true
Explanation:
One possible partition is to have 2 groups:

Group 1: [2, 3]
Group 2: [2, 5]

Each group contains k = 2 distinct elements, and all elements are used exactly once.

Example 3:

Input: nums = [1,5,2,3], k = 3
Output: false
Explanation:
We cannot form groups of k = 3 distinct elements using all values exactly once.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
​​​​​​​1 <= k <= nums.length


```

## 翻译

将数组分成若干组，每组恰好k个不同元素，每个元素恰好属于一组。判断是否可行。

## 解题思路

统计每个值的频率。关键条件：任何值的频率不超过floor(n/k)+1，且n能被k整除。更精确地：每个值最多出现ceil(n/k)次，即floor((n-1)/k)+1。实际上用贪心模拟：维护一个"进行中的组"计数，频率最高的值决定了同时需要的最少组数，若超过n/k则不可行。

## Solution

[SourceCode](./solution.js)
