# [774] 最小化去加油站的最大距离

## Description


```md
https://leetcode.cn/problems/minimize-max-distance-to-gas-station/description/
* algorithms
* Hard (63.49%)
* Likes:    80
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5,6,7,8,9,10]\n9'
整数数组 stations 表示 水平数轴 上各个加油站的位置。给你一个整数 k 。
请你在数轴上增设 k 个加油站，新增加油站可以位于 水平数轴 上的任意位置，而不必放在整数位置上。
设 penalty() 是：增设 k 个新加油站后，相邻 两个加油站间的最大距离。
请你返回 penalty() 可能的最小值。与实际答案误差在 10-6 范围内的答案将被视作正确答案。

示例 1：
输入：stations = [1,2,3,4,5,6,7,8,9,10], k = 9
输出：0.50000
示例 2：
输入：stations = [23,24,36,39,46,56,57,65,84,98], k = 1
输出：14.00000

提示：
10 <= stations.length <= 2000
0 <= stations[i] <= 108
stations 按 严格递增 顺序排列
1 <= k <= 106
Hint 1: Use a binary search.  We'll binary search the monotone function "possible(D) = can we use K or less gas stations to ensure each adjacent distance between gas stations is at most D?"

```

## Solution

[SourceCode](./solution.js)

## Translation

On a number line, stations are gas station positions (strictly increasing). Add k new stations anywhere (not necessarily integer positions) to minimize the maximum distance between adjacent stations. Answers within 1e-6 accepted.

- Example: stations = [23,24,36,39,46,56,57,65,84,98], k = 1 → `14.0`

## Approach

**二分答案**。可行函数 possible(D):每段间距 gap 需要额外 ⌈gap/D⌉−1 个站,总需求 ≤ k 则 D 可行;该函数单调递减,对 D 在 [0, 最大间距] 上二分到区间宽 < 1e-6。⌈⌉ 处理保证段内均匀放置才是最优。O(n·log(1e8/1e-6)) ≈ 2000×47,提前剪枝。
