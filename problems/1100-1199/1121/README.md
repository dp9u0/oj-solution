# [1121] 将数组分成几个递增序列

## Description


```md
https://leetcode.cn/problems/divide-array-into-increasing-sequences/description/
* algorithms
* Hard (62.30%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '[1,2,2,3,3,4,4]\n3'
给你一个 非递减 的正整数数组 nums 和整数 K，判断该数组是否可以被分成一个或几个 长度至少 为 K 的 不相交的递增子序列。

示例 1：
输入：nums = [1,2,2,3,3,4,4], K = 3
输出：true
解释：
该数组可以分成两个子序列 [1,2,3,4] 和 [2,3,4]，每个子序列的长度都至少是 3。
示例 2：
输入：nums = [5,6,6,7,8], K = 3
输出：false
解释：
没有办法根据条件来划分数组。

提示：
1 <= nums.length <= 10^5
1 <= K <= nums.length
1 <= nums[i] <= 10^5
Hint 1: Think in the frequency of the numbers and how this affects the number of sequences needed.
Hint 2: What is the minimum number of sequences we need to form? Considering frequency of the numbers.
Hint 3: Think about the least number of sequences to maximize the lengths.
Hint 4: The number of sequences needed is equal to the maximum frequency of an element.
Hint 5: How to put the other elements into sequences ? Think in a greedy approach.

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a non-decreasing positive array nums and K, determine whether it can be split into disjoint strictly increasing subsequences each of length ≥ K.

- Example: [1,2,2,3,3,4,4], K = 3 → `true` ([1,2,3,4] + [2,3,4])

## Approach

**频次判定**。最大频次 f 是所需序列数的下界(同值最多每序列一个,须 f 个序列装下)。且 f 个序列足够:把排序数组的第 i 个元素分给序列 i mod f——同一序列相邻两元素相距 f,若相等则该值频次 > f,矛盾,故严格递增;每序列长度 ⌊n/f⌋ ≥ K ⟺ n ≥ f·K。判定即 n ≥ maxFreq × K,一趟统计 O(n)。
