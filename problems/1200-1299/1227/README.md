# [1227] Airplane Seat Assignment Probability

## Description

[LeetCode Problem Description](https://leetcode.com/problems/airplane-seat-assignment-probability/description/)

* algorithms
* Medium (67.27%)
* Likes:    662
* Dislikes: 991
* Testcase Example:  '1'

```md
n passengers board an airplane with exactly n seats. The first passenger has lost the ticket and picks a seat randomly. But after that, the rest of the passengers will:

Take their own seat if it is still available, and
Pick other seats randomly when they find their seat occupied

Return the probability that the nth person gets his own seat.

Example 1:

Input: n = 1
Output: 1.00000
Explanation: The first person can only get the first seat.
Example 2:

Input: n = 2
Output: 0.50000
Explanation: The second person has a probability of 0.5 to get the second seat (when first person gets the first seat).


Constraints:

1 <= n <= 105


```

## 中文翻译

n 个乘客登机，恰好 n 个座位。第一个乘客丢失了票随机选座。之后的乘客：如果自己的座位还在就坐自己的，否则随机选一个剩下的座位。求第 n 个乘客坐到自己座位的概率。

## 解题思路

经典概率问题。关键观察：在任何时刻，"活跃"的选择只涉及 1 号座和 n 号座（其他被占的座位已确定归属）。而 1 号座和 n 号座在这个问题中完全对称，所以它们被选中的概率相等。

因此对于 n >= 2，答案恒为 0.5。n = 1 时答案为 1.0。

## Solution

[SourceCode](./solution.js)
