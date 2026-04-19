# [1052] Grumpy Bookstore Owner

## Description

[LeetCode Problem Description](https://leetcode.com/problems/grumpy-bookstore-owner/description/)

* algorithms
* Medium (63.98%)
* Likes:    2715
* Dislikes: 265
* Testcase Example:  '[1,0,1,2,1,1,7,5]\n[0,1,0,1,0,1,0,1]\n3'

```md
There is a bookstore owner that has a store open for n minutes. You are given an integer array customers of length n where customers[i] is the number of the customers that enter the store at the start of the ith minute and all those customers leave after the end of that minute.
During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.
When the bookstore owner is grumpy, the customers entering during that minute are not satisfied. Otherwise, they are satisfied.
The bookstore owner knows a secret technique to remain not grumpy for minutes consecutive minutes, but this technique can only be used once.
Return the maximum number of customers that can be satisfied throughout the day.

Example 1:

Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation:
The bookstore owner keeps themselves not grumpy for the last 3 minutes.
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

Example 2:

Input: customers = [1], grumpy = [0], minutes = 1
Output: 1


Constraints:

n == customers.length == grumpy.length
1 <= minutes <= n <= 2 * 104
0 <= customers[i] <= 1000
grumpy[i] is either 0 or 1.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 customers 数组（每分钟进入的顾客数）、grumpy 数组（1 表示暴躁，顾客不满意）和 minutes（使用技巧连续不暴躁的时长）。求最多能满意的顾客数。

## 解题思路

**滑动窗口**

1. 先计算不使用技巧时已满意的顾客数 base（grumpy[i]==0 的 customers[i] 之和）
2. 计算一个 gain 数组：grumpy[i]==1 时的 customers[i]，否则为 0（使用技巧后能额外挽回的顾客）
3. 用滑动窗口找长度为 minutes 的 gain 子数组和的最大值 maxGain
4. 答案 = base + maxGain

时间复杂度 O(n)，空间复杂度 O(n)。
