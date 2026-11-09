# [4109] 统计有效后缀排序的数量 II

## Description


```md
https://leetcode.cn/problems/count-valid-suffix-sorts-ii/description/
* algorithms
* Hard (45.55%)
* Dislikes: -
* Testcase Example:  '[2,2,3]\n[2,2,3,2,1,3,2,2]'
给你两个整数数组 nums 和 target，长度分别为 n 和 m，其中 n <= m。
对于每个下标 i，考虑将原数组的 后缀 nums[i..n - 1] 按 非递增顺序 排序。
返回一个长度为 m - n + 1 的整数数组 ans，其中 ans[k] 表示使排序后的数组等于 target[k..k + n - 1] 的下标 i 的数量。
子数组 是数组中一个连续的 非空 元素序列。
数组的 后缀 是从任意下标开始并延伸至数组末尾的子数组。

示例 1：
输入： nums = [2,2,3], target = [2,2,3,2,1,3,2,2]
输出： [1,1,0,0,0,1]
解释：
分别对从下标 0、1 和 2 开始的后缀排序，会依次得到 [3, 2, 2]、[2, 3, 2] 和 [2, 2, 3]。
k = 0：选择 i = 2 可以得到 [2, 2, 3]。
k = 1：选择 i = 1 可以得到 [2, 3, 2]。
k = 2, 3, 4：均无法得到对应的子数组。
k = 5：选择 i = 0 可以得到 [3, 2, 2]。
因此，答案为 [1,1,0,0,0,1]。
示例 2：
输入： nums = [5,6,5], target = [5,6,5,5,6,5]
输出： [2,1,0,2]
解释：
对从下标 0 开始的后缀排序，会得到 [6, 5, 5]；对从下标 1 或 2 开始的后缀排序，都会得到 [5, 6, 5]。
k = 0：选择 i = 1 或 i = 2 可以得到 [5, 6, 5]。
k = 1：选择 i = 0 可以得到 [6, 5, 5]。
k = 2：无法得到 [5, 5, 6]。
k = 3：选择 i = 1 或 i = 2 可以得到 [5, 6, 5]。
因此，答案为 [2, 1, 0, 2]。

提示：
n == nums.length
m == target.length
1 <= n <= m <= 105
1 <= nums[i], target[i] <= 105

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given two integer arrays nums and target of lengths n and m respectively, where n <= m.
For each index i, consider sorting the suffix nums[i..n - 1] of the original array in non-increasing order (in place).
Return an integer array ans of length m - n + 1, where ans[k] is the number of indices i such that the sorted array equals target[k..k + n - 1].
A subarray is a contiguous non-empty sequence of elements within an array.
A suffix of an array is a subarray extending from some index to the end of the array.

Example 1:
Input: nums = [2,2,3], target = [2,2,3,2,1,3,2,2]
Output: [1,1,0,0,0,1]
Explanation:
Sorting the suffixes starting at indices 0, 1 and 2 gives [3,2,2], [2,3,2] and [2,2,3] respectively.
k = 0: choosing i = 2 yields [2,2,3].
k = 1: choosing i = 1 yields [2,3,2].
k = 2, 3, 4: no index can produce the corresponding subarray.
k = 5: choosing i = 0 yields [3,2,2].
Thus the answer is [1,1,0,0,0,1].

Example 2:
Input: nums = [5,6,5], target = [5,6,5,5,6,5]
Output: [2,1,0,2]
Explanation:
Sorting the suffix starting at index 0 gives [6,5,5]; sorting the suffix starting at index 1 or 2 both give [5,6,5].
k = 0: choosing i = 1 or i = 2 yields [5,6,5].
k = 1: choosing i = 0 yields [6,5,5].
k = 2: [5,5,6] cannot be obtained.
k = 3: choosing i = 1 or i = 2 yields [5,6,5].
Thus the answer is [2,1,0,2].

Constraints:
n == nums.length
m == target.length
1 <= n <= m <= 10^5
1 <= nums[i], target[i] <= 10^5

## Approach

The array obtained by sorting suffix nums[i..n-1] in place is nums[0..i-1] followed by
sorted_desc(nums[i..]). So pair (i, k) is valid iff:
1. nums[0..i-1] == target[k..k+i-1] elementwise  (prefix match, i <= z[k], where z[k] is the
   LCP of nums with target[k..], computed with a Z-array over nums + sentinel + target);
2. sorted_desc(nums[i..]) == target[k+i..k+n-1], which holds iff the tail is non-increasing
   AND multiset(tail) == multiset(nums[i..]).

Key reduction: if (1) holds and multiset(target[k..k+n-1]) == multiset(nums), then the tail
multiset condition is automatic (prefix copies elementwise, so the remaining multisets must
already match). The tail sequence condition reduces to the tail being non-increasing.

- Multiset(window) == multiset(nums) for every sliding window: maintain cntWin against
  cntNums and the number diff of values with differing counts; O(1) per slide.
- Tail non-increasing: let runEnd[j] = length of the longest non-increasing segment ending
  at j. The smallest i whose tail [k+i, k+n-1] is non-increasing is
  i0(k) = max(0, n - runEnd[k+n-1]); monotone, so all i >= i0(k) work.
- Since i ranges over [0, n-1], valid i's are [i0(k), min(z[k], n-1)].

ans[k] = diff == 0 ? max(0, min(z[k], n-1) - i0(k) + 1) : 0.  Total O(n + m).
