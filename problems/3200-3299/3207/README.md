# [3207] Maximum Points After Enemy Battles

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-points-after-enemy-battles/description/)

* algorithms
* Medium (33.28%)
* Likes:    130
* Dislikes: 43
* Testcase Example:  '[3,2,2]\n2'

```md
You are given an integer array enemyEnergies denoting the energy values of various enemies.
You are also given an integer currentEnergy denoting the amount of energy you have initially.
You start with 0 points, and all the enemies are unmarked initially.
You can perform either of the following operations zero or multiple times to gain points:

Choose an unmarked enemy, i, such that currentEnergy >= enemyEnergies[i]. By choosing this option:

You gain 1 point.
Your energy is reduced by the enemy&#39;s energy, i.e. currentEnergy = currentEnergy - enemyEnergies[i].


If you have at least 1 point, you can choose an unmarked enemy, i. By choosing this option:

Your energy increases by the enemy&#39;s energy, i.e. currentEnergy = currentEnergy + enemyEnergies[i].
The enemy i is marked.



Return an integer denoting the maximum points you can get in the end by optimally performing operations.

Example 1:

Input: enemyEnergies = [3,2,2], currentEnergy = 2
Output: 3
Explanation:
The following operations can be performed to get 3 points, which is the maximum:

First operation on enemy 1: points increases by 1, and currentEnergy decreases by 2. So, points = 1, and currentEnergy = 0.
Second operation on enemy 0: currentEnergy increases by 3, and enemy 0 is marked. So, points = 1, currentEnergy = 3, and marked enemies = [0].
First operation on enemy 2: points increases by 1, and currentEnergy decreases by 2. So, points = 2, currentEnergy = 1, and marked enemies = [0].
Second operation on enemy 2: currentEnergy increases by 2, and enemy 2 is marked. So, points = 2, currentEnergy = 3, and marked enemies = [0, 2].
First operation on enemy 1: points increases by 1, and currentEnergy decreases by 2. So, points = 3, currentEnergy = 1, and marked enemies = [0, 2].


Example 2:

Input: enemyEnergies = [2], currentEnergy = 10
Output: 5
Explanation:
Performing the first operation 5 times on enemy 0 results in the maximum number of points.


Constraints:

1 <= enemyEnergies.length <= 105
1 <= enemyEnergies[i] <= 109
0 <= currentEnergy <= 109


```

## 题目翻译

给定敌人能量数组 enemyEnergies 和初始能量 currentEnergy。初始 0 分，所有敌人未标记。可执行两种操作：1) 用操作：选择未标记敌人 i（需 currentEnergy >= 其能量），获得 1 分，扣除对应能量；2) 标记操作：若有至少 1 分，选择未标记敌人 i，获得其能量并标记。求最大得分。

## 解题思路

**贪心**

关键观察：用最小能量的敌人反复刷分，标记其余所有敌人获取能量。策略：
1. 若 currentEnergy < 最小能量，无法开始，返回 0。
2. 花 minE 获得第 1 分，再标记除一个最小敌人外的所有敌人获取能量。
3. 用累积能量反复刷最小敌人得分。

公式：`floor((currentEnergy + totalSum - minE) / minE)`，O(n) 时间。

## Solution

[SourceCode](./solution.js)
