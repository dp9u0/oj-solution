# [3018] 可处理的最大删除操作数 I

## Description


```md
https://leetcode.cn/problems/maximum-number-of-removal-queries-that-can-be-processed-i/description/
* algorithms
* Hard (33.33%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]\n[1,2,3,4,6]'
给定一个下标 从 0 开始 的数组 nums 和一个下标 从 0 开始 的数组 queries。
你可以在开始时执行以下操作 最多一次：
用 nums 的 子序列 替换 nums。
我们以给定的queries顺序处理查询；对于queries[i]，我们执行以下操作：
如果 nums 的第一个 和 最后一个元素 小于 queries[i]，则查询处理 结束。
否则，从 nums 选择第一个 或 最后一个元素，要求其大于或等于 queries[i]，然后将其从 nums 中 删除。
返回通过以最佳方式执行该操作可以处理的 最多 次数。

示例 1：
输入：nums = [1,2,3,4,5], queries = [1,2,3,4,6]
输出：4
解释：我们不执行任何操作，并按如下方式处理查询：
1- 我们选择并移除 nums[0]，因为 1 <= 1，那么 nums 就变成 [2,3,4,5]。
2- 我们选择并移除 nums[0]，因为 2 <= 2，那么 nums 就变成 [3,4,5]。
3- 我们选择并移除 nums[0]，因为 3 <= 3，那么 nums 就变成 [4,5]。
4- 我们选择并移除 nums[0]，因为 4 <= 4，那么 nums 就变成 [5]。
5- 我们不能从 nums 中选择任何元素，因为它们不大于或等于 5。
因此，答案为 4。
可以看出，我们不能处理超过 4 个查询。
示例 2：
输入：nums = [2,3,2], queries = [2,2,3]
输出：3
解释：我们不做任何操作，按如下方式处理查询：
1- 我们选择并移除 nums[0]，因为 2 <= 2，那么 nums 就变成 [3,2]。
2- 我们选择并移除 nums[1]，因为 2 <= 2，那么 nums 就变成 [3]。
3- 我们选择并移除 nums[0]，因为 3 <= 3，那么 nums 就变成 []。
因此，答案为 3。
可以看出，我们不能处理超过 3 个查询。
示例 3：
输入：nums = [3,4,3], queries = [4,3,2]
输出：2
解释：首先，我们用 nums 的子序列 [4,3] 替换 nums。
然后，我们可以按如下方式处理查询：
1- 我们选择并移除 nums[0]，因为 4 <= 4，那么 nums 就变成 [3]。
2- 我们选择并移除 nums[0]，因为 3 <= 3，那么 nums 就变成 []。
3- 我们无法处理更多查询，因为 nums 为空。
因此，答案为 2。
可以看出，我们不能处理超过 2 个查询。

提示：
1 <= nums.length <= 1000
1 <= queries.length <= 1000
1 <= nums[i], queries[i] <= 109
Hint 1: Think of dynamic programming.
Hint 2: The definition of dp is a little unusual. Try to think more.
Hint 3: Let dp[l][r] be the maximum number of queries we can process if we want a[l], a[l + 1], ..., a[r - 1] not to be removed after processing dp[l][r] queries.
Hint 4: So dp[0][n] = 0 since we can not remove anything.
Hint 5: The answer would be max(dp[i][i]).

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Process queries in order; each query requires removing the current first or last element (whichever is >= the query; stop if both are smaller). Optionally once, replace nums with any subsequence first. Maximize processed queries.

Approach: dp[l][r] = max queries processed while all of a[l..r-1] remain un-removed (the working array is exactly a[l..r-1]; skipped elements live outside this window). dp[0][n] = 0. From state (l, r) with value q: 
- query-remove front if nums[l] >= queries[q] -> (l+1, r, q+1); 
- query-remove back if nums[r-1] >= queries[q] -> (l, r-1, q+1); 
- skip front -> (l+1, r, q); skip back -> (l, r-1, q) — free skips model the one-time subsequence replacement (skipped elements are exactly those outside the kept window, so "use the op once" is captured by allowing skips anywhere). 
Iterate widths from n down; answer = max dp value over all states. O(n^2).

Verified: [1,2,3,4,5]/[1,2,3,4,6] -> 4; [2,3,2]/[2,2,3] -> 3; [3,4,3]/[4,3,2] -> 2.
