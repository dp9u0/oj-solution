# [1063] 有效子数组的数目

## Description


```md
https://leetcode.cn/problems/number-of-valid-subarrays/description/
* algorithms
* Hard (74.42%)
* Likes:    54
* Dislikes: -
* Testcase Example:  '[1,4,2,5,3]'
给定一个整数数组 nums ，返回满足下面条件的 非空、连续 子数组的数目：
子数组 是数组的 连续 部分。
子数组最左边的元素不大于子数组中的其他元素 。

示例 1：
输入：nums = [1,4,2,5,3]
输出：11
解释：有 11 个有效子数组，分别是：[1],[4],[2],[5],[3],[1,4],[2,5],[1,4,2],[2,5,3],[1,4,2,5],[1,4,2,5,3] 。
示例 2：
输入：nums = [3,2,1]
输出：3
解释：有 3 个有效子数组，分别是：[3],[2],[1] 。
示例 3：
输入：nums = [2,2,2]
输出：6
解释：有 6 个有效子数组，分别为是：[2],[2],[2],[2,2],[2,2],[2,2,2] 。

提示：
1 <= nums.length <= 5 * 104
0 <= nums[i] <= 105
Hint 1: Given a data structure that answers queries of the type to find the minimum in a range of an array (Range minimum query (RMQ) sparse table) in O(1) time. How can you solve this problem?
Hint 2: For each starting index do a binary search with an RMQ to find the ending possible position.

```

## Solution

[SourceCode](./solution.js)

## Translation

Count non-empty contiguous subarrays whose leftmost element is ≤ every other element in the subarray (equivalently: subarray [i..j] is valid iff nums[i..j] contains no element < nums[i]).

- Example: [1,4,2,5,3] → `11`

## Approach

**单调栈(下一更小元素)**。子数组 [i..j] 有效 ⟺ j 在 i 右侧第一个严格小于 nums[i] 的位置之前,故每个 i 的贡献 = nextSmaller(i) − i(无则 n − i)。等值不弹(严格小于才弹,[2,2] 合法)。一次遍历:遇到 nums[i] 更小就弹栈累加 i − 弹出下标,末尾清栈用 n − 下标。O(n)。
