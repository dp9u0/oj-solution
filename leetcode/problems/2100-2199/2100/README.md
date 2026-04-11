# [2100] Find Good Days to Rob the Bank

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-good-days-to-rob-the-bank/description/)

* algorithms
* Medium (51.54%)
* Likes:    1005
* Dislikes: 54
* Testcase Example:  '[5,3,3,3,5,6,2]\n2'

```md
You and a gang of thieves are planning on robbing a bank. You are given a 0-indexed integer array security, where security[i] is the number of guards on duty on the ith day. The days are numbered starting from 0. You are also given an integer time.
The ith day is a good day to rob the bank if:

There are at least time days before and after the ith day,
The number of guards at the bank for the time days before i are non-increasing, and
The number of guards at the bank for the time days after i are non-decreasing.

More formally, this means day i is a good day to rob the bank if and only if security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time].
Return a list of all days (0-indexed) that are good days to rob the bank. The order that the days are returned in does not matter.

Example 1:

Input: security = [5,3,3,3,5,6,2], time = 2
Output: [2,3]
Explanation:
On day 2, we have security[0] >= security[1] >= security[2] <= security[3] <= security[4].
On day 3, we have security[1] >= security[2] >= security[3] <= security[4] <= security[5].
No other days satisfy this condition, so days 2 and 3 are the only good days to rob the bank.

Example 2:

Input: security = [1,1,1,1,1], time = 0
Output: [0,1,2,3,4]
Explanation:
Since time equals 0, every day is a good day to rob the bank, so return every day.

Example 3:

Input: security = [1,2,3,4,5,6], time = 2
Output: []
Explanation:
No day has 2 days before it that have a non-increasing number of guards.
Thus, no day is a good day to rob the bank, so return an empty list.


Constraints:

1 <= security.length <= 105
0 <= security[i], time <= 105


```

## 题目翻译

你正在计划抢劫银行。给定一个下标从 0 开始的整数数组 `security`，其中 `security[i]` 是第 i 天值班的警卫数量。天数为编号从 0 开始。还给定一个整数 `time`。

第 i 天是一个适合抢劫的好日子，当且仅当：
- 第 i 天之前和之后各有至少 `time` 天
- 第 i 天之前 `time` 天的警卫数量是非递增的
- 第 i 天之后 `time` 天的警卫数量是非递减的

形式化：`security[i-time] >= security[i-time+1] >= ... >= security[i] <= ... <= security[i+time-1] <= security[i+time]`

返回所有适合抢劫的好日子的列表。

**示例 1：**
输入：security = [5,3,3,3,5,6,2], time = 2
输出：[2,3]

**示例 2：**
输入：security = [1,1,1,1,1], time = 0
输出：[0,1,2,3,4]

**约束：**
- 1 <= security.length <= 10^5
- 0 <= security[i], time <= 10^5

## 解题思路 (Approach)

预处理两个数组：
- `left[i]`：从 i 向左连续非递增的天数（即 security[i-1] >= security[i] >= ... 的长度）
- `right[i]`：从 i 向右连续非递减的天数

对于第 i 天，如果 `left[i] >= time` 且 `right[i] >= time`，则 i 是好日子。

时间复杂度：O(n)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
