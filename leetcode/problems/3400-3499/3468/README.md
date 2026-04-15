# [3468] Find the Number of Copy Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-copy-arrays/description/)

* algorithms
* Medium (46.91%)
* Likes:    111
* Dislikes: 21
* Testcase Example:  '[1,2,3,4]\n[[1,2],[2,3],[3,4],[4,5]]'

```md
You are given an array original of length n and a 2D array bounds of length n x 2, where bounds[i] = [ui, vi].
You need to find the number of possible arrays copy of length n such that:

(copy[i] - copy[i - 1]) == (original[i] - original[i - 1]) for 1 <= i <= n - 1.
ui <= copy[i] <= vi for 0 <= i <= n - 1.

Return the number of such arrays.

Example 1:

Input: original = [1,2,3,4], bounds = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation:
The possible arrays are:

[1, 2, 3, 4]
[2, 3, 4, 5]


Example 2:

Input: original = [1,2,3,4], bounds = [[1,10],[2,9],[3,8],[4,7]]
Output: 4
Explanation:
The possible arrays are:

[1, 2, 3, 4]
[2, 3, 4, 5]
[3, 4, 5, 6]
[4, 5, 6, 7]


Example 3:

Input: original = [1,2,1,2], bounds = [[1,1],[2,3],[3,3],[2,3]]
Output: 0
Explanation:
No array is possible.


Constraints:

2 <= n == original.length <= 105
1 <= original[i] <= 109
bounds.length == n
bounds[i].length == 2
1 <= bounds[i][0] <= bounds[i][1] <= 109


```

## 中文翻译

给定数组 original 和 bounds（bounds[i] = [ui, vi]），求满足以下条件的 copy 数组个数：
1. copy 相邻元素之差与 original 相邻元素之差相同
2. ui <= copy[i] <= vi

即 copy[i] = copy[0] + (original[i] - original[0])，所以 copy[0] 决定了整个数组。对每个 i，copy[0] 的范围为 [ui - diff_i, vi - diff_i]，其中 diff_i = original[i] - original[0]。取所有约束的交集，区间长度即为答案。

## 解题思路

令 diff[i] = original[i] - original[0]，则 copy[i] = copy[0] + diff[i]。约束 ui <= copy[0] + diff[i] <= vi，即 copy[0] ∈ [ui - diff[i], vi - diff[i]]。对所有 i 取交集，最终区间长度即为答案。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
