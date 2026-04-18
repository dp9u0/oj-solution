# [3414] Maximum Score of Non-overlapping Intervals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals/description/)

* algorithms
* Hard (31.20%)
* Likes:    56
* Dislikes: 7
* Testcase Example:  '[[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]'

```md
You are given a 2D integer array intervals, where intervals[i] = [li, ri, weighti]. Interval i starts at position li and ends at ri, and has a weight of weighti. You can choose up to 4 non-overlapping intervals. The score of the chosen intervals is defined as the total sum of their weights.
Return the lexicographically smallest array of at most 4 indices from intervals with maximum score, representing your choice of non-overlapping intervals.
Two intervals are said to be non-overlapping if they do not share any points. In particular, intervals sharing a left or right boundary are considered overlapping.

Example 1:

Input: intervals = [[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]
Output: [2,3]
Explanation:
You can choose the intervals with indices 2, and 3 with respective weights of 5, and 3.

Example 2:

Input: intervals = [[5,8,1],[6,7,7],[4,7,3],[9,10,6],[7,8,2],[11,14,3],[3,5,5]]
Output: [1,3,5,6]
Explanation:
You can choose the intervals with indices 1, 3, 5, and 6 with respective weights of 7, 6, 3, and 5.


Constraints:

1 <= intevals.length <= 5 * 104
intervals[i].length == 3
intervals[i] = [li, ri, weighti]
1 <= li <= ri <= 109
1 <= weighti <= 109


```

## 中文翻译

给定区间数组 intervals[i] = [li, ri, weighti]，选最多 4 个不重叠区间使权重和最大（共享边界算重叠）。返回字典序最小的索引数组。

约束：n <= 5*10^4

## 解题思路

**加权区间调度 + 4 层 DP**

1. 按 (右端点, 左端点, 原始索引) 排序。
2. 对每个区间 i，二分查找最右的 j 使得 sorted[j].r < sorted[i].l。
3. dp[i][c] = 前 c 个区间的最优解，最后一个选 sorted[i]。用前缀最优 pbest[c][i] 维护。
4. 每层 O(n log n)，共 4 层。同权重时比较字典序。
5. 总时间 O(4 * n log n)。

## Solution

[SourceCode](./solution.js)
