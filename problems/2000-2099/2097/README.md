# [2097] Valid Arrangement of Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-arrangement-of-pairs/description/)

* algorithms
* Hard (66.55%)
* Likes:    1085
* Dislikes: 56
* Testcase Example:  '[[5,1],[4,5],[11,9],[9,4]]'

```md
You are given a 0-indexed 2D integer array pairs where pairs[i] = [starti, endi]. An arrangement of pairs is valid if for every index i where 1 <= i < pairs.length, we have endi-1 == starti.
Return any valid arrangement of pairs.
Note: The inputs will be generated such that there exists a valid arrangement of pairs.

Example 1:

Input: pairs = [[5,1],[4,5],[11,9],[9,4]]
Output: [[11,9],[9,4],[4,5],[5,1]]
Explanation:
This is a valid arrangement since endi-1 always equals starti.
end0 = 9 == 9 = start1
end1 = 4 == 4 = start2
end2 = 5 == 5 = start3

Example 2:

Input: pairs = [[1,3],[3,2],[2,1]]
Output: [[1,3],[3,2],[2,1]]
Explanation:
This is a valid arrangement since endi-1 always equals starti.
end0 = 3 == 3 = start1
end1 = 2 == 2 = start2
The arrangements [[2,1],[1,3],[3,2]] and [[3,2],[2,1],[1,3]] are also valid.

Example 3:

Input: pairs = [[1,2],[1,3],[2,1]]
Output: [[1,2],[2,1],[1,3]]
Explanation:
This is a valid arrangement since endi-1 always equals starti.
end0 = 2 == 2 = start1
end1 = 1 == 1 = start2


Constraints:

1 <= pairs.length <= 105
pairs[i].length == 2
0 <= starti, endi <= 109
starti != endi
No two pairs are exactly the same.
There exists a valid arrangement of pairs.


```

## 翻译

给定有向边对 pairs，找一个排列使得每条边的终点等于下一条边的起点。

## 解题思路

经典有向图欧拉路径。建图后找起点（out-in=1 的节点，否则任意），用 Hierholzer 迭代 DFS 遍历所有边，结果逆序即为答案。节点值可达 10^9，用 Map 存邻接表。

## Solution

[SourceCode](./solution.js)
