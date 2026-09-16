# [1477] 找两个和为目标值且不重叠的子数组

## Description


```md
https://leetcode.cn/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/description/
* algorithms
* Medium (36.28%)
* Likes:    189
* Dislikes: -
* Testcase Example:  '[3,2,2,4,3]\n3'
给你一个整数数组 arr 和一个整数值 target 。
请你在 arr 中找 两个互不重叠的子数组 且它们的和都等于 target 。可能会有多种方案，请你返回满足要求的两个子数组长度和的 最小值 。
请返回满足要求的最小长度和，如果无法找到这样的两个子数组，请返回 -1 。

示例 1：
输入：arr = [3,2,2,4,3], target = 3
输出：2
解释：只有两个子数组和为 3 （[3] 和 [3]）。它们的长度和为 2 。
示例 2：
输入：arr = [7,3,4,7], target = 7
输出：2
解释：尽管我们有 3 个互不重叠的子数组和为 7 （[7], [3,4] 和 [7]），但我们会选择第一个和第三个子数组，因为它们的长度和 2 是最小值。
示例 3：
输入：arr = [4,3,2,6,2,3,4], target = 6
输出：-1
解释：我们只有一个和为 6 的子数组。
示例 4：
输入：arr = [5,5,4,4,5], target = 3
输出：-1
解释：我们无法找到和为 3 的子数组。
示例 5：
输入：arr = [3,1,1,1,5,1,2,1], target = 3
输出：3
解释：注意子数组 [1,2] 和 [2,1] 不能成为一个方案因为它们重叠了。

提示：
1 <= arr.length <= 10^5
1 <= arr[i] <= 1000
1 <= target <= 10^8
Hint 1: Let's create two arrays prefix and suffix where prefix[i] is the minimum length of sub-array ends before i and has sum = k, suffix[i] is the minimum length of sub-array starting at or after i and has sum = k.
Hint 2: The answer we are searching for is min(prefix[i] + suffix[i]) for all values of i from 0 to n-1 where n == arr.length.
Hint 3: If you are still stuck with how to build prefix and suffix, you can store for each index i the length of the sub-array starts at i and has sum = k or infinity otherwise, and you can use it to build both prefix and suffix.

```

## Description (English)

Given an array of integers `arr` and an integer `target`, find two non-overlapping subarrays of `arr` such that each of them has a sum equal to `target`. There can be multiple answers, return the minimum sum of the lengths of the two required subarrays.

Return -1 if no such pair exists.

Example 1:
Input: arr = [3,2,2,4,3], target = 3
Output: 2
Explanation: The only two subarrays with sum 3 are [3] and [3]. Their length sum is 2.

Example 2:
Input: arr = [7,3,4,7], target = 7
Output: 2
Explanation: Although we have three non-overlapping subarrays of sum 7 ([7], [3,4] and [7]), we choose the first and the third, since their length sum 2 is minimal.

Example 3:
Input: arr = [4,3,2,6,2,3,4], target = 6
Output: -1
Explanation: We have only one subarray of sum 6.

Example 4:
Input: arr = [5,5,4,4,5], target = 3
Output: -1
Explanation: We cannot find two subarrays of sum 3.

Example 5:
Input: arr = [3,1,1,1,5,1,2,1], target = 3
Output: 3
Explanation: Note that subarrays [1,2] and [2,1] cannot be used as a pair because they overlap.

Constraints:
1 <= arr.length <= 10^5
1 <= arr[i] <= 1000
1 <= target <= 10^8

## Approach

关键词：所有元素均为正数 + 恰好等于 target 的子数组 → 滑动窗口可以枚举出所有和为 target 的子数组。

思路（前缀最小值 + 滑动窗口，O(n) 时间 / O(n) 空间）：

1. 由于 arr[i] >= 1（严格正数），窗口和具有单调性，可用滑动窗口枚举所有和恰好为 target 的子数组。
2. 维护 `best[i]`：表示子数组区间 `[0..i]` 内、和为 target 的子数组的最小长度（前缀最小值）。
3. 滑动窗口过程中，当窗口 `[left, right]` 的和恰好等于 target 时：
   - 若 `left > 0` 且 `best[left-1]` 存在（非 INF），则二者不重叠，用 `len + best[left-1]` 更新答案；
   - 用当前窗口长度更新前缀最小值。
4. `best[right] = minLen` 记录到当前位置为止的最优值。
5. 答案不存在则返回 -1。

正确性：窗口 `[left, right]` 只与 `best[left-1]`（完全在其左侧的最短合法子数组）组合，保证不重叠；且 `best[left-1]` 已是该左侧范围内的最小长度，故不漏最优解。

复杂度：时间 O(n)（每个元素进出窗口各一次），空间 O(n)（best 数组）。

## Solution

[SourceCode](./solution.js)
