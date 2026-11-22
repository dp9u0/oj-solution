# [2655] 寻找最大长度的未覆盖区间

## Description


```md
https://leetcode.cn/problems/find-maximal-uncovered-ranges/description/
* algorithms
* Medium (26.70%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '10\n[[3,5],[7,8]]'
现给你一个长度为 n 的 索引从 0 开始的 数组 nums 和一个 索引从 0 开始的 2 维数组 ranges ，ranges 是 nums 的子区间列表（子区间可能 重叠 ）。
每行 ranges[i] 恰好有两个元素：
ranges[i][0] 表示第i个区间的起始位置（包含）
ranges[i][1] 表示第i个区间的结束位置（包含）
这些区间覆盖了 nums 的一些元素，并留下了一些 未覆盖 的元素。你的任务是找到所有 最大长度 的未覆盖区间。
返回按起始点 升序排序 的未覆盖区间的二维数组 answer 。
所有 最大长度 的 未覆盖 区间指满足两个条件：
每个未覆盖的元素应该属于 恰好 一个子区间。
不存在两个区间 (l1,r1) 和 (l2,r2) 使得 r1+1=l2 。

示例 1 ：
输入：n = 10, ranges = [[3,5],[7,8]]
输出：[[0,2],[6,6],[9,9]]
解释：区间 (3,5) 和 (7,8) 都被覆盖，因此如果我们将 nums 简化为一个二进制数组，其中 0 表示未覆盖的元素，1 表示覆盖的元素，则数组变为[0,0,0,1,1,1,0,1,1,0]，在其中我们可以观察到区间 (0,2)，(6,6)和(9,9)未被覆盖。
示例 2 ：
输入：n = 3, ranges = [[0,2]]
输出：[]
解释：在这个例子中，整个 nums 数组都被覆盖，没有未覆盖的元素，所以输出是一个空数组。
示例 3 ：
输入：n = 7, ranges = [[2,4],[0,3]]
输出：[[5,6]]
解释：区间 (0,3) 和 (2,4) 都被覆盖，因此如果我们将 nums 简化为一个二进制数组，其中 0 表示未覆盖的元素，1 表示覆盖的元素，则数组变为[1,1,1,1,1,0,0]，在其中我们可以观察到区间 (5,6) 未被覆盖。

提示：
1 <= n <= 109
0 <= ranges.length <= 106
ranges[i].length = 2
0 <= ranges[i][j] <= n - 1
ranges[i][0] <= ranges[i][1]
Hint 1: The complexity of the solution is independent of the length of the array nums.
Hint 2: Sort ranges by their start points.
Hint 3: An uncovered range should start right after the end of one of the input ranges (or starts at zero) and also ends right before the start of one of the input ranges (or ends at n).

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Given n (length of an implicit array) and a list of inclusive subranges [l, r], return all maximal uncovered intervals (contiguous gaps of indices not covered by any range), sorted ascending by start. n up to 1e9, up to 1e6 ranges — solution must be O(m log m), independent of n.

Approach: classic sweep. Sort ranges by start; keep `cur` = first index not yet known to be covered. For each [l, r]: if l > cur, the gap [cur, l-1] is uncovered; then extend cur = max(cur, r + 1). After all ranges, if cur <= n - 1, emit [cur, n-1]. Overlaps are handled by the max().

Complexity: O(m log m) time, O(1) extra space besides output.
