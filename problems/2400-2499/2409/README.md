# [2409] 统计共同度过的日子数

## Description


```md
https://leetcode.cn/problems/count-days-spent-together/description/
* algorithms
* Easy (56.41%)
* Likes:    94
* Dislikes: -
* Testcase Example:  '"08-15"\n"08-18"\n"08-16"\n"08-19"'
Alice 和 Bob 计划分别去罗马开会。
给你四个字符串 arriveAlice ，leaveAlice ，arriveBob 和 leaveBob 。Alice 会在日期 arriveAlice 到 leaveAlice 之间在城市里（日期为闭区间），而 Bob 在日期 arriveBob 到 leaveBob 之间在城市里（日期为闭区间）。每个字符串都包含 5 个字符，格式为 "MM-DD" ，对应着一个日期的月和日。
请你返回 Alice和 Bob 同时在罗马的天数。
你可以假设所有日期都在 同一个 自然年，而且 不是 闰年。每个月份的天数分别为：[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 。

示例 1：
输入：arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
输出：3
解释：Alice 从 8 月 15 号到 8 月 18 号在罗马。Bob 从 8 月 16 号到 8 月 19 号在罗马，他们同时在罗马的日期为 8 月 16、17 和 18 号。所以答案为 3 。
示例 2：
输入：arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
输出：0
解释：Alice 和 Bob 没有同时在罗马的日子，所以我们返回 0 。

提示：
所有日期的格式均为 "MM-DD" 。
Alice 和 Bob 的到达日期都 早于或等于 他们的离开日期。
题目测试用例所给出的日期均为 非闰年 的有效日期。
Hint 1: For a given day, determine if Alice or Bob or both are in Rome.
Hint 2: Brute force all 365 days for both Alice and Bob.

```

## Description (English)

Alice and Bob are planning to attend separate conferences in Rome.

You are given four strings `arriveAlice`, `leaveAlice`, `arriveBob`, and `leaveBob`. Alice will be in the city from `arriveAlice` to `leaveAlice` (inclusive), and Bob will be in the city from `arriveBob` to `leaveBob` (inclusive). Each string is 5 characters long in the format `"MM-DD"`, corresponding to the month and day of a date.

Return the number of days that Alice and Bob are both in Rome.

You may assume that all dates occur within the same calendar year and are not leap-year dates. The number of days in each month is: `[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]`.

Example 1:
Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
Output: 3
Explanation: Alice is in Rome from Aug 15 to Aug 18, Bob from Aug 16 to Aug 19. They are both in Rome on Aug 16, 17 and 18, so the answer is 3.

Example 2:
Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
Output: 0
Explanation: They are never in Rome at the same time, so return 0.

Constraints:
- All dates are in the format "MM-DD".
- Each arrival date is earlier than or equal to its corresponding leave date.
- All dates given are valid dates of a non-leap year.

## Solution

### 思路

把每个 "MM-DD" 日期换算成一年中的第几天（day-of-year）：先累加前面各月的天数（前缀和），再加上「日」。这样问题就变成两个闭区间 `[arriveAlice, leaveAlice]` 与 `[arriveBob, leaveBob]`（以整数天为单位）求交集长度：

```
overlap = min(leaveA, leaveB) - max(arriveA, arriveB) + 1
answer  = max(0, overlap)
```

不需要暴力枚举 365 天，O(1) 时间即可。日期字符串格式固定为 "MM-DD"，可以直接用 `substr` 拆出月和日再转数字。

复杂度：时间 O(1)，空间 O(1)。

[SourceCode](./solution.js)
