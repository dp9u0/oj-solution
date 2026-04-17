# [1845] Seat Reservation Manager

## Description

[LeetCode Problem Description](https://leetcode.com/problems/seat-reservation-manager/description/)

* algorithms
* Medium (67.14%)
* Likes:    1481
* Dislikes: 92
* Testcase Example:  '["SeatManager","reserve","reserve","unreserve","reserve","reserve","reserve","reserve","unreserve"]\n' +

```md
'[[5],[],[],[2],[],[],[],[],[5]]'
Design a system that manages the reservation state of n seats that are numbered from 1 to n.
Implement the SeatManager class:

SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. All seats are initially available.
int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.


Example 1:

Input
['SeatManager', 'reserve', 'reserve', 'unreserve', 'reserve', 'reserve', 'reserve', 'reserve', 'unreserve']
[[5], [], [], [2], [], [], [], [], [5]]
Output
[null, 1, 2, null, 2, 3, 4, 5, null]
Explanation
SeatManager seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
seatManager.reserve();    // All seats are available, so return the lowest numbered seat, which is 1.
seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
seatManager.reserve();    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
seatManager.reserve();    // The available seats are [3,4,5], so return the lowest of them, which is 3.
seatManager.reserve();    // The available seats are [4,5], so return the lowest of them, which is 4.
seatManager.reserve();    // The only available seat is seat 5, so return 5.
seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].


Constraints:

1 <= n <= 105
1 <= seatNumber <= n
For each call to reserve, it is guaranteed that there will be at least one unreserved seat.
For each call to unreserve, it is guaranteed that seatNumber will be reserved.
At most 105 calls in total will be made to reserve and unreserve.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

设计座位预约管理器，管理编号 1~n 的座位。reserve() 返回最小编号的可用座位并预约它，unreserve(seatNumber) 释放该座位。

## 解题思路

使用最小堆维护可用座位集合。初始化时将 1~n 全部入堆，reserve 弹出堆顶，unreserve 将座位号 push 回堆。每次操作 O(log n)。
