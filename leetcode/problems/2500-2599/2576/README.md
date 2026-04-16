# [2576] Find the Maximum Number of Marked Indices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/description/)

* algorithms
* Medium (41.19%)
* Likes:    601
* Dislikes: 29
* Testcase Example:  '[3,5,2,4]'

```md
You are given a 0-indexed integer array nums.
Initially, all of the indices are unmarked. You are allowed to make this operation any number of times:

Pick two different unmarked indices i and j such that 2 * nums[i] <= nums[j], then mark i and j.

Return the maximum possible number of marked indices in nums using the above operation any number of times.

Example 1:

Input: nums = [3,5,2,4]
Output: 2
Explanation: In the first operation: pick i = 2 and j = 1, the operation is allowed because 2 * nums[2] <= nums[1]. Then mark index 2 and 1.
It can be shown that there&#39;s no other valid operation so the answer is 2.

Example 2:

Input: nums = [9,2,5,4]
Output: 4
Explanation: In the first operation: pick i = 3 and j = 0, the operation is allowed because 2 * nums[3] <= nums[0]. Then mark index 3 and 0.
In the second operation: pick i = 1 and j = 2, the operation is allowed because 2 * nums[1] <= nums[2]. Then mark index 1 and 2.
Since there is no other operation, the answer is 4.

Example 3:

Input: nums = [7,6,8]
Output: 0
Explanation: There is no valid operation to do, so the answer is 0.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


.spoilerbutton {display:block; border:dashed; padding: 0px 0px; margin:10px 0px; font-size:150%; font-weight: bold; color:#000000; background-color:cyan; outline:0;
}
.spoiler {overflow:hidden;}
.spoiler > div {-webkit-transition: all 0s ease;-moz-transition: margin 0s ease;-o-transition: all 0s ease;transition: margin 0s ease;}
.spoilerbutton[value="Show Message"] + .spoiler > div {margin-top:-500%;}
.spoilerbutton[value="Hide Message"] + .spoiler {padding:5px;}


```

## 题目翻译

给定一个下标从 0 开始的整数数组 `nums`。
初始时所有索引都未标记。你可以执行以下操作任意次数：

选择两个不同的未标记索引 i 和 j，使得 `2 * nums[i] <= nums[j]`，然后标记 i 和 j。

返回通过上述操作能标记的最多索引数。

## 解题思路

**贪心 + 双指针**。

- 将数组排序。
- 将数组分成两半：前半部分作为较小的候选（nums[i]），后半部分作为较大的候选（nums[j]）。
- 用双指针从前往后匹配：对于每个较小的数，找到后半部分中第一个满足 `2 * nums[i] <= nums[j]` 的数配对。
- 这样贪心地匹配可以最大化配对数。

## Solution

[SourceCode](./solution.js)
