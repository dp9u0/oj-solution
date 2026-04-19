# [2558] Take Gifts From the Richest Pile

## Description

[LeetCode Problem Description](https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/)

* algorithms
* Easy (75.78%)
* Likes:    772
* Dislikes: 71
* Testcase Example:  '[25,64,9,4,100]\n4'

```md
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

Choose the pile with the maximum number of gifts.
If there is more than one pile with the maximum number of gifts, choose any.
Reduce the number of gifts in the pile to the floor of the square root of the original number of gifts in the pile.

Return the number of gifts remaining after k seconds.

Example 1:

Input: gifts = [25,64,9,4,100], k = 4
Output: 29
Explanation:
The gifts are taken in the following way:
- In the first second, the last pile is chosen and 10 gifts are left behind.
- Then the second pile is chosen and 8 gifts are left behind.
- After that the first pile is chosen and 5 gifts are left behind.
- Finally, the last pile is chosen again and 3 gifts are left behind.
The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.

Example 2:

Input: gifts = [1,1,1,1], k = 4
Output: 4
Explanation:
In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile.
That is, you can&#39;t take any pile with you.
So, the total gifts remaining are 4.


Constraints:

1 <= gifts.length <= 103
1 <= gifts[i] <= 109
1 <= k <= 103


```

## 翻译

给定一个整数数组 gifts 表示各堆礼物的数量。每秒执行以下操作：选择礼物数最多的一堆，将其数量减少为原来的平方根（向下取整）。返回 k 秒后剩余的礼物总数。

## Approach

使用最大堆（priority queue）模拟。每次取出最大值，将其替换为平方根后放回，重复 k 次，最后求和。JS 没有内置堆，用数组排序模拟即可（k 和 n 都不超过 10^3）。

## Solution

[SourceCode](./solution.js)
