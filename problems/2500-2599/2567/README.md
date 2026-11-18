# [2567] 修改两个元素的最小分数

## Description


```md
https://leetcode.cn/problems/minimum-score-by-changing-two-elements/description/
* algorithms
* Medium (57.11%)
* Likes:    41
* Dislikes: -
* Testcase Example:  '[1,4,7,8,5]'
给你一个下标从 0 开始的整数数组 nums 。
nums 的 最小 得分是满足 0 <= i < j < nums.length 的
nums[i] - nums[j]
的最小值。
nums的 最大 得分是满足 0 <= i < j < nums.length 的
nums[i] - nums[j]
的最大值。
nums 的分数是 最大 得分与 最小 得分的和。
我们的目标是最小化 nums 的分数。你 最多 可以修改 nums 中 2 个元素的值。
请你返回修改 nums 中 至多两个 元素的值后，可以得到的 最小分数 。
x
表示 x 的绝对值。

示例 1：
输入：nums = [1,4,3]
输出：0
解释：将 nums[1] 和 nums[2] 的值改为 1 ，nums 变为 [1,1,1] 。
nums[i] - nums[j]
的值永远为 0 ，所以我们返回 0 + 0 = 0 。
示例 2：
输入：nums = [1,4,7,8,5]
输出：3
解释：
将 nums[0] 和 nums[1] 的值变为 6 ，nums 变为 [6,6,7,8,5] 。
最小得分是 i = 0 且 j = 1 时得到的
nums[i] - nums[j]
=
6 - 6
= 0 。
最大得分是 i = 3 且 j = 4 时得到的
nums[i] - nums[j]
=
8 - 5
= 3 。
最大得分与最小得分之和为 3 。这是最优答案。

提示：
3 <= nums.length <= 105
1 <= nums[i] <= 109
Hint 1: Changing the minimum or maximum values will only minimize the score.
Hint 2: Think about what all possible pairs of minimum and maximum values can be changed to form the minimum score.

```

## Description (EN)

```md
You are given a 0-indexed integer array nums.

- The minimum score of nums is the minimum value of |nums[i] - nums[j]| over all 0 <= i < j < nums.length.
- The maximum score of nums is the maximum value of |nums[i] - nums[j]| over all 0 <= i < j < nums.length.
- The score of nums is the sum of the maximum score and the minimum score.

Our goal is to minimize the score of nums. You may modify the values of at most 2 elements of nums.

Return the minimum score achievable after changing at most two elements of nums.

|x| denotes the absolute value of x.

Example 1:
Input: nums = [1,4,3]
Output: 0
Explanation: Change nums[1] and nums[2] to 1 so that nums becomes [1,1,1]. |nums[i] - nums[j]| is always 0, so we return 0 + 0 = 0.

Example 2:
Input: nums = [1,4,7,8,5]
Output: 3
Explanation:
Change nums[0] and nums[1] to 6 so that nums becomes [6,6,7,8,5].
The minimum score is |6 - 6| = 0 (i = 0, j = 1).
The maximum score is |8 - 5| = 3 (i = 3, j = 4).
The sum 0 + 3 = 3 is the optimal answer.

Constraints:
3 <= nums.length <= 10^5
1 <= nums[i] <= 10^9
```

## Approach

排序后分析：

- 最大得分 = 数组极差（max - min）。要让极差变小，改动的只能是排序后两端的元素；改中间元素不减小极差。
- 至多改 2 个元素 → 至少保留 n-2 个元素不动。被保留的最优集合是排序后的一段连续窗口，只有三种窗口（跳过左端 2 个 / 左右各 1 个 / 右端 2 个）：
  1. 改掉两个最大值：保留 nums[0..n-3]，极差 = nums[n-3] - nums[0]
  2. 各改一个最小值和最大值：保留 nums[1..n-2]，极差 = nums[n-2] - nums[1]
  3. 改掉两个最小值：保留 nums[2..n-1]，极差 = nums[n-1] - nums[2]
- 最小得分分量：把改动的元素设为剩余某个元素的副本即可制造重复值，最小得分 = 0；且最小得分恒 >= 0，所以分数的最小值就是上述三个候选极差的最小值。

复杂度：时间 O(n log n)（排序），空间 O(1)。

## Solution

[SourceCode](./solution.js)
