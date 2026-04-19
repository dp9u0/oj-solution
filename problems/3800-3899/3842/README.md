# [3842] Toggle Light Bulbs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/toggle-light-bulbs/description/)

* algorithms
* Easy (71.89%)
* Likes:    59
* Dislikes: 2
* Testcase Example:  '[10,30,20,10]'

```md
You are given an array bulbs of integers between 1 and 100.
There are 100 light bulbs numbered from 1 to 100. All of them are switched off initially.
For each element bulbs[i] in the array bulbs:

If the bulbs[i]th light bulb is currently off, switch it on.
Otherwise, switch it off.

Return the list of integers denoting the light bulbs that are on in the end, sorted in ascending order. If no bulb is on, return an empty list.

Example 1:

Input: bulbs = [10,30,20,10]
Output: [20,30]
Explanation:

The bulbs[0] = 10th light bulb is currently off. We switch it on.
The bulbs[1] = 30th light bulb is currently off. We switch it on.
The bulbs[2] = 20th light bulb is currently off. We switch it on.
The bulbs[3] = 10th light bulb is currently on. We switch it off.
In the end, the 20th and the 30th light bulbs are on.


Example 2:

Input: bulbs = [100,100]
Output: []
Explanation:

The bulbs[0] = 100th light bulb is currently off. We switch it on.
The bulbs[1] = 100th light bulb is currently on. We switch it off.
In the end, no light bulb is on.



Constraints:

1 <= bulbs.length <= 100
1 <= bulbs[i] <= 100


```

## 中文翻译

100 个灯泡初始关闭。遍历 bulbs 数组，每次切换对应灯泡状态。返回最终亮着的灯泡编号（升序）。

## 解题思路

统计每个灯泡被切换的次数，奇数次为亮，偶数次为灭。

## Solution

[SourceCode](./solution.js)
