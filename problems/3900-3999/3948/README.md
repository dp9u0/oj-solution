# [3948] Lexicographically Maximum MEX Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-maximum-mex-array/description/)

* algorithms
* Hard (57.18%)
* Likes:    51
* Dislikes: 4
* Testcase Example:  '[0,1,0]'

```md
You are given an integer array nums.
You want to construct an array result by repeatedly performing the following operation until nums becomes empty:

Choose an integer k such that 1 <= k <= len(nums).
Compute the MEX of the first k elements of nums.
Append this MEX to result.
Remove the first k elements from nums.

Return the lexicographically maximum array result that can be obtained after performing the operations.
The MEX of an array is the smallest non-negative integer not present in the array.
An array a is lexicographically greater than an array b if in the first position where a and b differ, array a has an element that is greater than the corresponding element in b. If the first min(a.length, b.length) elements do not differ, then the longer array is the lexicographically greater one.

Example 1:

Input: nums = [0,1,0]
Output: [2,1]
Explanation:

Take the first k = 2 elements [0, 1] which has MEX = 2. Current result = [2].
Remaining array [0] has MEX = 1. Thus, the final result = [2, 1].


Example 2:

Input: nums = [1,0,2]
Output: [3]
Explanation:

Take the first k = 3 elements [1, 0, 2] which has MEX = 3.
nums is now empty. Thus, the final result = [3].


Example 3:

Input: nums = [3,1]
Output: [0,0]
Explanation:​​​​​​​

Take k = 1, first element [3] has MEX = 0. Current result = [0].
Remaining array [1] has MEX = 0. Thus, the final result = [0, 0].



Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 `nums`。反复执行直到空：选 `k (1 <= k <= len)`，取**前 k 个元素**的 MEX 追加到 `result`，并删除这 k 个元素。返回能得到的**字典序最大**的 `result`。

MEX = 数组中未出现的最小非负整数。

示例 1：`[0,1,0]` → `[2,1]`；示例 2：`[1,0,2]` → `[3]`；示例 3：`[3,1]` → `[0,0]`

约束：`1 <= n <= 10^5`，`0 <= nums[i] <= 10^5`

## 解题思路

贪心：**首元素绝对优先**——第一段的 MEX 上限是整个剩余数组的 MEX（前缀 MEX 不会超过它），故第一段取**最早达到 `suffixMex[start]` 的前缀**切割；对余下部分归纳同理。早切严格优于晚切（留下更长后缀，可模仿任何晚切的后续策略）。

实现（全程 O(n)）：

1. 从右向左预计算 `suffixMex[i]` = `nums[i..]` 的 MEX（加元素只会使 MEX 增大，指针单调前移）；
2. 每阶段从 `start` 扫描，局部 Set 累计，局部 mex 一旦等于 `suffixMex[start]` 立即切割、push、进入下一阶段。各阶段扫描区间互不相交，总扫描 O(n)。

验证示例 1：suffixMex=[2,1,1]；阶段1扫到 i=1 时 mex=2 → 切，阶段2 mex{0}=1 → [2,1] ✓

本地用 n≤8 的小数组对拍穷举所有切割方案。
