# [3073] 最大递增三元组

## Description


```md
https://leetcode.cn/problems/maximum-increasing-triplet-value/description/
* algorithms
* Medium (23.53%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[5,6,9]'
给定一个数组 nums，返回满足 i < j < k 且 nums[i] < nums[j] < nums[k] 的三元组 (i, j, k)  的 最大值。
三元组 (i, j, k)  的 值 为 nums[i] - nums[j] + nums[k]。


示例 1:
输入：nums = [5,6,9]
输出：8
解释：对于一个递增的三元组，我们只有一个选择，那就是选择所有三个元素。三元组的值为 5 - 6 + 9 = 8。
示例 2:
输入：nums = [1,5,3,6]
输出：4
解释：只有两个递增三元组：
(0, 1, 3)：这个三元组的值为 nums[0] - nums[1] + nums[3] = 1 - 5 + 6 = 2。
(0, 2, 3)：这个三元组的值为 nums[0] - nums[2] + nums[3] = 1 - 3 + 6 = 4。
因此答案是 4。

提示:
3 <= nums.length <= 105
1 <= nums[i] <= 109
输入数据保证至少一个三元组满足给定条件。
Hint 1: For each element, define right[i] as the value of the greatest element with an index greater than i.
Hint 2: Start iterating from the beginning, define a set containing the elements seen so far.
Hint 3: When you are at index i, use binary search on the set to find the greatest element on the left of index i that is smaller than nums[i] and name it greatest_left.
Hint 4: Also check that nums[i] < right[i].
Hint 5: If the above conditions hold, then ans = max(ans, greatest_left - nums[i] + right[i]).

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Maximize nums[i] - nums[j] + nums[k] over i < j < k with nums[i] < nums[j] < nums[k]. At least one valid triplet exists.

Approach: fix the middle j. greatest_left = max nums[i] with i < j and nums[i] < nums[j] (Fenwick prefix-max over compressed values, sweep left to right); right = suffix max of nums[j+1..], usable when strictly > nums[j]. Candidate = greatest_left - nums[j] + right[j]. O(n log n).
