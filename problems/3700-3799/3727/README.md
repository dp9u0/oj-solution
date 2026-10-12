# [3727] 最大交替平方和

## Description


```md
https://leetcode.cn/problems/maximum-alternating-sum-of-squares/description/
* algorithms
* Medium (73.40%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给你一个整数数组 nums。你可以以任意顺序 重新排列元素 。
数组 arr 的 交替得分 定义为：
score = arr[0]2 - arr[1]2 + arr[2]2 - arr[3]2 + ...
在对 nums 重新排列后，返回其 最大可能的交替得分。

示例 1：
输入： nums = [1,2,3]
输出： 12
解释：
nums 的一种可行重排为 [2,1,3]，该排列在所有可能重排中给出了最大交替得分。
交替得分计算如下：
score = 22 - 12 + 32 = 4 - 1 + 9 = 12
示例 2：
输入： nums = [1,-1,2,-2,3,-3]
输出： 16
解释：
nums 的一种可行重排为 [-3,-1,-2,1,3,2]，该排列在所有可能重排中给出了最大交替得分。
交替得分计算如下：
score = (-3)2 - (-1)2 + (-2)2 - (1)2 + (3)2 - (2)2 = 9 - 1 + 4 - 1 + 9 - 4 = 16

提示：
1 <= nums.length <= 105
-4 * 104 <= nums[i] <= 4 * 104
Hint 1: The score uses squares of values. The original signs of nums don't affect the squared terms.
Hint 2: In the alternating sum, even indices contribute positively and odd indices negatively.

```

## Description (English)

```md
You are given an integer array nums. You may rearrange its elements in any order.

The alternating score of an array arr is defined as:

score = arr[0]^2 - arr[1]^2 + arr[2]^2 - arr[3]^2 + ...

Return the maximum possible alternating score over all rearrangements of nums.

Example 1:
Input: nums = [1,2,3]
Output: 12
Explanation: One rearrangement is [2,1,3], giving score = 2^2 - 1^2 + 3^2 = 4 - 1 + 9 = 12.

Example 2:
Input: nums = [1,-1,2,-2,3,-3]
Output: 16
Explanation: One rearrangement is [-3,-1,-2,1,3,2], giving score = 9 - 1 + 4 - 1 + 9 - 4 = 16.

Constraints:
1 <= nums.length <= 10^5
-4 * 10^4 <= nums[i] <= 4 * 10^4
```

## Approach

关键观察：

1. **符号无关**：得分只用到 `arr[i]` 的平方，`x^2 = (-x)^2`，所以原数组的正负号不重要，只需考虑 `b[i] = nums[i]^2`。
2. **槽位数量固定**：长度为 n 的排列中，偶数下标（贡献 `+b`）有 `p = ceil(n/2)` 个，奇数下标（贡献 `-b`）有 `q = floor(n/2)` 个。
3. **重排不等式**：设全体平方和为 `total`，选入正位的集合为 `P`，则

   `score = sum(P) - sum(N) = 2 * sum(P) - total`

   要最大化 `score`，等价于最大化 `sum(P)`；在必须恰好选 `p` 个元素的前提下，选平方值最大的 `p` 个即可。

**算法**：把每个数的平方升序排序，前 `q` 个取负、其余 `p` 个取正，求和即为答案。

复杂度：时间 `O(n log n)`，空间 `O(n)`。

验证示例 2：平方 `[1,1,4,4,9,9]`，`q = 3`，score = (9+9+4) - (4+1+1) = 16 ✓

## Solution

[SourceCode](./solution.js)
