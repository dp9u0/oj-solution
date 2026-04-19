# [2086] Minimum Number of Food Buckets to Feed the Hamsters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/description/)

* algorithms
* Medium (48.20%)
* Likes:    574
* Dislikes: 31
* Testcase Example:  '"H..H"'

```md
You are given a 0-indexed string hamsters where hamsters[i] is either:

&#39;H&#39; indicating that there is a hamster at index i, or
&#39;.&#39; indicating that index i is empty.

You will add some number of food buckets at the empty indices in order to feed the hamsters. A hamster can be fed if there is at least one food bucket to its left or to its right. More formally, a hamster at index i can be fed if you place a food bucket at index i - 1 and/or at index i + 1.
Return the minimum number of food buckets you should place at empty indices to feed all the hamsters or -1 if it is impossible to feed all of them.

Example 1:


Input: hamsters = 'H..H'
Output: 2
Explanation: We place two food buckets at indices 1 and 2.
It can be shown that if we place only one food bucket, one of the hamsters will not be fed.

Example 2:


Input: hamsters = '.H.H.'
Output: 1
Explanation: We place one food bucket at index 2.

Example 3:


Input: hamsters = '.HHH.'
Output: -1
Explanation: If we place a food bucket at every empty index as shown, the hamster at index 2 will not be able to eat.


Constraints:

1 <= hamsters.length <= 105
hamsters[i] is either&#39;H&#39; or &#39;.&#39;.


```

## 中文翻译

给定字符串 hamsters，'H' 表示仓鼠，'.' 表示空位。在空位放食物桶，每个仓鼠左右至少有一个桶才能被喂食。求最少桶数，无法喂食所有仓鼠返回 -1。

## 解题思路

贪心：遍历字符串，遇到 H 时优先在右边放桶（因为右边的桶可能同时喂下一个 H），如果右边不可用则在左边放，否则返回 -1。用数组标记已放桶的位置。

## Solution

[SourceCode](./solution.js)
