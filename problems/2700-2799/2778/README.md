# [2778] 特殊元素平方和

## Description


```md
https://leetcode.cn/problems/sum-of-squares-of-special-elements/description/
* algorithms
* Easy (76.46%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[1,2,3,4]'
给你一个下标从 1 开始、长度为 n 的整数数组 nums 。
对 nums 中的元素 nums[i] 而言，如果 n 能够被 i 整除，即 n % i == 0 ，则认为 nums[i] 是一个 特殊元素 。
返回 nums 中所有 特殊元素 的 平方和 。

示例 1：
输入：nums = [1,2,3,4]
输出：21
解释：nums 中共有 3 个特殊元素：nums[1]，因为 4 被 1 整除；nums[2]，因为 4 被 2 整除；以及 nums[4]，因为 4 被 4 整除。
因此，nums 中所有特殊元素的平方和等于 nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21 。
示例 2：
输入：nums = [2,7,1,19,18,3]
输出：63
解释：nums 中共有 4 个特殊元素：nums[1]，因为 6 被 1 整除；nums[2] ，因为 6 被 2 整除；nums[3]，因为 6 被 3 整除；以及 nums[6]，因为 6 被 6 整除。
因此，nums 中所有特殊元素的平方和等于 nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63 。

提示：
1 <= nums.length == n <= 50
1 <= nums[i] <= 50
Hint 1: Iterate over all the elements of the array. For each index i, check if it is special using the modulo operator.
Hint 2: if n%i == 0, index i is special and you should add nums[i] to the answer.

```

## Description (English)

You are given a 1-indexed integer array `nums` of length `n`.

An element `nums[i]` is called **special** if `i` divides `n`, i.e. `n % i == 0`.

Return the **sum of the squares** of all **special** elements of `nums`.

Example 1:
Input: nums = [1,2,3,4]
Output: 21
Explanation: There are 3 special elements: nums[1] since 4 divides 1; nums[2] since 4 divides 2; and nums[4] since 4 divides 4. Hence the sum of squares is 1*1 + 2*2 + 4*4 = 21.

Example 2:
Input: nums = [2,7,1,19,18,3]
Output: 63
Explanation: There are 4 special elements: nums[1], nums[2], nums[3], nums[6] since 6 is divisible by 1, 2, 3 and 6. Hence the sum of squares is 2*2 + 7*7 + 1*1 + 3*3 = 63.

Constraints:
- 1 <= nums.length == n <= 50
- 1 <= nums[i] <= 50

## Approach

Traverse the array once with 1-based index `i` (1..n). If `n % i == 0`, then `nums[i-1]` is special; add its square to the answer.

- Index `i` and `n` always divide `n`, so the first and last elements are always counted.
- Time: O(n), Space: O(1).

## Solution

[SourceCode](./solution.js)
