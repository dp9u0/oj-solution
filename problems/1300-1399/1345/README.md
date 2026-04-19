# [1345] Jump Game IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/jump-game-iv/description/)

* algorithms
* Hard (46.28%)
* Likes:    3875
* Dislikes: 133
* Testcase Example:  '[100,-23,-23,404,100,23,23,23,3,404]'

```md
Given an array ofintegers arr, you are initially positioned at the first index of the array.
In one step you can jump from index i to index:

i + 1 where:i + 1 < arr.length.
i - 1 where:i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.

Return the minimum number of steps to reach the last index of the array.
Notice that you can not jump outside of the array at any time.

Example 1:

Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

Example 2:

Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.

Example 3:

Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.


Constraints:

1 <= arr.length <= 5 * 104
-108 <= arr[i] <= 108


```

## 题意翻译

给定一个整数数组 arr，初始位置在第一个下标。每一步可以从下标 i 跳到：
- i + 1（向右一步）
- i - 1（向左一步）
- j（任意满足 arr[i] == arr[j] 且 i != j 的位置）

求到达数组最后一个下标的最少步数。

## 解题思路

**BFS 最短路径**

1. 本质上是在图上求从节点 0 到节点 n-1 的最短路径，BFS 天然适合。
2. 预处理：用哈希表 `value -> indices[]` 建立相同值的索引映射。
3. BFS 时，从当前节点扩展到 i+1、i-1 以及所有同值节点。
4. 关键优化：同一值的所有节点被访问后，从哈希表中删除该值，避免重复遍历（同一组同值节点只需访问一次）。
5. 时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
