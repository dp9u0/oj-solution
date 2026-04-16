# [2910] Minimum Number of Groups to Create a Valid Assignment

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/description/)

* algorithms
* Medium (25.12%)
* Likes:    397
* Dislikes: 189
* Testcase Example:  '[3,2,3,2,3]'

```md
You are given a collection of numbered ballsand instructed to sort them into boxes for a nearly balanced distribution. There are two rules you must follow:

Balls with the samebox must have the same value. But, if you have more than one ball with the same number, you can put them in different boxes.
The biggest box can only have one more ball than the smallest box.

​Return the fewest number of boxes to sort these balls following these rules.

Example 1:

Input:   balls = [3,2,3,2,3]
Output:   2
Explanation:
We can sort balls into boxes as follows:

[3,3,3]
[2,2]

The size difference between the two boxes doesn&#39;t exceed one.

Example 2:

Input:   balls = [10,10,10,3,1,1]
Output:   4
Explanation:
We can sort balls into boxes as follows:



[10]
[10,10]
[3]
[1,1]

You can&#39;t use fewer than four boxes while still following the rules. For example, putting all three balls numbered 10 in one box would break the rule about the maximum size difference between boxes.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 题目翻译

给定球数组 balls（每个球有一个编号），将球放入若干箱子中。规则：同箱子中球编号必须相同；最大箱子比最小箱子至多多一个球。求最少箱子数。

## 解题思路

**枚举组大小 + 贪心验证**。

- 统计每种编号出现次数，minCnt = 最小频次。
- 所有箱子大小为 s 或 s+1，s 从 minCnt 到 1 枚举。
- 对每个频次 c，最少组数 g = ceil(c/(s+1))，验证 g*s <= c（即 c 能分解为 g*s + r, 0<=r<=g）。
- 第一个合法的 s 即最优（s 越大组数越少）。
- 关键：minCnt * k <= n（k 为不同值个数），总复杂度 O(n)。
