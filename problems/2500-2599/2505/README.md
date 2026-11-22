# [2505] 所有子序列和的按位或

## Description


```md
https://leetcode.cn/problems/bitwise-or-of-all-subsequence-sums/description/
* algorithms
* Medium (48.63%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '[2,1,0,3]'
给你一个整数数组 nums ，返回对数组中所有可能的 子序列 之和进行按位 或 运算后得到的值。
数组的 子序列 是从数组中删除零个或多个元素且不改变剩余元素的顺序得到的序列。

示例 1：
输入：nums = [2,1,0,3]
输出：7
解释：所有可能的子序列的和包括：0、1、2、3、4、5、6 。
由于 0 OR 1 OR 2 OR 3 OR 4 OR 5 OR 6 = 7，所以返回 7 。
示例 2：
输入：nums = [0,0,0]
输出：0
解释：0 是唯一可能的子序列的和，所以返回 0 。

提示：
1 <= nums.length <= 105
0 <= nums[i] <= 109
Hint 1: Think of each bit separately, i.e. try to figure out if ith bit is set in the answer.
Hint 2: ith bit is set in the answer if it's set in one of the array elements or it can be made using some of them.
Hint 3: Try to sum up lower bits and make higher bits.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Return the bitwise OR of the sums of all subsequences of nums.

Example 1:
Input: nums = [2,1,0,3]
Output: 7

Example 2:
Input: nums = [0,0,0]
Output: 0

Constraints: 1 <= nums.length <= 10^5, 0 <= nums[i] <= 10^9.

## Approach

Answer = OR over all contiguous subarray sums (equal to the OR over all subsequence sums: any subsequence-sum bit is also produced by some subarray sum).

Per bit b, it is achievable iff some subarray sum S satisfies S mod 2^(b+1) >= 2^b. Checks in order of cost:
1. Bits already set in OR(nums) or the total sum T are free.
2. Cheap: the maximum subarray sum <= 2^(b+1)-1 (greedy reset Kadane, nums non-negative) >= 2^b.
3. Expensive: prefix sums mod 2^(b+1); need indices i<j with cyclic-residue distance in [2^b, 2^(b+1)); sorted residues + Fenwick count of inserted entries inside the cyclic half-range.

Total O(n log n) worst case, O(n) typical.
