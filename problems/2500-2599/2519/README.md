# [2519] 统计 K-Big 索引的数量

## Description


```md
https://leetcode.cn/problems/count-the-number-of-k-big-indices/description/
* algorithms
* Hard (58.68%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '[2,3,6,5,2,3]\n2'
给定一个 下标从0开始 的整数数组 nums 和一个正整数 k 。
如果满足以下条件，我们称下标 i 为 k-big ：
存在至少 k 个不同的索引 idx1 ，满足 idx1 < i 且 nums[idx1] < nums[i] 。
存在至少 k 个不同的索引 idx2 ，满足 idx2 > i 且 nums[idx2] < nums[i] 。
返回 k-big 索引的数量。

示例 1 ：
输入：nums = [2,3,6,5,2,3], k = 2
输出：2
解释：在nums中只有两个 2-big 的索引:
- i = 2 --> 有两个有效的 idx1: 0 和 1。有三个有效的 idx2: 2、3 和 4。
- i = 3 --> 有两个有效的 idx1: 0 和 1。有两个有效的 idx2: 3 和 4。
示例 2 ：
输入：nums = [1,1,1], k = 3
输出：0
解释：在 nums 中没有 3-big 的索引

提示：
1 <= nums.length <= 105
1 <= nums[i], k <= nums.length
Hint 1: The intended solution uses Fenwick Tree.
Hint 2: Let’s describe the solution for counting the number of elements smaller than nums[i] in the range [0, i - 1], and counting in the range [i + 1, nums.length - 1] can be done similarly by simply reversing the array.
Hint 3: Iterate from left to right and maintain the Fenwick Tree. Save the value of the query(nums[i]) and update nums[i] + 1 by 1.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Index i is k-big when at least k indices idx1 < i have nums[idx1] < nums[i], and at least k indices idx2 > i have nums[idx2] < nums[i]. Count k-big indices.

Example 1:
Input: nums = [2,3,6,5,2,3], k = 2
Output: 2

Example 2:
Input: nums = [1,1,1], k = 3
Output: 0

Constraints: 1 <= nums.length <= 10^5, 1 <= nums[i], k <= nums.length.

## Approach

Two Fenwick passes over value ranks: left-to-right, before inserting nums[i], query how many already-inserted values are < nums[i]; then reversed for the right side. Both counts >= k -> answer++. O(n log n).
