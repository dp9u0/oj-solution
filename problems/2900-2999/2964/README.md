# [2964] 可被整除的三元组数量

## Description


```md
https://leetcode.cn/problems/number-of-divisible-triplet-sums/description/
* algorithms
* Medium (40.52%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '[3,3,4,7,8]\n5'
给定一个 下标从 0 开始 的整数数组 nums 和一个整数 d，请返回满足 i < j < k 且 (nums[i] + nums[j] + nums[k]) % d == 0 的三元组 (i, j, k) 的数量。

示例 1:
输入：nums = [3,3,4,7,8], d = 5
输出：3
解释：可以被5整除的三元组有：(0, 1, 2),(0, 2, 4),(1, 2, 4)。其他没有其他能被5整除的三元组。因此，答案是3。
示例 2：
输入：nums = [3,3,3,3], d = 3
输出：4
解释：这里选择的任何三元组的和都是9，可以被3整除。因此，答案是所有三元组的总数，即4。
示例 3:
输入：nums = [3,3,3,3], d = 6
输出：0
解释：这里选择的任何三元组的和都是9，不能被6整除。因此，答案是0。

提示：
1 <= nums.length <= 1000
1 <= nums[i] <= 109
1 <= d <= 109
Hint 1: Fix index L to be the leftmost element of a triplet.
Hint 2: Starting from L, go forward and add the remainder of each element to a map.
Hint 3: Now when you are at index R, consider nums[L] + nums[R] and calculate what the remainder of the third element should be.
Hint 4: Then use the map to find the number of valid third elements between L and R.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Count triples i < j < k with (nums[i]+nums[j]+nums[k]) % d == 0. n <= 1000.

Approach: fix the leftmost index L; sweep R from L+2 upward keeping a residue-count map of elements strictly between L and R; at each R the needed third residue is (d - (nums[L]+nums[R]) % d) % d; add map[needed]. O(n^2) time, O(n) space.

Verified: [3,3,4,7,8], d=5 -> 3.
