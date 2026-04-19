# [3310] Remove Methods From Project

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-methods-from-project/description/)

* algorithms
* Medium (50.50%)
* Likes:    158
* Dislikes: 57
* Testcase Example:  '4\n1\n[[1,2],[0,1],[3,2]]'

```md
You are maintaining a project that has n methods numbered from 0 to n - 1.
You are given two integers n and k, and a 2D integer array invocations, where invocations[i] = [ai, bi] indicates that method ai invokes method bi.
There is a known bug in method k. Method k, along with any method invoked by it, either directly or indirectly, are considered suspicious and we aim to remove them.
A group of methods can only be removed if no method outside the group invokes any methods within it.
Return an array containing all the remaining methods after removing all the suspicious methods. You may return the answer in any order. If it is not possible to remove all the suspicious methods, none should be removed.

Example 1:

Input: n = 4, k = 1, invocations = [[1,2],[0,1],[3,2]]
Output: [0,1,2,3]
Explanation:

Method 2 and method 1 are suspicious, but they are directly invoked by methods 3 and 0, which are not suspicious. We return all elements without removing anything.

Example 2:

Input: n = 5, k = 0, invocations = [[1,2],[0,2],[0,1],[3,4]]
Output: [3,4]
Explanation:

Methods 0, 1, and 2 are suspicious and they are not directly invoked by any other method. We can remove them.

Example 3:

Input: n = 3, k = 2, invocations = [[1,2],[0,1],[2,0]]
Output: []
Explanation:

All methods are suspicious. We can remove them.


Constraints:

1 <= n <= 105
0 <= k <= n - 1
0 <= invocations.length <= 2 * 105
invocations[i] == [ai, bi]
0 <= ai, bi <= n - 1
ai != bi
invocations[i] != invocations[j]


```

## 题目翻译

给定 n 个方法和调用关系 invocations，方法 k 有 bug。从 k 出发沿调用链可达的所有方法为可疑方法。只有当没有非可疑方法调用任何可疑方法时才能移除可疑方法组。返回剩余方法编号。

## 解题思路

**BFS + 反向边检查**。

- 从 k 出发 BFS 找所有可疑方法。
- 建反向边表 radj，对每个可疑方法检查其调用者（radj）中是否有非可疑方法。
- 若有则无法移除，返回全部方法；否则返回非可疑方法。
- O(n + m)。
