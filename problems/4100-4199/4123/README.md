# [4123] 删除数组的最小代价

## Description


```md
https://leetcode.cn/problems/minimum-cost-to-delete-array/description/
* algorithms
* Hard (53.22%)
* Dislikes: -
* Testcase Example:  '[2,-7,3,-5]'
给你一个整数数组 nums。
每次操作，你可以从当前数组中任选一个长度 至少为 2 的 子数组，并将其删除。该操作的代价为所选子数组的 首尾 元素之和。
每次操作后，将剩余元素按原有顺序拼接起来。
返回删除 整个 数组所需的 最小 总代价。
子数组 是数组中一段连续且 非空 的元素序列。

示例 1：
输入： nums = [2,-7,3,-5]
输出： -7
解释：
删除 [-7, 3]，代价为 -7 + 3 = -4。数组变为 [2, -5]。
删除 [2, -5]，代价为 2 + (-5) = -3。
总代价为 -4 + (-3) = -7。
示例 2：
输入： nums = [4,0,-5,2]
输出： 1
解释：
删除 [0, -5]，代价为 0 + (-5) = -5。数组变为 [4, 2]。
删除 [4, 2]，代价为 4 + 2 = 6。
总代价为 -5 + 6 = 1。
示例 3：
输入： nums = [7,-8,1]
输出： 8
解释：
要删除整个数组，必须在一次操作中删除全部三个元素。如果只删除两个元素，剩下的一个元素将无法删除。
删除 [7, -8, 1] 的代价为 7 + 1 = 8。

提示：
2 <= nums.length <= 105
-109 <= nums[i] <= 109
Hint 1: Only the two endpoints of each deleted subarray contribute to the cost. Each element can contribute at most once.
Hint 2: The original first and last elements must both contribute. Every operation contributes exactly two distinct elements, so an even number of interior elements must also contribute.
Hint 3: Conversely, any even-sized selection of interior elements is achievable: pair them consecutively in their original order, delete each interval between a pair, then delete the remaining array using the original first and last elements.
Hint 4: The problem therefore reduces to choosing an even number of interior elements with minimum sum. Maintain the minimum selected sum for each parity while scanning the interior.
Hint 5: Initialize even = 0 and odd = infinity. For each interior value x, simultaneously update newEven = min(even, odd + x) and newOdd = min(odd, even + x). The answer is nums[0] + nums[n - 1] + even. Use 64-bit arithmetic.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Each operation deletes a subarray of length >= 2, costing first + last elements of it. Delete the whole array with min total cost.

Approach: every element contributes at most once (as an endpoint of one deletion); nums[0] and nums[n-1] always contribute (the final deletion spans them); each op contributes exactly 2 elements so an even number of interior elements contribute. Conversely ANY even-size selection of interior elements is achievable (pair them consecutively, delete intervals between pairs, finish with one final deletion). So answer = nums[0] + nums[n-1] + minEven, where minEven = min sum of an even-size subset of interior elements: DP even/odd = min selected sum of even/odd cardinality; for each x: newEven = min(even, odd + x), newOdd = min(odd, even + x). O(n); sums <= 1e14 < 2^53.

Verified: [2,-7,3,-5] -> -7; [4,0,-5,2] -> 1; [7,-8,1] -> 8.
