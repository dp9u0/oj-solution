# [2127] Maximum Employees to Be Invited to a Meeting

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/description/)

* algorithms
* Hard (61.78%)
* Likes:    1688
* Dislikes: 70
* Testcase Example:  '[2,2,1,2]'

```md
A company is organizing a meeting and has a list of n employees, waiting to be invited. They have arranged for a large circular table, capable of seating any number of employees.
The employees are numbered from 0 to n - 1. Each employee has a favorite person and they will attend the meeting only if they can sit next to their favorite person at the table. The favorite person of an employee is not themself.
Given a 0-indexed integer array favorite, where favorite[i] denotes the favorite person of the ith employee, return the maximum number of employees that can be invited to the meeting.

Example 1:


Input: favorite = [2,2,1,2]
Output: 3
Explanation:
The above figure shows how the company can invite employees 0, 1, and 2, and seat them at the round table.
All employees cannot be invited because employee 2 cannot sit beside employees 0, 1, and 3, simultaneously.
Note that the company can also invite employees 1, 2, and 3, and give them their desired seats.
The maximum number of employees that can be invited to the meeting is 3.

Example 2:

Input: favorite = [1,2,0]
Output: 3
Explanation:
Each employee is the favorite person of at least one other employee, and the only way the company can invite them is if they invite every employee.
The seating arrangement will be the same as that in the figure given in example 1:
- Employee 0 will sit between employees 2 and 1.
- Employee 1 will sit between employees 0 and 2.
- Employee 2 will sit between employees 1 and 0.
The maximum number of employees that can be invited to the meeting is 3.

Example 3:


Input: favorite = [3,0,1,4,1]
Output: 4
Explanation:
The above figure shows how the company will invite employees 0, 1, 3, and 4, and seat them at the round table.
Employee 2 cannot be invited because the two spots next to their favorite employee 1 are taken.
So the company leaves them out of the meeting.
The maximum number of employees that can be invited to the meeting is 4.


Constraints:

n == favorite.length
2 <= n <= 105
0 <= favorite[i] <=n - 1
favorite[i] != i


```

## 翻译

n 个员工围坐圆桌，员工 i 只有在旁边坐着 favorite[i] 时才出席。求最多能邀请多少人。favorite 构成函数图（每个节点恰好一个出边）。

## 解题思路

函数图中的环分两类：1) 长度为 2 的互惠对（a↔b），两侧可延伸链，多对可拼接，总和为 Σ(2+链a+链b)；2) 长度>2 的环，只能坐环上所有人。答案 = max(最长环长度, 所有互惠对链总和)。用状态标记找环，反图 DFS 求链长。O(n)。

## Solution

[SourceCode](./solution.js)
