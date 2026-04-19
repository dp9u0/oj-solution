# [3771] Total Score of Dungeon Runs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/total-score-of-dungeon-runs/description/)

* algorithms
* Medium (30.73%)
* Likes:    111
* Dislikes: 14
* Testcase Example:  '11\n[3,6,7]\n[4,2,5]'

```md
You are given a positive integer hp and two positive 1-indexed integer arrays damage and requirement.
There is a dungeon with n trap rooms numbered from 1 to n. Entering room i reduces your health points by damage[i]. After that reduction, if your remaining health points are at least requirement[i], you earn 1 point for that room.
Let score(j) be the number of points you get if you start with hp health points and enter the rooms j, j + 1, ..., n in this order.
Return the integer score(1) + score(2) + ... + score(n), the sum of scores over all starting rooms.
Note: You cannot skip rooms. You can finish your journey even if your health points become non-positive.

Example 1:

Input: hp = 11, damage = [3,6,7], requirement = [4,2,5]
Output: 3
Explanation:
score(1) = 2, score(2) = 1, score(3) = 0. The total score is 2 + 1 + 0 = 3.
As an example, score(1) = 2 because you get 2 points if you start from room 1.

You start with 11 health points.
Enter room 1. Your health points are now 11 - 3 = 8. You get 1 point because 8 >= 4.
Enter room 2. Your health points are now 8 - 6 = 2. You get 1 point because 2 >= 2.
Enter room 3. Your health points are now 2 - 7 = -5. You do not get any points because -5 < 5.


Example 2:

Input: hp = 2, damage = [10000,1], requirement = [1,1]
Output: 1
Explanation:
score(1) = 0, score(2) = 1. The total score is 0 + 1 = 1.
score(1) = 0 because you do not get any points if you start from room 1.

You start with 2 health points.
Enter room 1. Your health points are now 2 - 10000 = -9998. You do not get any points because -9998 < 1.
Enter room 2. Your health points are now -9998 - 1 = -9999. You do not get any points because -9999 < 1.

score(2) = 1 because you get 1 point if you start from room 2.

You start with 2 health points.
Enter room 2. Your health points are now 2 - 1 = 1. You get 1 point because 1 >= 1.



Constraints:

1 <= hp <= 109
1 <= n == damage.length == requirement.length <= 105
1 <= damage[i], requirement[i] <= 104


```

## 题目翻译

给定 hp 和两个数组 damage、requirement（1-indexed）。进入房间 i 扣 damage[i] 血，扣血后剩余血量 >= requirement[i] 则得 1 分。score(j) 为从房间 j 开始（血量 hp）走到末尾的得分。返回 score(1) + score(2) + ... + score(n)。

## 解题思路

从右到左扫描，维护累积伤害 prefixDmg。对于起始房间 j，进入房间 i 时的血量为 hp - (damage[j] + ... + damage[i])。得分条件：hp - prefixDmg[j..i] >= requirement[i]，即 hp - prefixDmg[i] + prefixDmg[j-1] >= requirement[i]，即 hp + prefixDmg[j-1] >= requirement[i] + prefixDmg[i]。

从右到左扫描时，用有序结构维护已扫描的 (requirement[i] + prefixDmg[i]) 值，对每个起始点 j 查询有多少个值 <= hp + prefixDmg[j-1]。

可以用 Fenwick Tree（树状数组）离散化后统计。

时间复杂度 O(n log n)

## Solution

[SourceCode](./solution.js)
