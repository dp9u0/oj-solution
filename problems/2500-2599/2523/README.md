# [2523] Closest Prime Numbers in Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/closest-prime-numbers-in-range/description/)

* algorithms
* Medium (51.71%)
* Likes:    924
* Dislikes: 77
* Testcase Example:  '10\n19'

```md
Given two positive integers left and right, find the two integers num1 and num2 such that:

left <= num1 < num2 <= right .
Both num1 and num2 are prime numbers.
num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.

Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

Example 1:

Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.

Example 2:

Input: left = 4, right = 6
Output: [-1,-1]
Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.


Constraints:

1 <= left <= right <= 106


.spoilerbutton {display:block; border:dashed; padding: 0px 0px; margin:10px 0px; font-size:150%; font-weight: bold; color:#000000; background-color:cyan; outline:0;
}
.spoiler {overflow:hidden;}
.spoiler > div {-webkit-transition: all 0s ease;-moz-transition: margin 0s ease;-o-transition: all 0s ease;transition: margin 0s ease;}
.spoilerbutton[value="Show Message"] + .spoiler > div {margin-top:-500%;}
.spoilerbutton[value="Hide Message"] + .spoiler {padding:5px;}


```

## 中文翻译

给定区间 [left, right]，找到两个相邻素数 num1 < num2 使 num2 - num1 最小。多解取最小 num1。无解返回 [-1, -1]。

## 解题思路

埃拉托斯特尼筛法求 [left, right] 内所有素数，然后遍历相邻素数对找最小差。

时间复杂度：O(right * log(log(right)))，空间复杂度：O(right)

## Solution

[SourceCode](./solution.js)
