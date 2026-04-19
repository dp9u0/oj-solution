# [3881] Direction Assignments with Exactly K Visible People

## Description

[LeetCode Problem Description](https://leetcode.com/problems/direction-assignments-with-exactly-k-visible-people/description/)

* algorithms
* Medium (36.07%)
* Likes:    59
* Dislikes: 18
* Testcase Example:  '3\n1\n0'

```md
You are given three integers n, pos, and k.
There are n people standing in a line indexed from 0 to n - 1. Each person independently chooses a direction:

&#39;L&#39;: visible only to people on their right
&#39;R&#39;: visible only to people on their left

A person at index pos sees others as follows:

A person i < pos is visible if and only if they choose &#39;L&#39;.
A person i > pos is visible if and only if they choose &#39;R&#39;.

Return the number of possible direction assignments such that the person at index pos sees exactly k people.
Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: n = 3, pos = 1, k = 0
Output: 2
Explanation:​​​​​​​

Index 0 is to the left of pos = 1, and index 2 is to the right of pos = 1.
To see k = 0 people, index 0 must choose &#39;R&#39; and index 2 must choose &#39;L&#39;, keeping both invisible.
The person at index 1 can choose &#39;L&#39; or &#39;R&#39; since it does not affect the count. Thus, the answer is 2.


Example 2:

Input: n = 3, pos = 2, k = 1
Output: 4
Explanation:

Index 0 and index 1 are left of pos = 2, and there is no index to the right.
To see k = 1 person, exactly one of index 0 or index 1 must choose &#39;L&#39;, and the other must choose &#39;R&#39;.
There are 2 ways to choose which index is visible from the left.
The person at index 2 can choose &#39;L&#39; or &#39;R&#39; since it does not affect the count. Thus, the answer is 2 + 2 = 4.


Example 3:

Input: n = 1, pos = 0, k = 0
Output: 2
Explanation:

There are no indices to the left or right of pos = 0.
To see k = 0 people, no additional condition is required.
The person at index 0 can choose &#39;L&#39; or &#39;R&#39;. Thus, the answer is 2.



Constraints:

1 <= n <= 105
0 <= pos, k <= n - 1


```

## 题目翻译

n 个人排成一行，每人独立选择方向 L 或 R。位于 pos 的人能看到：左边选择 L 的人 + 右边选择 R 的人。求使得 pos 处恰好看到 k 人的方向分配方案数。

## 解题思路

**组合数学**

左边 pos 人中选 l 人选 L：C(pos, l) 种。右边 n-1-pos 人中选 r 人选 R：C(n-1-pos, r) 种。要求 l+r=k。

由 Vandermonde 恒等式：sum_{l+r=k} C(pos,l) * C(n-1-pos,r) = C(n-1, k)。

pos 处的人有 2 种选择，因此答案 = 2 * C(n-1, k) mod (10^9+7)。

用阶乘 + 逆元预计算组合数。

## Solution

[SourceCode](./solution.js)
