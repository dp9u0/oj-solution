# [1578] Minimum Time to Make Rope Colorful

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/)

* algorithms
* Medium (65.22%)
* Likes:    4339
* Dislikes: 156
* Testcase Example:  '"abaac"\n[1,2,3,4,5]'

```md
Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.
Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.
Return the minimum time Bob needs to make the rope colorful.

Example 1:


Input: colors = 'abaac', neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, &#39;a&#39; is blue, &#39;b&#39; is red, and &#39;c&#39; is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.
Example 2:


Input: colors = 'abc', neededTime = [1,2,3]
Output: 0
Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.

Example 3:


Input: colors = 'aabaa', neededTime = [1,2,3,4,1]
Output: 2
Explanation: Bob will remove the balloons at indices 0 and 4. Each balloons takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.


Constraints:

n == colors.length == neededTime.length
1 <= n <= 105
1 <= neededTime[i] <= 104
colors contains only lowercase English letters.


```

## 题目翻译

Alice 有 n 个气球排在一根绳子上。给定一个下标从 0 开始的字符串 colors，其中 colors[i] 是第 i 个气球的颜色。Alice 希望绳子是"多彩的"，即不想有两个相邻的气球颜色相同。Bob 可以移除一些气球来实现这个目标。给定一个下标从 0 开始的整数数组 neededTime，其中 neededTime[i] 是移除第 i 个气球所需的时间（秒）。返回使绳子多彩所需的最小时间。

## Approach

**贪心算法。** 遍历字符串，对于每个连续相同颜色的气球组，我们需要只保留一个（保留 neededTime 最大的那个），移除其余的。具体实现：维护当前组中的最大 neededTime，当遇到与前一个气球颜色相同时，将较小值加入结果，并更新最大值；颜色不同时重置最大值。时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
