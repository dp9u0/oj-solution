# [757] Set Intersection Size At Least Two

## Description

[LeetCode Problem Description](https://leetcode.com/problems/set-intersection-size-at-least-two/description/)

* algorithms
* Hard (58.14%)
* Likes:    1135
* Dislikes: 110
* Testcase Example:  '[[1,3],[3,7],[8,9]]'

```md
You are given a 2D integer array intervals where intervals[i] = [starti, endi] represents all the integers from starti to endi inclusively.
A containing set is an array nums where each interval from intervals has at least two integers in nums.

For example, if intervals = [[1,3], [3,7], [8,9]], then [1,2,4,7,8,9] and [2,3,4,8,9] are containing sets.

Return the minimum possible size of a containing set.

Example 1:

Input: intervals = [[1,3],[3,7],[8,9]]
Output: 5
Explanation: let nums = [2, 3, 4, 8, 9].
It can be shown that there cannot be any containing array of size 4.

Example 2:

Input: intervals = [[1,3],[1,4],[2,5],[3,5]]
Output: 3
Explanation: let nums = [2, 3, 4].
It can be shown that there cannot be any containing array of size 2.

Example 3:

Input: intervals = [[1,2],[2,3],[2,4],[4,5]]
Output: 5
Explanation: let nums = [1, 2, 3, 4, 5].
It can be shown that there cannot be any containing array of size 4.


Constraints:

1 <= intervals.length <= 3000
intervals[i].length == 2
0 <= starti < endi <= 108


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个二维整数数组 `intervals`，其中 `intervals[i] = [starti, endi]` 表示从 `starti` 到 `endi`（含两端）的所有整数。

**包含集（containing set）** 是一个数组 `nums`，满足 `intervals` 中每个区间都至少包含 `nums` 中的两个整数。

例如，`intervals = [[1,3],[3,7],[8,9]]` 时，`[1,2,4,7,8,9]` 和 `[2,3,4,8,9]` 都是包含集。

返回包含集的最小可能大小。

**示例 1：**
- 输入：`intervals = [[1,3],[3,7],[8,9]]`
- 输出：`5`
- 解释：取 `nums = [2,3,4,8,9]`，可以证明不存在大小为 4 的包含集。

**示例 2：**
- 输入：`intervals = [[1,3],[1,4],[2,5],[3,5]]`
- 输出：`3`
- 解释：取 `nums = [2,3,4]`，可以证明不存在大小为 2 的包含集。

**示例 3：**
- 输入：`intervals = [[1,2],[2,3],[2,4],[4,5]]`
- 输出：`5`
- 解释：取 `nums = [1,2,3,4,5]`，可以证明不存在大小为 4 的包含集。

**约束：**
- `1 <= intervals.length <= 3000`
- `intervals[i].length == 2`
- `0 <= starti < endi <= 10^8`

## 解题思路

**贪心 + 排序**，时间复杂度 O(n log n)。

1. **排序**：按右端点升序；右端点相同时按左端点**降序**（短区间优先处理）。

2. **维护已选集合中最大的两个元素** `largest`、`second`（初始为 -1，因坐标 ≥ 0，等价于负无穷）。由于按右端点升序处理，且每次新加的元素都不超过当前区间的右端点，集合中所有元素都 ≤ 当前区间的右端点 `e`。因此"元素落在 [s, e] 内"等价于"元素 ≥ s"，只需看最大的两个元素即可判断当前区间是否已有 ≥ 2 个覆盖。

3. 对每个区间 `[s, e]` 分三种情况：
   - `second >= s`：`largest`、`second` 都在区间内，已有 2 个覆盖，无需添加。
   - `second < s <= largest`：仅 `largest` 在区间内，还差 1 个。贪心添加**尽可能大的元素 `e`**（对后续区间最有利），此时 `second = largest`，`largest = e`。（可以证明在该排序规则下此情形必有 `largest < e`，即 `e` 一定是新元素。）
   - `largest < s`：没有任何元素在区间内，差 2 个。贪心添加 `e-1` 和 `e`（区间内能选的两个最大值），答案 +2。

**贪心正确性直觉**：处理右端点更小（更早结束）的区间时，把元素尽量放在区间右端（`e`、`e-1`），能最大化被后续区间复用的机会。

**验证示例 3**：`[[1,2],[2,3],[2,4],[4,5]]`
- `[1,2]`：无覆盖 → 添加 1,2（ans=2）
- `[2,3]`：second=1 < 2 ≤ largest=2 → 添加 3（ans=3）
- `[2,4]`：second=2 ≥ 2 ✓
- `[4,5]`：largest=3 < 4 → 添加 4,5（ans=5）✓
