# [2113] 查询删除和添加元素后的数组

## Description


```md
https://leetcode.cn/problems/elements-in-array-after-removing-and-replacing-elements/description/
* algorithms
* Medium (53.57%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '[0,1,2]\n[[0,2],[2,0],[3,2],[5,0]]'
给你一个 下标从 0 开始 的数组 nums。一开始，在第 0 分钟，数组没有变化。此后每过一分钟，数组的 最左边 的元素将被移除，直到数组为空。然后，每过一分钟，数组的 尾部 将添加一个元素，添加的顺序和删除的顺序相同，直到数组被复原。此后上述操作无限循环进行。
举个例子，如果 nums = [0, 1, 2]，那么数组将按如下流程变化：[0,1,2] → [1,2] → [2] → [] → [0] → [0,1] → [0,1,2] → [1,2] → [2] → [] → [0] → [0,1] → [0,1,2] → ...
然后给你一个长度为 n 的二维数组 queries，其中 queries[j] = [timej, indexj]，表示第 j 个查询。第 j 个查询的答案定义如下：
如果在时刻 timej，indexj < nums.length，那么答案是此时的 nums[indexj]；
如果在时刻 timej，indexj >= nums.length，那么答案是 -1。
请返回一个长度为 n 的整数数组 ans，其中 ans[j] 为第 j 个查询的答案。

示例 1:
输入: nums = [0,1,2], queries = [[0,2],[2,0],[3,2],[5,0]]
输出: [2,2,-1,0]
解释:
第 0 分钟: [0,1,2] - 数组和 nums 相同。
第 1 分钟: [1,2]   - 最左侧元素 0 被移除。
第 2 分钟: [2]     - 最左侧元素 1 被移除。
第 3 分钟: []      - 最左侧元素 0 被移除。
第 4 分钟: [0]     - 0 被添加到数组尾部。
第 5 分钟: [0,1]   - 1 被添加到数组尾部。
在第 0 分钟, nums[2] 是 2。
在第 2 分钟, nums[0] 是 2。
在第 3 分钟, nums[2] 不存在。
在第 5 分钟, nums[0] 是 0。
示例 2:
输入: nums = [2], queries = [[0,0],[1,0],[2,0],[3,0]]
输出: [2,-1,2,-1]
第 0 分钟: [2] - 数组和 nums 相同。
第 1 分钟: []  - 最左侧元素 2 被移除。
第 2 分钟: [2] - 2 被添加到数组尾部。
第 3 分钟: []  - 最左侧元素 2 被移除。
在第 0 分钟, nums[0] 是 2。
在第 1 分钟, nums[0] 不存在。
在第 2 分钟, nums[0] 是 2。
在第 3 分钟, nums[0] 不存在。

提示:
1 <= nums.length <= 100
0 <= nums[i] <= 100
n == queries.length
1 <= n <= 105
queries[j].length == 2
0 <= timej <= 105
0 <= indexj < nums.length
Hint 1: Try to find a pattern in how nums changes.
Hint 2: Let m be the original length of nums. If time_i / m (integer division) is even, then nums is at its original size or decreasing in size. If it is odd, then it is empty, or increasing in size.
Hint 3: time_i % m can be used to find how many elements are in nums at minute time_i.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Starting from an array `nums` (unchanged at minute 0), each following minute the leftmost element is removed until the array is empty; then each minute the removed elements (in removal order) are appended back until the array is restored, looping forever.

For each query `[time, index]`: if at that minute the array has an element at `index`, answer `nums`-value at that position, else -1.

Example 1:
Input: nums = [0,1,2], queries = [[0,2],[2,0],[3,2],[5,0]]
Output: [2,2,-1,0]

Example 2:
Input: nums = [2], queries = [[0,0],[1,0],[2,0],[3,0]]
Output: [2,-1,2,-1]

Constraints: 1 <= nums.length <= 100, 0 <= time <= 10^5, 0 <= index < nums.length.

## Approach

The array has period `2m` (m = nums.length). With `r = time mod 2m`:
- `r < m` (shrinking phase): the array is `nums[r..m)`; query answers `nums[r + index]` if `index < m - r`, else -1.
- `r >= m` (growing phase): with `s = r - m`, the array is `nums[0..s)`; answer `nums[index]` if `index < s`, else -1.

O(1) per query.
