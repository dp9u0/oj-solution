# [3321] Find X-Sum of All K-Long Subarrays II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/description/)

* algorithms
* Hard (41.10%)
* Likes:    449
* Dislikes: 51
* Testcase Example:  '[1,1,2,2,3,4,2,3]\n6\n2'

```md
You are given an array nums of n integers and two integers k and x.
The x-sum of an array is calculated by the following procedure:

Count the occurrences of all elements in the array.
Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
Calculate the sum of the resulting array.

Note that if an array has less than x distinct elements, its x-sum is the sum of the array.
Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].

Example 1:

Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2
Output: [6,10,12]
Explanation:

For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.


Example 2:

Input: nums = [3,8,7,8,7,5], k = 2, x = 2
Output: [11,15,15,15,12]
Explanation:
Since k == x, answer[i] is equal to the sum of the subarray nums[i..i + k - 1].


Constraints:

nums.length == n
1 <= n <= 105
1 <= nums[i] <= 109
1 <= x <= k <= nums.length


```

## 翻译

给定数组 nums 和整数 k、x。对每个长度为 k 的子数组，计算其 x-sum：统计频率最高的 x 个元素（频率相同取值更大的），保留这些元素在数组中的所有出现，求和。返回所有子数组的 x-sum。

## 解题思路

**双堆（Two Heaps）+ 滑动窗口**：

维护两个堆：
- `topH`：最小堆，存放频率最高的 x 个元素（按 (freq, val) 排序）
- `botH`：最大堆，存放剩余元素

用 `inTop` 集合标记哪些值在 top 中，`topSum` 维护 top 中元素的 freq*val 之和。

滑动窗口时：
- 移除左边元素：频率减 1，更新堆和 topSum
- 添加右边元素：频率加 1，更新堆和 topSum
- 每次操作后 adjust()：保证 top 恰好有 x 个元素，且 top 中最小的优先级 >= bottom 中最大的优先级

使用懒删除（lazy deletion）：堆中可能有过期条目，弹出时检查频率是否匹配。

时间复杂度：O(n log n)。

## Solution

[SourceCode](./solution.js)
