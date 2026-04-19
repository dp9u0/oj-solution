# [1769] Minimum Number of Operations to Move All Balls to Each Box

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/)

* algorithms
* Medium (90.12%)
* Likes:    3133
* Dislikes: 139
* Testcase Example:  '"110"'

```md
You have n boxes. You are given a binary string boxes of length n, where boxes[i] is &#39;0&#39; if the ith box is empty, and &#39;1&#39; if it contains one ball.
In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.
Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
Each answer[i] is calculated considering the initial state of the boxes.

Example 1:

Input: boxes = '110'
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

Example 2:

Input: boxes = '001011'
Output: [11,8,5,4,3,4]

Constraints:

n == boxes.length
1 <= n <= 2000
boxes[i] is either &#39;0&#39; or &#39;1&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

你有 n 个盒子，给定一个长度为 n 的二进制字符串 boxes，其中 boxes[i] 为 '0' 表示第 i 个盒子为空，'1' 表示该盒子有一个球。

每次操作可以将一个球从一个盒子移动到相邻的盒子（即下标差为 1）。移动后一个盒子可以有多个球。

返回一个长度为 n 的数组 answer，其中 answer[i] 是将所有球移动到第 i 个盒子所需的最少操作次数。每个 answer[i] 都基于盒子的初始状态独立计算。

## Approach

使用两次遍历的前缀和思想：

1. 从左到右遍历，维护左边球的个数 `leftCount` 和左边累计操作数 `leftOps`。对于位置 i，`leftOps` 表示把左边所有球移到 i 的操作数。
2. 从右到左遍历，维护右边球的个数 `rightCount` 和右边累计操作数 `rightOps`。
3. `answer[i] = leftOps + rightOps`。

时间复杂度 O(n)，空间复杂度 O(n)。
