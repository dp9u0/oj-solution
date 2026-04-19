# [3317] Find the Number of Possible Ways for an Event

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/description/)

* algorithms
* Hard (34.89%)
* Likes:    76
* Dislikes: 15
* Testcase Example:  '1\n2\n3'

```md
You are given three integers n, x, and y.
An event is being held for n performers. When a performer arrives, they are assigned to one of the x stages. All performers assigned to the same stage will perform together as a band, though some stages might remain empty.
After all performances are completed, the jury will award each band a score in the range [1, y].
Return the total number of possible ways the event can take place.
Since the answer may be very large, return it modulo 109 + 7.
Note that two events are considered to have been held differently if either of the following conditions is satisfied:

Any performer is assigned a different stage.
Any band is awarded a different score.


Example 1:

Input: n = 1, x = 2, y = 3
Output: 6
Explanation:

There are 2 ways to assign a stage to the performer.
The jury can award a score of either 1, 2, or 3 to the only band.


Example 2:

Input: n = 5, x = 2, y = 1
Output: 32
Explanation:

Each performer will be assigned either stage 1 or stage 2.
All bands will be awarded a score of 1.


Example 3:

Input: n = 3, x = 3, y = 4
Output: 684


Constraints:

1 <= n, x, y <= 1000


```

## 中文翻译

给定 n 个表演者、x 个舞台和分数范围 [1, y]。每个表演者被分配到一个舞台，同舞台的表演者组成乐队。之后评审团为每个乐队打分（1 到 y）。求所有可能的事件方式数，对 10^9+7 取模。

两个事件不同当且仅当：某个表演者被分配到不同舞台，或某个乐队获得不同分数。

约束：1 <= n, x, y <= 1000

## 解题思路

**第二类 Stirling 数 + 组合计数**

1. 将 n 个表演者分配到恰好 k 个非空舞台：C(x,k) * k! * S(n,k)，其中 S(n,k) 为第二类 Stirling 数。
2. 为 k 个乐队各打一个分数：y^k。
3. 总答案 = sum_{k=1}^{min(n,x)} P(x,k) * S(n,k) * y^k。
4. S(n,k) 用 DP 递推：S(n,k) = k * S(n-1,k) + S(n-1,k-1)。
5. 时间 O(n * min(n,x))。

## Solution

[SourceCode](./solution.js)
