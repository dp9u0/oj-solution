# [4051] 统计遥远子数组的数目

## Description

[LeetCode Problem Description](https://leetcode.cn/problems/count-subarrays-with-distant-sums/description/)

* algorithms
* Hard (47.56%)
* Testcase Example:  '[1,2,1]\n4\n1'

```md
给你一个整数数组 nums ，以及两个整数 goal 和 k 。

如果一个 子数组 nums[i..j] 满足其元素和与 goal 之间的 绝对差至少 为 k ，则称其为 遥远的 。

返回 遥远的 子数组的数量。

子数组 是数组中连续的非空元素序列。

示例 1：
输入： nums = [1,2,1], goal = 4, k = 1
输出： 5
解释：对于 k = 1 ，遥远的子数组为：[1], [2], [1], [1,2], [2,1]，它们的 |sum - goal| 均 >= 1。
[1,2,1] 的和为 4，|4-4| = 0 < 1，不算遥远。因此答案为 5。

示例 2：
输入： nums = [2,-1,3], goal = 2, k = 2
输出： 2
解释：遥远的子数组为 [-1]（|−1−2| = 3 >= 2）和 [2,-1,3]（|4−2| = 2 >= 2）。因此答案为 2。

示例 3：
输入： nums = [-3,1,2], goal = 0, k = 3
输出： 2
解释：遥远的子数组为 [-3]（|−3−0| = 3 >= 3）和 [1,2]（|3−0| = 3 >= 3）。因此答案为 2。

提示：
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
-10^9 <= goal <= 10^9
0 <= k <= 10^9
```

## Solution

[SourceCode](./solution.js)
