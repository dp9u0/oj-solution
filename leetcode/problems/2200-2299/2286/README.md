# [2286] Booking Concert Tickets in Groups

## Description

[LeetCode Problem Description](https://leetcode.com/problems/booking-concert-tickets-in-groups/description/)

* algorithms
* Hard (19.51%)
* Likes:    354
* Dislikes: 61
* Testcase Example:  '["BookMyShow","gather","gather","scatter","scatter"]\n' +

```md
'[[2,5],[4,0],[2,0],[5,1],[5,1]]'
A concert hall has n rows numbered from 0 to n - 1, each with m seats, numbered from 0 to m - 1. You need to design a ticketing system that can allocate seats in the following cases:

If a group of k spectators can sit together in a row.
If every member of a group of k spectators can get a seat. They may or may not sit together.

Note that the spectators are very picky. Hence:

They will book seats only if each member of their group can get a seat with row number less than or equal to maxRow. maxRow can vary from group to group.
In case there are multiple rows to choose from, the row with the smallest number is chosen. If there are multiple seats to choose in the same row, the seat with the smallest number is chosen.

Implement the BookMyShow class:

BookMyShow(int n, int m) Initializes the object with n as number of rows and m as number of seats per row.
int[] gather(int k, int maxRow) Returns an array of length 2 denoting the row and seat number (respectively) of the first seat being allocated to the k members of the group, who must sit together. In other words, it returns the smallest possible r and c such that all [c, c + k - 1] seats are valid and empty in row r, and r <= maxRow. Returns [] in case it is not possible to allocate seats to the group.
boolean scatter(int k, int maxRow) Returns true if all k members of the group can be allocated seats in rows 0 to maxRow, who may or may not sit together. If the seats can be allocated, it allocates k seats to the group with the smallest row numbers, and the smallest possible seat numbers in each row. Otherwise, returns false.


Example 1:

Input
['BookMyShow', 'gather', 'gather', 'scatter', 'scatter']
[[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]]
Output
[null, [0, 0], [], true, false]
Explanation
BookMyShow bms = new BookMyShow(2, 5); // There are 2 rows with 5 seats each
bms.gather(4, 0); // return [0, 0]
// The group books seats [0, 3] of row 0.
bms.gather(2, 0); // return []
// There is only 1 seat left in row 0,
// so it is not possible to book 2 consecutive seats.
bms.scatter(5, 1); // return True
// The group books seat 4 of row 0 and seats [0, 3] of row 1.
bms.scatter(5, 1); // return False
// There is only one seat left in the hall.


Constraints:

1 <= n <= 5 * 104
1 <= m, k <= 109
0 <= maxRow <= n - 1
At most 5 * 104 calls in total will be made to gather and scatter.


```

## 中文翻译

设计一个演唱会订票系统。有 n 排座位（编号 0 到 n-1），每排 m 个座位（编号 0 到 m-1）。

实现两个操作：
- `gather(k, maxRow)`：在 ≤ maxRow 的排中找最小的排 r，使其有 k 个连续空位，返回 [r, 起始座位号]。没有则返回 []。
- `scatter(k, maxRow)`：在 0 到 maxRow 排中总共分配 k 个座位（可分散），从最小排号和最小座位号开始分配。成功返回 true，否则 false。

约束：n ≤ 5×10^4, m ≤ 10^9, 最多 5×10^4 次调用。

## 解题思路

**线段树维护区间和与区间最大值**：

1. 每排只记录已用座位数 `used[row]`（从座位 0 连续分配）
2. 线段树维护两个信息：区间内已用座位之和（sum）、区间内最大可用座位数（max）
3. `gather`：用线段树二分查找 [0, maxRow] 中第一个 maxAvail ≥ k 的排
4. `scatter`：先检查总可用座位数，再用 firstNonFull 指针逐排填充
5. 摊还复杂度：每排最多被完全填满一次，总操作 O((n + q) log n)

## Solution

[SourceCode](./solution.js)
