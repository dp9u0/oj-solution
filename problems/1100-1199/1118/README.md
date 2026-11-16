# [1118] 一月有多少天

## Description


```md
https://leetcode.cn/problems/number-of-days-in-a-month/description/
* algorithms
* Easy (66.67%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '1992\n7'
指定年份 year 和月份 month，返回 该月天数 。

示例 1：
输入：year = 1992, month = 7
输出：31
示例 2：
输入：year = 2000, month = 2
输出：29
示例 3：
输入：year = 1900, month = 2
输出：28

提示：
1583 <= year <= 2100
1 <= month <= 12
Hint 1: Does February have 28 days or 29 days?
Hint 2: Think of Leap years.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a `year` and `month`, return the number of days in that month.

**Constraints:**
- 1900 <= year, 1 <= month <= 12

## Approach

查表:小月 30、大月 31;二月平年 28、闰年 29。闰年规则:能被 4 整除且不被 100 整除,或能被 400 整除。

时间 O(1),空间 O(1)。
