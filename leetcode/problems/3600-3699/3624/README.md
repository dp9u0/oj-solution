# [3624] Number of Integers With Popcount-Depth Equal to K II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-ii/description/)

* algorithms
* Hard (59.48%)
* Likes:    36
* Dislikes: 9
* Testcase Example:  '[2,4]\n[[1,0,1,1],[2,1,1],[1,0,1,0]]'

```md
You are given an integer array nums.
For any positive integer x, define the following sequence:

p0 = x
pi+1 = popcount(pi) for all i >= 0, where popcount(y) is the number of set bits (1&#39;s) in the binary representation of y.

This sequence will eventually reach the value 1.
The popcount-depth of x is defined as the smallest integer d >= 0 such that pd = 1.
For example, if x = 7 (binary representation '111'). Then, the sequence is: 7 &rarr; 3 &rarr; 2 &rarr; 1, so the popcount-depth of 7 is 3.
You are also given a 2D integer array queries, where each queries[i] is either:

[1, l, r, k] - Determine the number of indices j such that l <= j <= r and the popcount-depth of nums[j] is equal to k.
[2, idx, val] - Update nums[idx] to val.

Return an integer array answer, where answer[i] is the number of indices for the ith query of type [1, l, r, k].

Example 1:

Input: nums = [2,4], queries = [[1,0,1,1],[2,1,1],[1,0,1,0]]
Output: [2,1]
Explanation:



i
queries[i]
nums
binary(nums)
popcount-
depth
[l, r]
k
Valid
nums[j]
updated
nums
Answer




0
[1,0,1,1]
[2,4]
[10, 100]
[1, 1]
[0, 1]
1
[0, 1]
&mdash;
2


1
[2,1,1]
[2,4]
[10, 100]
[1, 1]
&mdash;
&mdash;
&mdash;
[2,1]
&mdash;


2
[1,0,1,0]
[2,1]
[10, 1]
[1, 0]
[0, 1]
0
[1]
&mdash;
1



Thus, the final answer is [2, 1].

Example 2:

Input: nums = [3,5,6], queries = [[1,0,2,2],[2,1,4],[1,1,2,1],[1,0,1,0]]
Output: [3,1,0]
Explanation:



i
queries[i]
nums
binary(nums)
popcount-
depth
[l, r]
k
Valid
nums[j]
updated
nums
Answer




0
[1,0,2,2]
[3, 5, 6]
[11, 101, 110]
[2, 2, 2]
[0, 2]
2
[0, 1, 2]
&mdash;
3


1
[2,1,4]
[3, 5, 6]
[11, 101, 110]
[2, 2, 2]
&mdash;
&mdash;
&mdash;
[3, 4, 6]
&mdash;


2
[1,1,2,1]
[3, 4, 6]
[11, 100, 110]
[2, 1, 2]
[1, 2]
1
[1]
&mdash;
1


3
[1,0,1,0]
[3, 4, 6]
[11, 100, 110]
[2, 1, 2]
[0, 1]
0
[]
&mdash;
0



Thus, the final answer is [3, 1, 0].

Example 3:

Input: nums = [1,2], queries = [[1,0,1,1],[2,0,3],[1,0,0,1],[1,0,0,2]]
Output: [1,0,1]
Explanation:



i
queries[i]
nums
binary(nums)
popcount-
depth
[l, r]
k
Valid
nums[j]
updated
nums
Answer




0
[1,0,1,1]
[1, 2]
[1, 10]
[0, 1]
[0, 1]
1
[1]
&mdash;
1


1
[2,0,3]
[1, 2]
[1, 10]
[0, 1]
&mdash;
&mdash;
&mdash;
[3, 2]



2
[1,0,0,1]
[3, 2]
[11, 10]
[2, 1]
[0, 0]
1
[]
&mdash;
0


3
[1,0,0,2]
[3, 2]
[11, 10]
[2, 1]
[0, 0]
2
[0]
&mdash;
1



Thus, the final answer is [1, 0, 1].


Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= 1015
1 <= queries.length <= 105
queries[i].length == 3 or 4

queries[i] == [1, l, r, k] or,
queries[i] == [2, idx, val]
0 <= l <= r <= n - 1
0 <= k <= 5
0 <= idx <= n - 1
1 <= val <= 1015




```

## 翻译

给定数组 nums 和查询。popcount-depth 定义为反复取 popcount 直到得到 1 的步数。查询有两种：区间内 popcount-depth 等于 k 的个数；单点更新。k <= 5。

## 解题思路

对每个元素预计算 popcount-depth（最多5次迭代）。用 6 个 BIT（树状数组），每个 k 值一个，维护每个位置是否 depth=k。查询时对 BIT[k] 做 range sum。更新时先删旧值再加新值。O((n+q) log n)。

## Solution

[SourceCode](./solution.js)
