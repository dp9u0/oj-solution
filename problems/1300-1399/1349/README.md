# [1349] Maximum Students Taking Exam

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-students-taking-exam/description/)

* algorithms
* Hard (53.69%)
* Likes:    901
* Dislikes: 19
* Testcase Example:  '[["#",".","#","#",".","#"],[".","#","#","#","#","."],["#",".","#","#",".","#"]]'

```md
Given a m* nmatrix seatsthat represent seats distributionsin a classroom.If a seatisbroken, it is denoted by &#39;#&#39; character otherwise it is denoted by a &#39;.&#39; character.
Students can see the answers of those sitting next to the left, right, upper left and upper right, but he cannot see the answers of the student sittingdirectly in front or behind him. Return the maximum number of students that can take the exam togetherwithout any cheating being possible.
Students must be placed in seats in good condition.

Example 1:


Input: seats = [['#','.','#','#','.','#'],
['.','#','#','#','#','.'],
['#','.','#','#','.','#']]
Output: 4
Explanation: Teacher can place 4 students in available seats so they don&#39;t cheat on the exam.

Example 2:

Input: seats = [['.','#'],
['#','#'],
['#','.'],
['#','#'],
['.','#']]
Output: 3
Explanation: Place all students in available seats.

Example 3:

Input: seats = [['#','.','.','.','#'],
['.','#','.','#','.'],
['.','.','#','.','.'],
['.','#','.','#','.'],
['#','.','.','.','#']]
Output: 10
Explanation: Place students in available seats in column 1, 3 and 5.


Constraints:

seatscontains only characters&#39;.&#39;and&#39;#&#39;.
m ==seats.length
n ==seats[i].length
1 <= m <= 8
1 <= n <= 8


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个 m×n 的教室座位矩阵 seats，'#' 表示坏座位，'.' 表示好座位。学生可以看到左边、右边、左上、右上的同学的答案，但不能看到正前方或正后方的。求最多能有多少学生同时参加考试且不会发生作弊。

## 解题思路

状态压缩 DP。m, n ≤ 8，每行可用一个 8 位掩码表示就座方案。

1. 对每行预处理所有合法掩码：不能有相邻 1（同行左右不能相邻），且只能坐在好座位上
2. 行间约束：当前行掩码与上一行掩码不能有对角相邻（mask & (prev<<1) == 0 且 mask & (prev>>1) == 0）
3. dp[row][mask] = popcount(mask) + max(dp[row-1][所有兼容的 prev_mask])
4. 答案为最后一行所有合法掩码的 dp 值的最大值

时间复杂度 O(m × 2^n × 2^n)，空间 O(2^n)
