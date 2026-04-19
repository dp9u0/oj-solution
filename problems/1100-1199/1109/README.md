# [1109] Corporate Flight Bookings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/corporate-flight-bookings/description/)

* algorithms
* Medium (66.94%)
* Likes:    1870
* Dislikes: 168
* Testcase Example:  '[[1,2,10],[2,3,20],[2,5,25]]\n5'

```md
There are n flights that are labeled from 1 to n.
You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi] represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved for each flight in the range.
Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i.

Example 1:

Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
Output: [10,55,45,25,25]
Explanation:
Flight labels:        1   2   3   4   5
Booking 1 reserved:  10  10
Booking 2 reserved:      20  20
Booking 3 reserved:      25  25  25  25
Total seats:         10  55  45  25  25
Hence, answer = [10,55,45,25,25]

Example 2:

Input: bookings = [[1,2,10],[2,2,15]], n = 2
Output: [10,25]
Explanation:
Flight labels:        1   2
Booking 1 reserved:  10  10
Booking 2 reserved:      15
Total seats:         10  25
Hence, answer = [10,25]


Constraints:

1 <= n <= 2 * 104
1 <= bookings.length <= 2 * 104
bookings[i].length == 3
1 <= firsti <= lasti <= n
1 <= seatsi <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

有 n 个航班（编号 1 到 n），给定预订记录 bookings，每条记录 [first, last, seats] 表示为 first 到 last 航班各预订 seats 个座位。返回每个航班的总预订座位数。

## 解题思路

**差分数组**

经典区间加法问题。对每个 booking [first, last, seats]，在差分数组 diff[first-1] 加上 seats，在 diff[last] 减去 seats。最后对差分数组求前缀和得到结果。

时间复杂度 O(n + m)，空间复杂度 O(n)。
