# [2547] Minimum Cost to Split an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-split-an-array/description/)

* algorithms
* Hard (44.32%)
* Likes:    468
* Dislikes: 31
* Testcase Example:  '[1,2,1,2,1,3,3]\n2'

```md
You are given an integer array nums and an integer k.
Split the array into some number of non-empty subarrays. The cost of a split is the sum of the importance value of each subarray in the split.
Let trimmed(subarray) be the version of the subarray where all numbers which appear only once are removed.

For example, trimmed([3,1,2,4,3,4]) = [3,4,3,4].

The importance value of a subarray is k + trimmed(subarray).length.

For example, if a subarray is [1,2,3,3,3,4,4], then trimmed([1,2,3,3,3,4,4]) = [3,3,3,4,4].The importance value of this subarray will be k + 5.

Return the minimum possible cost of a split of nums.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,1,2,1,3,3], k = 2
Output: 8
Explanation: We split nums to have two subarrays: [1,2], [1,2,1,3,3].
The importance value of [1,2] is 2 + (0) = 2.
The importance value of [1,2,1,3,3] is 2 + (2 + 2) = 6.
The cost of the split is 2 + 6 = 8. It can be shown that this is the minimum possible cost among all the possible splits.

Example 2:

Input: nums = [1,2,1,2,1], k = 2
Output: 6
Explanation: We split nums to have two subarrays: [1,2], [1,2,1].
The importance value of [1,2] is 2 + (0) = 2.
The importance value of [1,2,1] is 2 + (2) = 4.
The cost of the split is 2 + 4 = 6. It can be shown that this is the minimum possible cost among all the possible splits.

Example 3:

Input: nums = [1,2,1,2,1], k = 5
Output: 10
Explanation: We split nums to have one subarray: [1,2,1,2,1].
The importance value of [1,2,1,2,1] is 5 + (3 + 2) = 10.
The cost of the split is 10. It can be shown that this is the minimum possible cost among all the possible splits.


Constraints:

1 <= nums.length <= 1000
0 <= nums[i] < nums.length
1 <= k <= 109


.spoilerbutton {display:block; border:dashed; padding: 0px 0px; margin:10px 0px; font-size:150%; font-weight: bold; color:#000000; background-color:cyan; outline:0;
}
.spoiler {overflow:hidden;}
.spoiler > div {-webkit-transition: all 0s ease;-moz-transition: margin 0s ease;-o-transition: all 0s ease;transition: margin 0s ease;}
.spoilerbutton[value="Show Message"] + .spoiler > div {margin-top:-500%;}
.spoilerbutton[value="Hide Message"] + .spoiler {padding:5px;}


```

## 中文翻译

将数组分成若干非空子数组，代价 = 各子数组重要值之和。子数组重要值 = k + trimmed长度（trimmed = 去掉只出现一次的元素后的子数组）。求最小代价。

## 解题思路

**区间DP + 频率计数**：

1. dp[i] = 分割 nums[0..i-1] 的最小代价
2. dp[i] = min(dp[j] + cost(j, i-1))，其中 cost = k + trimmed 长度
3. 内层循环从 j=i-1 往左扫，增量维护频率和 trimmed 长度
4. 新元素出现第2次时 trimmed += 2，第3次及以上 trimmed += 1

## Solution

[SourceCode](./solution.js)
