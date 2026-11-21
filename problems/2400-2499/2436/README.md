# [2436] 使子数组最大公约数大于一的最小分割数

## Description


```md
https://leetcode.cn/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/description/
* algorithms
* Medium (69.21%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '[12,6,3,14,8]'
给定一个由正整数组成的数组 nums。
将数组拆分为 一个或多个 互相不覆盖的子数组，如下所示:
数组中的每个元素都 只属于一个 子数组，并且
每个子数组元素的 最大公约数 严格大于 1。
返回拆分后可获得的子数组的最小数目。
注意:
子数组的 最大公约数 是能将子数组中所有元素整除的最大正整数。

子数组 是数组的连续部分。


示例 1:
输入: nums = [12,6,3,14,8]
输出: 2
解释: 我们可以把数组分成子数组:[12,6,3] 和 [14,8]。
- 12、6、3 的最大公约数是 3，严格大于 1。
- 14 和 8 的最大公约数是 2，严格来说大于 1。
可以看出，如果不拆分数组将使最大公约数 = 1。
示例 2:
输入: nums = [4,12,6,14]
输出: 1
解释: 我们可以将数组拆分为一个子数组，即整个数组。

提示:
1 <= nums.length <= 2000
2 <= nums[i] <= 109
Hint 1: How does the GCD of an array change when you add more elements to a subarray?
Hint 2: The GCD will always decrease when increasing the size of the subarray,
Hint 3: Keep adding elements to a subarray and if adding a new element will make the GCD = 1, add a new split and a new subarray.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Split nums into contiguous subarrays where each subarray's gcd is > 1; minimize the number of subarrays.

Example 1:
Input: nums = [12,6,3,14,8]
Output: 2

Example 2:
Input: nums = [4,12,6,14]
Output: 1

Constraints: 1 <= nums.length <= 2000, 2 <= nums[i] <= 10^9.

## Approach

DP: dp[i] = min subarrays covering nums[0..i]. From every start j, extend right maintaining running gcd (it only decreases): while gcd > 1, dp[i] = min(dp[i], dp[j-1] + 1); once the gcd hits 1, extending further from j is pointless (gcd is monotone non-increasing). O(n^2 log V).
