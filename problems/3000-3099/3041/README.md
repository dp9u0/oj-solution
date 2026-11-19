# [3041] 修改数组后最大化数组中的连续元素数目

## Description


```md
https://leetcode.cn/problems/maximize-consecutive-elements-in-an-array-after-modification/description/
* algorithms
* Hard (41.58%)
* Likes:    22
* Dislikes: -
* Testcase Example:  '[2,1,5,1,1]'
给你一个下标从 0 开始只包含 正 整数的数组 nums 。
一开始，你可以将数组中 任意数量 元素增加 至多 1 。
修改后，你可以从最终数组中选择 一个或者更多 元素，并确保这些元素升序排序后是 连续 的。比方说，[3, 4, 5] 是连续的，但是 [3, 4, 6] 和 [1, 1, 2, 3] 不是连续的。
请你返回 最多 可以选出的元素数目。

示例 1：
输入：nums = [2,1,5,1,1]
输出：3
解释：我们将下标 0 和 3 处的元素增加 1 ，得到结果数组 nums = [3,1,5,2,1] 。
我们选择元素 [3,1,5,2,1] 并将它们排序得到 [1,2,3] ，是连续元素。
最多可以得到 3 个连续元素。
示例 2：
输入：nums = [1,4,7,10]
输出：1
解释：我们可以选择的最多元素数目是 1 。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 106
Hint 1: Sort the array and try using dynamic programming.
Hint 2: Let dp[i] be the length of the longest consecutive elements ending at element at index i in the sorted array.

```

## Description (English)

You are given a 0-indexed array `nums` containing only positive integers.

Initially, you may increase **any number** of elements by **at most 1**.

After the modification, you may select **one or more** elements from the final array such that, when sorted in ascending order, they are **consecutive**. For example, `[3, 4, 5]` is consecutive, but `[3, 4, 6]` and `[1, 1, 2, 3]` are not.

Return the **maximum** number of elements you can select.

Example 1:

```
Input: nums = [2,1,5,1,1]
Output: 3
Explanation: Increase the elements at indices 0 and 3, giving nums = [3,1,5,2,1].
Selecting elements and sorting them yields [1,2,3], which is consecutive.
The maximum number of consecutive elements is 3.
```

Example 2:

```
Input: nums = [1,4,7,10]
Output: 1
Explanation: The maximum number of selectable elements is 1.
```

Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`

## Approach

排序 + 值域状态机 DP（O(n log n)）。

关键观察：每个元素最终值只能是 `nums[i]` 或 `nums[i]+1`。选出的元素排序后必须恰好是连续整数（无重复）。最优链在排序数组中**不必是连续下标段**（可能跳过重复值等元素），因此状态不能定义在下标上，而要定义在**最终值**上：一条链只由它的"最大最终值"和该最大值元素是否 +1 决定。

定义两个 Map（按值索引，升序遍历排序后的数组）：

- `endNoInc[v]`：最大最终值为 `v`、且最后一个元素**未 +1**（原值即 `v`）的最长链长度。
- `endInc[v]`：最大最终值为 `v`、且最后一个元素**由 `v-1` +1 得到**的最长链长度。

处理元素 `x` 时（先快照 `endNoInc[x]`、`endInc[x]` 的旧值，防止同一元素被当作两个连续终值使用）：

- 把 `x` 原样使用（终值 `x`）：前驱链必须终止于 `x-1`，其末元素状态不限：
  `extendNoInc = max(endNoInc[x-1], endInc[x-1]) + 1`，更新 `endNoInc[x]` 取 max。
- 把 `x` +1 使用（终值 `x+1`）：前驱链必须终止于 `x`，且不能包含当前元素，所以只能用快照旧值：
  `extendInc = max(prevNoInc, prevInc) + 1`，更新 `endInc[x+1]` 取 max。

答案为过程中出现的最大链长。旧值之所以可用作前驱，是因为处理顺序升序、链内终值严格递增，链中更早的元素下标一定在当前元素之前。

复杂度：时间 O(n log n)（排序），空间 O(n)。

## Solution

[SourceCode](./solution.js)
