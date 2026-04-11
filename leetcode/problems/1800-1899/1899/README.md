# [1899] Merge Triplets to Form Target Triplet

## Description

[LeetCode Problem Description](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/description/)

* algorithms
* Medium (68.95%)
* Likes:    937
* Dislikes: 80
* Testcase Example:  '[[2,5,3],[1,8,4],[1,7,5]]\n[2,7,5]'

```md
A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.
To obtain target, you may apply the following operation on triplets any number of times (possibly zero):

Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].

For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].



Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.

Example 1:

Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
Output: true
Explanation: Perform the following operations:
- Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]
The target triplet [2,7,5] is now an element of triplets.

Example 2:

Input: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]
Output: false
Explanation: It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.

Example 3:

Input: triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]
Output: true
Explanation: Perform the following operations:
- Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to be [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].
- Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to be [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].
The target triplet [5,5,5] is now an element of triplets.


Constraints:

1 <= triplets.length <= 105
triplets[i].length == target.length == 3
1 <= ai, bi, ci, x, y, z <= 1000


```

## 题目翻译

给定一个二维整数数组 `triplets`，每个 `triplets[i] = [ai, bi, ci]`。还有一个目标数组 `target = [x, y, z]`。
操作：选择两个不同下标 i 和 j，将 `triplets[j]` 更新为 `[max(ai,aj), max(bi,bj), max(ci,cj)]`。
返回是否能通过若干次操作得到 target 作为 triplets 的一个元素。

**示例 1：** triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5] → true
**示例 2：** triplets = [[3,4,5],[4,5,6]], target = [3,2,5] → false
**示例 3：** triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5] → true

**约束：**
- 1 <= triplets.length <= 10^5
- 1 <= ai, bi, ci, x, y, z <= 1000

## 解题思路 (Approach)

贪心。操作本质是取 max，所以只有每个维度都 <= target 对应维度的 triplet 才有用。筛选出所有满足 a <= x, b <= y, c <= z 的 triplet，然后检查它们在三个维度上分别是否能取到 x, y, z 的最大值。

时间复杂度：O(n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
