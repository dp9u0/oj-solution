# [553] Optimal Division

## Description

[LeetCode Problem Description](https://leetcode.com/problems/optimal-division/description/)

* algorithms
* Medium (62.84%)
* Likes:    421
* Dislikes: 1637
* Testcase Example:  '[1000,100,10,2]'

```md
You are given an integer array nums. The adjacent integers in nums will perform the float division.

For example, for nums = [2,3,4], we will evaluate the expression '2/3/4'.

However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum.
Return the corresponding expression that has the maximum value in string format.
Note: your expression should not contain redundant parenthesis.

Example 1:

Input: nums = [1000,100,10,2]
Output: '1000/(100/10/2)'
Explanation: 1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in '1000/((100/10)/2)' are redundant since they do not influence the operation priority.
So you should return '1000/(100/10/2)'.
Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2

Example 2:

Input: nums = [2,3,4]
Output: '2/(3/4)'
Explanation: (2/(3/4)) = 8/3 = 2.667
It can be shown that after trying all possibilities, we cannot get an expression with evaluation greater than 2.667


Constraints:

1 <= nums.length <= 10
2 <= nums[i] <= 1000
There is only one optimal division for the given input.


```

## 翻译

给定整数数组 nums，相邻整数执行浮点除法。可添加括号改变优先级，返回使表达式值最大的字符串（不含冗余括号）。

## 解题思路

数学规律：要最大化 a/b/c/d/...，最优解总是 a/(b/c/d/...)，即将第一个除数后的所有数用括号括起来。因为 a/(b/c/d) = a·c·d·.../b，最大化了分子并最小化了分母。

## Solution

[SourceCode](./solution.js)
