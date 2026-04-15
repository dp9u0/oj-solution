# [1386] Cinema Seat Allocation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cinema-seat-allocation/description/)

* algorithms
* Medium (44.35%)
* Likes:    994
* Dislikes: 418
* Testcase Example:  '3\n[[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]'

```md

A cinemahas nrows of seats, numbered from 1 to nand there are tenseats in each row, labelled from 1to 10as shown in the figure above.
Given the array reservedSeats containing the numbers of seats already reserved, for example, reservedSeats[i] = [3,8]means the seat located in row 3 and labelled with 8is already reserved.
Return the maximum number of four-person groupsyou can assign on the cinemaseats. A four-person groupoccupies fouradjacent seats in one single row. Seats across an aisle (such as [3,3]and [3,4]) are not considered to be adjacent, but there is an exceptional caseon which an aisle splita four-person group, in that case, the aisle splita four-person group in the middle,which means to have two people on each side.

Example 1:


Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4
Explanation: The figure above shows the optimal allocation for four groups, where seats mark with blue are already reserved and contiguous seats mark with orange are for one group.

Example 2:

Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
Output: 2

Example 3:

Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
Output: 4


Constraints:

1 <= n <= 10^9
1 <=reservedSeats.length <= min(10*n, 10^4)
reservedSeats[i].length == 2
1<=reservedSeats[i][0] <= n
1 <=reservedSeats[i][1] <= 10
All reservedSeats[i] are distinct.


```

## 中文翻译

电影院 n 排座位，每排 10 个（编号1-10）。4人组需要同一排4个连续座位。过道在 4-5 和 6-7 之间，但允许 4 人组被过道恰好从中间分开（即 2+2）。求最多能安排多少个 4 人组。

## 解题思路

**贪心+位运算**

每排 10 个座位，4人组可选位置：[2-5], [4-7], [6-9]。用位掩码表示每排预留状态，检查哪些位置可用。

- 无预留的行：可放 2 组（[2-5]和[6-9]）
- 有预留的行：检查 [2-5], [4-7], [6-9] 哪些可用，贪心选最多

注意 n 很大但 reservedSeats 最多 10^4，所以只处理有预留的行，其余每行 2 组。

时间复杂度：O(m)，空间复杂度：O(m)

## Solution

[SourceCode](./solution.js)
