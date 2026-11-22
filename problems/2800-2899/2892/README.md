# [2892] 将相邻元素相乘后得到最小化数组

## Description


```md
https://leetcode.cn/problems/minimizing-array-after-replacing-pairs-with-their-product/description/
* algorithms
* Medium (21.64%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[2,3,3,7,3,5]\n20'
给定一个整数数组 nums 和一个整数 k，你可以对数组执行以下操作任意次数：
选择数组中的两个 相邻 元素，例如 x 和 y，使得 x * y <= k ，并用一个值为 x * y 的 单个元素 替换它们（例如，在一次操作中，数组 [1, 2, 2, 3]，其中 k = 5 可以变为 [1, 4, 3] 或 [2, 2, 3]，但不能变为 [1, 2, 6]）。
返回 经过任意次数的操作后， nums 的 最小 可能长度。

示例 1：
输入：nums = [2,3,3,7,3,5], k = 20
输出：3
解释：我们执行以下操作：
1. [2,3,3,7,3,5] -> [6,3,7,3,5]
2. [6,3,7,3,5] -> [18,7,3,5]
3. [18,7,3,5] -> [18,7,15]
可以证明，在执行给定操作后，最小可能长度为3.
示例 2：
输入：nums = [3,3,3,3], k = 6
输出：4
解释：由于每两个相邻元素的乘积都大于 6，所以无法执行任何操作。因此，答案为 4。

约束条件：
1 <= nums.length <= 105
0 <= nums[i] <= 109
1 <= k <= 109
Hint 1: If there is a zero in the array, then the answer would be 1.
Hint 2: Merge all adjacent ones (since 1 * 1 = 1 and k >= 1).
Hint 3: Let dp[i] be the answer to the problem for the first i elements.
Hint 4: To calculate dp[i], try to brute-force all indices j such that elements from j to i are merged together to create a new element.
Hint 5: For a fixed i, you could go backward from ith elements and multiply them together until the product is at most k. Now if you are currently on index j and you've merged all elements from jth element to ith element, dp[i] = min(dp[i], dp[j - 1] + 1).
Hint 6: The above backward moving can be done at most 2 * log2(k) times. Since we've merged adjacent ones, every two adjacent elements have a product of at least 2.
Hint 7: So the total time complexity would be n * 2 * log2(k).

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Repeatedly replace two adjacent elements x, y with x*y when x*y <= k. Minimize the final array length. n up to 1e5, values up to 1e9, k up to 1e9.

Approach: DP with hint 5/6. If any element is 0, answer is 1 (0 absorbs everything). Collapse runs of adjacent 1s into a single 1 (1*1=1 merges freely; isolated 1s behave identically). Then dp[i] = minimal length for the first i elements: start with dp[i] = dp[i-1] + 1 (element alone), then extend a merged block leftwards from i while the running product stays <= k: dp[i] = min(dp[i], dp[j-1] + 1). After collapsing, every leftward step multiplies the product by >= 2 (no two adjacent 1s), so the inner loop runs at most ~2*log2(k) times -> O(n log k) total. Products are compared before multiplying further, so values stay far from 2^53 precision issues.

Verified: [2,3,3,7,3,5], k=20 -> 3; [3,3,3,3], k=6 -> 4.
