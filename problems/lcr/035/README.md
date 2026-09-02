# [LCR 035] 最小时间差

## Description


```md
https://leetcode.cn/problems/569nqc/description/
* algorithms
* Medium (66.36%)
* Likes:    54
* Dislikes: -
* Testcase Example:  '["23:59","00:00"]'
给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

示例 1：
输入：timePoints = ["23:59","00:00"]
输出：1
示例 2：
输入：timePoints = ["00:00","23:59","00:00"]
输出：0

提示：
2 <= timePoints <= 2 * 104
timePoints[i] 格式为 "HH:MM"

注意：本题与主站 539 题相同： https://leetcode.cn/problems/minimum-time-difference/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a list of times in the 24-hour format (`"HH:MM"`), find the minimum time difference (in minutes) between any two times.

**Example 1:** `["23:59","00:00"]` → `1`
**Example 2:** `["00:00","23:59","00:00"]` → `0`

**Constraints:** `2 <= timePoints.length <= 2*10^4`, format `"HH:MM"`.

Note: same as LeetCode 539.

---

## Approach

- Convert each time to minutes since midnight (`h*60 + m`), range `[0, 1440)`.
- If a value repeats → answer `0`.
- **Sort** the minutes, then the min difference is the minimum of adjacent gaps and the circular gap `1440 - last + first`.

Complexity: `O(n log n)`.
