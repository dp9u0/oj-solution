# [1705] Maximum Number of Eaten Apples

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-eaten-apples/description/)

* algorithms
* Medium (43.09%)
* Likes:    887
* Dislikes: 202
* Testcase Example:  '[1,2,3,5,2]\n[3,2,1,4,2]'

```md
There is a special kind of apple tree that grows apples every day for n days. On the ith day, the tree grows apples[i] apples that will rot after days[i] days, that is on day i + days[i] the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any apples, which are denoted by apples[i] == 0 and days[i] == 0.
You decided to eat at most one apple a day (to keep the doctors away). Note that you can keep eating after the first n days.
Given two integer arrays days and apples of length n, return the maximum number of apples you can eat.

Example 1:

Input: apples = [1,2,3,5,2], days = [3,2,1,4,2]
Output: 7
Explanation: You can eat 7 apples:
- On the first day, you eat an apple that grew on the first day.
- On the second day, you eat an apple that grew on the second day.
- On the third day, you eat an apple that grew on the second day. After this day, the apples that grew on the third day rot.
- On the fourth to the seventh days, you eat apples that grew on the fourth day.

Example 2:

Input: apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]
Output: 5
Explanation: You can eat 5 apples:
- On the first to the third day you eat apples that grew on the first day.
- Do nothing on the fouth and fifth days.
- On the sixth and seventh days you eat apples that grew on the sixth day.


Constraints:

n == apples.length == days.length
1 <= n <= 2 * 104
0 <= apples[i], days[i] <= 2 * 104
days[i] = 0 if and only if apples[i] = 0.


```

## 中文翻译

苹果树 n 天内每天长 apples[i] 个苹果，days[i] 天后腐烂。每天最多吃一个苹果，n 天后仍可继续吃。求最多能吃多少个苹果。

## 解题思路

贪心 + 最小堆。每天将有新苹果加入（过期日 = i + days[i]），用最小堆按过期日排序。每天先移除过期苹果，再吃最早过期的苹果。持续到没有苹果可吃为止（包括 n 天之后）。

## Solution

[SourceCode](./solution.js)
