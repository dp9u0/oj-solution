# [646] Maximum Length of Pair Chain

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-length-of-pair-chain/description/)

* algorithms
* Medium (61.67%)
* Likes:    4910
* Dislikes: 136
* Testcase Example:  '[[1,2],[2,3],[3,4]]'

```md
You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.
A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.
Return the length longest chain which can be formed.
You do not need to use up all the given intervals. You can select pairs in any order.

Example 1:

Input: pairs = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4].

Example 2:

Input: pairs = [[1,2],[7,8],[4,5]]
Output: 3
Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].


Constraints:

n == pairs.length
1 <= n <= 1000
-1000 <= lefti < righti <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n 个数对 pairs，其中 pairs[i] = [lefti, righti]。数对 p2=[c,d] 能跟在 p1=[a,b] 后面当且仅当 b < c。可以任意顺序选取数对，求能形成的最长链的长度。

## 解题思路

**贪心**

按数对的右端点排序，贪心地选择右端点最小的数对，这样给后续留出最大的空间。

排序后遍历，维护当前链的末尾 right，如果下一个数对的 left > right，则加入链中。

时间复杂度 O(n log n)，空间复杂度 O(1)。
