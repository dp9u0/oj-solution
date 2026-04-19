# [1340] Jump Game V

## Description

[LeetCode Problem Description](https://leetcode.com/problems/jump-game-v/description/)

* algorithms
* Hard (64.92%)
* Likes:    1195
* Dislikes: 46
* Testcase Example:  '[6,4,14,6,8,13,9,7,10,6,12]\n2'

```md
Given an array ofintegers arr and an integer d. In one step you can jump from index i to index:

i + x where:i + x < arr.length and  0 <x <= d.
i - x where:i - x >= 0 and  0 <x <= d.

In addition, you can only jump from index i to index jif arr[i] > arr[j] and arr[i] > arr[k] for all indices k between i and j (More formally min(i,j) < k < max(i, j)).
You can choose any index of the array and start jumping. Return the maximum number of indicesyou can visit.
Notice that you can not jump outside of the array at any time.

Example 1:


Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
Output: 4
Explanation: You can start at index 10. You can jump 10 --> 8 --> 6 --> 7 as shown.
Note that if you start at index 6 you can only jump to index 7. You cannot jump to index 5 because 13 > 9. You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 > 9.
Similarly You cannot jump from index 3 to index 2 or index 1.

Example 2:

Input: arr = [3,3,3,3,3], d = 3
Output: 1
Explanation: You can start at any index. You always cannot jump to any index.

Example 3:

Input: arr = [7,6,5,4,3,2,1], d = 1
Output: 7
Explanation: Start at index 0. You can visit all the indicies.


Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 105
1 <= d <= arr.length


```

## 题目翻译

给定数组 arr 和整数 d。从索引 i 可跳到 i±x（0<x<=d），但必须 arr[i] > arr[j] 且中间所有元素也小于 arr[i]。选任意起点，求最多能访问多少个索引。

## 解题思路

**拓扑排序 DP**。

- 只能从高处往低处跳，构成 DAG。
- dp[i] = 从 i 出发最多能访问的索引数 = 1 + max(dp[j])（j 为所有可达位置）。
- 按高度升序处理（低的先算），对每个 i 向左右扫描距离 d 内的可达位置。
- O(n*d)。
