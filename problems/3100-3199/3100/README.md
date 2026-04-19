# [3100] Water Bottles II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/water-bottles-ii/description/)

* algorithms
* Medium (78.15%)
* Likes:    534
* Dislikes: 103
* Testcase Example:  '13\n6'

```md
You are given two integers numBottles and numExchange.
numBottles represents the number of full water bottles that you initially have. In one operation, you can perform one of the following operations:

Drink any number of full water bottles turning them into empty bottles.
Exchange numExchange empty bottles with one full water bottle. Then, increase numExchange by one.

Note that you cannot exchange multiple batches of empty bottles for the same value of numExchange. For example, if numBottles == 3 and numExchange == 1, you cannot exchange 3 empty water bottles for 3 full bottles.
Return the maximum number of water bottles you can drink.

Example 1:


Input: numBottles = 13, numExchange = 6
Output: 15
Explanation: The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.

Example 2:


Input: numBottles = 10, numExchange = 3
Output: 13
Explanation: The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.


Constraints:

1 <= numBottles <= 100
1 <= numExchange <= 100


```

## 中文翻译

给定初始满瓶数 numBottles 和兑换门槛 numExchange。操作：喝掉满瓶变空瓶，或用 numExchange 个空瓶换 1 个满瓶（换后 numExchange++）。求最多喝多少瓶。

## 解题思路

**贪心模拟**

维护 full 和 empty 两个变量。每次喝掉所有满瓶（empty += full, drunk += full, full = 0），然后尝试用空瓶兑换。只要 empty >= numExchange 就兑换一瓶，numExchange++。循环直到无法兑换。

时间复杂度：O(sqrt(numBottles))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
