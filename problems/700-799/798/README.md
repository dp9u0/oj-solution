# [798] Smallest Rotation with Highest Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-rotation-with-highest-score/description/)

* algorithms
* Hard (54.61%)
* Likes:    572
* Dislikes: 45
* Testcase Example:  '[2,3,1,4,0]'

```md
You are given an array nums. You can rotate it by a non-negative integer k so that the array becomes [nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]]. Afterward, any entries that are less than or equal to their index are worth one point.

For example, if we have nums = [2,4,1,3,0], and we rotate by k = 2, it becomes [1,3,0,2,4]. This is worth 3 points because 1 > 0 [no points], 3 > 1 [no points], 0 <= 2 [one point], 2 <= 3 [one point], 4 <= 4 [one point].

Return the rotation index k that corresponds to the highest score we can achieve if we rotated nums by it. If there are multiple answers, return the smallest such index k.

Example 1:

Input: nums = [2,3,1,4,0]
Output: 3
Explanation: Scores for each k are listed below:
k = 0,  nums = [2,3,1,4,0],    score 2
k = 1,  nums = [3,1,4,0,2],    score 3
k = 2,  nums = [1,4,0,2,3],    score 3
k = 3,  nums = [4,0,2,3,1],    score 4
k = 4,  nums = [0,2,3,1,4],    score 3
So we should choose k = 3, which has the highest score.

Example 2:

Input: nums = [1,3,0,2,4]
Output: 0
Explanation: nums will always have 3 points no matter how it shifts.
So we will choose the smallest k, which is 0.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] < nums.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个数组 `nums`。可以将它旋转非负整数 `k` 次，使数组变为 `[nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]]`。旋转之后，任何**小于等于其下标**的元素得 1 分。

例如，`nums = [2,4,1,3,0]`，旋转 `k = 2` 后变为 `[1,3,0,2,4]`。得 3 分，因为 `1 > 0`（不得分）、`3 > 1`（不得分）、`0 <= 2`（得 1 分）、`2 <= 3`（得 1 分）、`4 <= 4`（得 1 分）。

返回能取得**最高得分**的旋转下标 `k`。如果有多个答案，返回最小的 `k`。

示例 1：
- 输入：`nums = [2,3,1,4,0]`
- 输出：`3`
- 解释：各个 k 的得分为：k=0 得 2 分，k=1 得 3 分，k=2 得 3 分，k=3 得 4 分，k=4 得 3 分。所以选 k=3。

示例 2：
- 输入：`nums = [1,3,0,2,4]`
- 输出：`0`
- 解释：无论怎么旋转都得 3 分，所以选最小的 k=0。

约束：
- `1 <= nums.length <= 10^5`
- `0 <= nums[i] < nums.length`

## 解题思路

**差分数组 + 区间标记，O(n) 时间 / O(n) 空间。**

关键观察：原下标为 `i` 的元素旋转 `k` 后落在下标 `(i - k) mod n`，它得分当且仅当 `nums[i] <= (i - k) mod n`。枚举每个元素"不得分"的 k 区间（坏区间），统计每个 k 的坏元素个数，坏个数最少的 k 即得分最高（score = n - bad），取最小 k。

对元素 `i`（记 `v = nums[i]`）：
- 得分条件 `(i - k) mod n >= v`，即坏区间为 `(i - k) mod n < v`，解得坏 k 是一个长度为 `v` 的**环形区间**，从 `l = (i - v + 1) mod n` 开始、到 `i` 结束（共 `v` 个）。
- `v = 0` 时永不坏，跳过。
- 若 `l + v - 1 <= n - 1`：坏区间为 `[l, l + v - 1]`；否则拆成 `[l, n-1] ∪ [0, l + v - 1 - n]` 两段。

用差分数组 `diff` 对坏区间 +1，前缀和还原每个 k 的坏个数，在线扫描取坏个数最小（严格小于才更新，保证同分取最小 k）的 k。

验证示例 1 `[2,3,1,4,0]`：各 k 坏个数为 3,2,2,1,2 → k=3 坏最少（1 个），得分 4，与题目一致。
