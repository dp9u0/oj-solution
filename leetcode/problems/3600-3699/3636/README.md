# [3636] Threshold Majority Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/threshold-majority-queries/description/)

* algorithms
* Hard (21.87%)
* Likes:    41
* Dislikes: 10
* Testcase Example:  '[1,1,2,2,1,1]\n[[0,5,4],[0,3,3],[2,3,2]]'

```md
You are given an integer array nums of length n and an array queries, where queries[i] = [li, ri, thresholdi].
Return an array of integers ans where ans[i] is equal to the element in the subarray nums[li...ri] that appears at least thresholdi times, selecting the element with the highest frequency (choosing the smallest in case of a tie), or -1 if no such element exists.

Example 1:

Input: nums = [1,1,2,2,1,1], queries = [[0,5,4],[0,3,3],[2,3,2]]
Output: [1,-1,2]
Explanation:



Query
Sub-array
Threshold
Frequency table
Answer




[0, 5, 4]
[1, 1, 2, 2, 1, 1]
4
1 &rarr; 4, 2 &rarr; 2
1


[0, 3, 3]
[1, 1, 2, 2]
3
1 &rarr; 2, 2 &rarr; 2
-1


[2, 3, 2]
[2, 2]
2
2 &rarr; 2
2




Example 2:

Input: nums = [3,2,3,2,3,2,3], queries = [[0,6,4],[1,5,2],[2,4,1],[3,3,1]]
Output: [3,2,3,2]
Explanation:



Query
Sub-array
Threshold
Frequency table
Answer




[0, 6, 4]
[3, 2, 3, 2, 3, 2, 3]
4
3 &rarr; 4, 2 &rarr; 3
3


[1, 5, 2]
[2, 3, 2, 3, 2]
2
2 &rarr; 3, 3 &rarr; 2
2


[2, 4, 1]
[3, 2, 3]
1
3 &rarr; 2, 2 &rarr; 1
3


[3, 3, 1]
[2]
1
2 &rarr; 1
2





Constraints:

1 <= nums.length == n <= 104
1 <= nums[i] <= 109
1 <= queries.length <= 5 * 104
queries[i] = [li, ri, thresholdi]
0 <= li <= ri < n
1 <= thresholdi <= ri - li + 1


```

## 题目翻译

给定数组 nums 和查询数组 queries，每个查询 [l, r, threshold] 要求在子数组 nums[l..r] 中找到出现次数 >= threshold 的元素中频率最高的（频率相同取最小值），不存在返回 -1。

## 解题思路

**分块 + 众数表 + 位置列表二分**。

- n <= 10^4, q <= 5*10^4。
- 将数组分成 B = ceil(sqrt(n)) 大小的块，共 numBlocks 个块。
- 预计算众数表 modeTable[s][e]：块 s 到块 e 范围内的众数（最高频元素，取最小值），O(n*sqrt(n))。
- 对每个值预计算出现位置列表（已排序），支持 O(log n) 范围计数。
- 对每个查询 [l, r, t]：
  - 如果在同块或相邻块，直接暴力统计 O(sqrt(n))。
  - 否则，候选集 = 内部块 [bl+1, br-1] 的众数 + 左右边界元素（至多 2*sqrt(n)+1 个候选）。
  - 对每个候选用位置列表二分计算频率 O(log n)，找最优答案。
- 总复杂度 O(n*sqrt(n) + q*sqrt(n)*log(n))。

## Solution

[SourceCode](./solution.js)
