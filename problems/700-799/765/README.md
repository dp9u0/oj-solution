# [765] Couples Holding Hands

## Description

[LeetCode Problem Description](https://leetcode.com/problems/couples-holding-hands/description/)

* algorithms
* Hard (59.26%)
* Likes:    2486
* Dislikes: 131
* Testcase Example:  '[0,2,1,3]'

```md
There are n couples sitting in 2n seats arranged in a row and want to hold hands.
The people and seats are represented by an integer array row where row[i] is the ID of the person sitting in the ith seat. The couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2n - 2, 2n - 1).
Return the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.

Example 1:

Input: row = [0,2,1,3]
Output: 1
Explanation: We only need to swap the second (row[1]) and third (row[2]) person.

Example 2:

Input: row = [3,2,0,1]
Output: 0
Explanation: All couples are already seated side by side.


Constraints:

2n == row.length
2 <= n <= 30​​​​​​​
0 <= row[i] < 2n
All the elements of row are unique.


```

## 中文翻译

2n 个人坐在 2n 个座位上，情侣编号为 (0,1), (2,3), ...。求最少交换次数使每对情侣相邻。

## 解题思路

**贪心+位置映射**

遍历每对相邻座位 (2i, 2i+1)，如果 row[2i] 的伴侣不在 2i+1 位置，就把 2i+1 位置的人和伴侣交换。

用 pos 数组记录每个人的位置，O(1) 找到伴侣位置。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
