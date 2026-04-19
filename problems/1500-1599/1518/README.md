# [1518] Water Bottles

## Description

[LeetCode Problem Description](https://leetcode.com/problems/water-bottles/description/)

* algorithms
* Easy (72.56%)
* Likes:    2282
* Dislikes: 177
* Testcase Example:  '9\n3'

```md
There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.
The operation of drinking a full water bottle turns it into an empty bottle.
Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

Example 1:


Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.

Example 2:


Input: numBottles = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 15 + 3 + 1 = 19.


Constraints:

1 <= numBottles <= 100
2 <= numExchange <= 100


```

## 翻译

有 numBottles 瓶满水的水瓶。你可以用 numExchange 个空瓶换一瓶满的水瓶。喝完一瓶水后，满瓶变成空瓶。求最多能喝多少瓶水。

## Approach

模拟交换过程。每次喝完所有满瓶，得到等量的空瓶。用空瓶尽可能多地换取新满瓶（empty / numExchange），剩余空瓶为 empty % numExchange。重复直到无法再换。累加所有喝过的水瓶数。

时间复杂度 O(log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
