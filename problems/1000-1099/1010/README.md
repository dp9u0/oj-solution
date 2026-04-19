# [1010] Pairs of Songs With Total Durations Divisible by 60

## Description

[LeetCode Problem Description](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/)

* algorithms
* Medium (53.44%)
* Likes:    4331
* Dislikes: 183
* Testcase Example:  '[30,20,150,100,40]'

```md
You are given a list of songs where the ith song has a duration of time[i] seconds.
Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Example 1:

Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60

Example 2:

Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.


Constraints:

1 <= time.length <= 6 * 104
1 <= time[i] <= 500


```

## 翻译

给定歌曲时长数组 `time`，返回总时长能被 60 整除的数对 (i, j)（i < j）的个数。

## Approach

**取模计数。** 类似 Two Sum。对每首歌时长取模 60 得到余数 `r`，要找的配对余数为 `(60 - r) % 60`。用长度 60 的数组 `count` 统计各余数出现次数，遍历时先查配对数量再加当前余数。

特殊处理：余数 0 的配对是余数 0，即 `count[0]` 自身配对。

时间复杂度：O(n)，空间复杂度：O(60) = O(1)

## Solution

[SourceCode](./solution.js)
