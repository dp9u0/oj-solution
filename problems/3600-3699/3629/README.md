# [3629] Minimum Jumps to Reach End via Prime Teleportation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-jumps-to-reach-end-via-prime-teleportation/description/)

* algorithms
* Medium (31.80%)
* Likes:    133
* Dislikes: 18
* Testcase Example:  '[1,2,4,6]'

```md
You are given an integer array nums of length n.
You start at index 0, and your goal is to reach index n - 1.
From any index i, you may perform one of the following operations:

Adjacent Step: Jump to index i + 1 or i - 1, if the index is within bounds.
Prime Teleportation: If nums[i] is a prime number p, you may instantly jump to any index j != i such that nums[j] % p == 0.

Return the minimum number of jumps required to reach index n - 1.

Example 1:

Input: nums = [1,2,4,6]
Output: 2
Explanation:
One optimal sequence of jumps is:

Start at index i = 0. Take an adjacent step to index 1.
At index i = 1, nums[1] = 2 is a prime number. Therefore, we teleport to index i = 3 as nums[3] = 6 is divisible by 2.

Thus, the answer is 2.

Example 2:

Input: nums = [2,3,4,7,9]
Output: 2
Explanation:
One optimal sequence of jumps is:

Start at index i = 0. Take an adjacent step to index i = 1.
At index i = 1, nums[1] = 3 is a prime number. Therefore, we teleport to index i = 4 since nums[4] = 9 is divisible by 3.

Thus, the answer is 2.

Example 3:

Input: nums = [4,6,5,8]
Output: 3
Explanation:

Since no teleportation is possible, we move through 0 &rarr; 1 &rarr; 2 &rarr; 3. Thus, the answer is 3.



Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= 106


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定数组 nums，从下标 0 出发到达下标 n-1。从下标 i 可以：移动到 i±1（相邻步），或当 nums[i] 是质数 p 时，传送到任意 j≠i 使得 nums[j] 是 p 的倍数。求最少步数。

## 解题思路

BFS + 质因子分组。

1. 用 SPF 筛（最小质因子）预处理，支持 O(log v) 质因子分解
2. 对每个下标 j，提取 nums[j] 的所有质因子，将 j 加入对应质数的分组
3. BFS 从 0 出发：相邻步扩展；若当前 nums[i] 是质数 p，扩展 primeGroup[p] 中所有未访问的下标，然后清空该组（避免重复）
4. 每个下标和每个质数组只处理一次，总时间 O(n log(maxVal))
