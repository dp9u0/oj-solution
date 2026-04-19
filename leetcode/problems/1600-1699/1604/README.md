# [1604] Alert Using Same Key-Card Three or More Times in a One Hour Period

## Description

[LeetCode Problem Description](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/description/)

* algorithms
* Medium (46.19%)
* Likes:    339
* Dislikes: 441
* Testcase Example:  '["daniel","daniel","daniel","luis","luis","luis","luis"]\n' +

```md
'["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]'
LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker&#39;s name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.
You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person&#39;s name and the time when their key-card was used in a single day.
Access times are given in the 24-hour time format 'HH:MM', such as '23:51' and '09:49'.
Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.
Notice that '10:00' - '11:00' is considered to be within a one-hour period, while '22:51' - '23:52' is not considered to be within a one-hour period.

Example 1:

Input: keyName = ['daniel','daniel','daniel','luis','luis','luis','luis'], keyTime = ['10:00','10:40','11:00','09:00','11:00','13:00','15:00']
Output: ['daniel']
Explanation: 'daniel' used the keycard 3 times in a one-hour period ('10:00','10:40', '11:00').

Example 2:

Input: keyName = ['alice','alice','alice','bob','bob','bob','bob'], keyTime = ['12:01','12:00','18:00','21:00','21:20','21:30','23:00']
Output: ['bob']
Explanation: 'bob' used the keycard 3 times in a one-hour period ('21:00','21:20', '21:30').


Constraints:

1 <= keyName.length, keyTime.length <= 105
keyName.length == keyTime.length
keyTime[i] is in the format 'HH:MM'.
[keyName[i], keyTime[i]] is unique.
1 <= keyName[i].length <= 10
keyName[i] contains only lowercase English letters.


```

## 翻译

给定员工刷卡记录 keyName 和 keyTime，找出在一小时内刷卡三次及以上的员工。时间格式为 HH:MM，返回按字母升序排列的员工名列表。注意 "10:00" - "11:00" 视为一小时内（差值 ≤ 60 分钟）。

## 解题思路

按人名分组后排序时间，用滑动窗口检查任意连续三次使用是否在一小时内（times[i] - times[i-2] <= 60）。

## Solution

[SourceCode](./solution.js)
