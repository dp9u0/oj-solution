# [2941] 子数组的最大 GCD-Sum

## Description


```md
https://leetcode.cn/problems/maximum-gcd-sum-of-a-subarray/description/
* algorithms
* Hard (28.69%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[2,1,4,4,4,2]\n2'
给定一个整数数组 nums 和一个整数 k.
数组 a 的 gcd-sum 计算方法如下：
设 s 为 a 的所有元素的和。
设 g 为 a 的所有元素的 最大公约数。
a 的 gcd-sum 等于 s * g.
返回 nums 的至少包含 k 个元素的子数组的 最大 gcd-sum。

示例 1：
输入：nums = [2,1,4,4,4,2], k = 2
输出：48
解释：我们选择子数组 [4,4,4]，该数组的 gcd-sum 为 4 * (4 + 4 + 4) = 48。
可以证明我们无法选择任何其他 gcd-sum 大于 48 的子数组。
示例 2：
输入：nums = [7,3,9,4], k = 1
输出：81
解释：我们选择子数组 [9]，该数组的 gcd-sum 为 9 * 9 = 81。
可以证明我们无法选择任何其他 gcd-sum 大于 81 的子数组。

提示：
n == nums.length
1 <= n <= 105
1 <= nums[i] <= 106
1 <= k <= n
Hint 1: Try to answer the query of asking GCD of a subarray in O(1) using sparse tables and preprocessing.
Hint 2: For every index L, let’s find the subarray starting at the index L and maximizing gcd-sum.
Hint 3: Use the fact that if L is fixed, then by adding one more element to the end of a subarray, two things can happen: the gcd remains the same as the last gcd or becomes at least half of the last one.
Hint 4: Now we can use binary search to find the last index R such that gcd of the elements of nums[L..R] would be equal to nums[L].
Hint 5: Now add nums[R + 1] to the current subarray and continue the process to find the last index that has the same gcd as the current gcd of elements.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Maximize sum * gcd over subarrays of length >= k. n <= 1e5, nums[i] <= 1e6.

Approach: for each start i, gcd(nums[i..r]) as r grows takes O(log) distinct values (each extension keeps gcd or at least halves it). Sweep i from right to left keeping the segment list [(g, rEnd)] (ascending r, distinct g) built by gcd-ing the previous list with nums[i] and merging equal neighbors, plus the single-element segment. For each segment with rEnd - i + 1 >= k, candidate = g * (prefix[rEnd+1] - prefix[i]) — the longest r in the segment maximizes the sum. Products reach 1e6 * 1e11 > 2^53, so multiply in BigInt. O(n log) time.

Verified: [2,1,4,4,4,2], k=2 -> 48; [7,3,9,4], k=1 -> 81.
