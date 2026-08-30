# [3986] Number of Elapsed Seconds Between Two Times

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-elapsed-seconds-between-two-times/description/)

* algorithms
* Easy (82.38%)
* Likes:    43
* Dislikes: 3
* Testcase Example:  '"01:00:00"\n"01:00:25"'

```md
You are given two valid times startTime and endTime, each represented as a string in the format 'HH:MM:SS'.
Return the number of seconds that have elapsed from startTime to endTime.

Example 1:

Input: startTime = '01:00:00', endTime = '01:00:25'
Output: 25
Explanation:
endTime is 25 seconds ahead of startTime.
Example 2:

Input: startTime = '12:34:56', endTime = '13:00:00'
Output: 1504
Explanation:
endTime is 25 minutes and 4 seconds ahead of startTime, which equals 1504 seconds.


Constraints:

startTime.length == 8
endTime.length == 8
startTime and endTime are valid times in the format 'HH:MM:SS'
00 <= HH <= 23
00 <= MM <= 59
00 <= SS <= 59
endTime is not earlier than startTime


```

## 中文翻译

给你两个有效的时间 `startTime` 和 `endTime`，均以 `'HH:MM:SS'` 格式的字符串表示。
返回从 `startTime` 到 `endTime` 经过的秒数。

示例 1：

输入：startTime = '01:00:00', endTime = '01:00:25'
输出：25
解释：
endTime 比 startTime 晚 25 秒。

示例 2：

输入：startTime = '12:34:56', endTime = '13:00:00'
输出：1504
解释：
endTime 比 startTime 晚 25 分钟 4 秒，即 1504 秒。

约束：
- startTime.length == 8
- endTime.length == 8
- startTime 和 endTime 都是有效的 'HH:MM:SS' 格式时间
- 00 <= HH <= 23
- 00 <= MM <= 59
- 00 <= SS <= 59
- endTime 不早于 startTime

## 解题思路

将每个时间字符串按 `:` 分割，转换为从当天 00:00:00 起的总秒数：`HH * 3600 + MM * 60 + SS`。
由于题目保证 endTime 不早于 startTime，直接返回两个总秒数之差即可。

## Solution

[SourceCode](./solution.js)
