# [3147] Taking Maximum Energy From the Mystic Dungeon

## Description

[LeetCode Problem Description](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/description/)

* algorithms
* Medium (61.03%)
* Likes:    592
* Dislikes: 40
* Testcase Example:  '[5,2,-10,-5,1]\n3'

```md
In a mystic dungeon, n magicians are standing in a line. Each magician has an attribute that gives you energy. Some magicians can give you negative energy, which means taking energy from you.
You have been cursed in such a way that after absorbing energy from magician i, you will be instantly transported to magician (i + k). This process will be repeated until you reach the magician where (i + k) does not exist.
In other words, you will choose a starting point and then teleport with k jumps until you reach the end of the magicians&#39; sequence, absorbing all the energy during the journey.
You are given an array energy and an integer k. Return the maximum possible energy you can gain.
Note that when you reach a magician, you must take energy from them, whether it is negative or positive energy.

Example 1:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
"> energy = [5,2,-10,-5,1], k = 3
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
"> 3
Explanation: We can gain a total energy of 3 by starting from magician 1 absorbing 2 + 1 = 3.

Example 2:

border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
"> energy = [-2,-3,-1], k = 2
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
"> -1
Explanation: We can gain a total energy of -1 by starting from magician 2.


Constraints:

1 <= energy.length <= 105
-1000 <= energy[i] <= 1000
1 <= k <= energy.length - 1


​​​​​​

```

## 翻译

从数组中选一个起点，每次跳 k 步直到越界，收集路径上所有值。求最大收益。

## 解题思路

从后往前 DP：dp[i] = energy[i] + dp[i+k]（如果 i+k < n），否则 dp[i] = energy[i]。从右往左遍历一次即可，O(n)。

## Solution

[SourceCode](./solution.js)
