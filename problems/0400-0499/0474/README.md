# [474] Ones and Zeroes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/ones-and-zeroes/description/)

* algorithms
* Medium (53.73%)
* Likes:    6133
* Dislikes: 510
* Testcase Example:  '["10","0001","111001","1","0"]\n5\n3'

```md
You are given an array of binary strings strs and two integers m and n.
Return the size of the largest subset of strs such that there are at most m 0&#39;s and n 1&#39;s in the subset.
A set x is a subset of a set y if all elements of x are also elements of y.

Example 1:

Input: strs = ['10','0001','111001','1','0'], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0&#39;s and 3 1&#39;s is {'10', '0001', '1', '0'}, so the answer is 4.
Other valid but smaller subsets include {'0001', '1'} and {'10', '1', '0'}.
{'111001'} is an invalid subset because it contains 4 1&#39;s, greater than the maximum of 3.

Example 2:

Input: strs = ['10','0','1'], m = 1, n = 1
Output: 2
Explanation: The largest subset is {'0', '1'}, so the answer is 2.


Constraints:

1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] consists only of digits &#39;0&#39; and &#39;1&#39;.
1 <= m, n <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定二进制字符串数组 `strs` 和整数 `m`、`n`。返回最大子集大小，使子集中 0 的总数 ≤ m、1 的总数 ≤ n。

示例 1：`['10','0001','111001','1','0'], m=5, n=3` → `4`
示例 2：`['10','0','1'], 1, 1` → `2`

约束：`|strs| <= 600`，`|strs[i]| <= 100`，`m, n <= 100`

## 解题思路

经典**二维费用背包**（费用 = 0 的个数 + 1 的个数，价值 = 1）：`dp[i][j]` = 用 ≤ i 个 0、≤ j 个 1 能选的最大字符串数；每个字符串作为物品，**倒序**遍历两维容量做 0/1 背包。O(len·m·n)。
