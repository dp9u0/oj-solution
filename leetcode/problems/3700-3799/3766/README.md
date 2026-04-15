# [3766] Minimum Operations to Make Binary Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-binary-palindrome/description/)

* algorithms
* Medium (51.82%)
* Likes:    53
* Dislikes: 10
* Testcase Example:  '[1,2,4]'

```md
You are given an integer array nums.
For each element nums[i], you may perform the following operations any number of times (including zero):

Increase nums[i] by 1, or
Decrease nums[i] by 1.

A number is called a binary palindrome if its binary representation without leading zeros reads the same forward and backward.
Your task is to return an integer array ans, where ans[i] represents the minimum number of operations required to convert nums[i] into a binary palindrome.

Example 1:

Input: nums = [1,2,4]
Output: [0,1,1]
Explanation:
One optimal set of operations:



nums[i]
Binary(nums[i])
Nearest
Palindrome
Binary
(Palindrome)
Operations Required
ans[i]




1
1
1
1
Already palindrome
0


2
10
3
11
Increase by 1
1


4
100
3
11
Decrease by 1
1



Thus, ans = [0, 1, 1].

Example 2:

Input: nums = [6,7,12]
Output: [1,0,3]
Explanation:
One optimal set of operations:



nums[i]
Binary(nums[i])
Nearest
Palindrome
Binary
(Palindrome)
Operations Required
ans[i]




6
110
5
101
Decrease by 1
1


7
111
7
111
Already palindrome
0


12
1100
15
1111
Increase by 3
3



Thus, ans = [1, 0, 3].


Constraints:

1 <= nums.length <= 5000
​​​​​​​1 <= nums[i] <= 5000


```

## 中文翻译

给定整数数组 nums，对每个元素可以多次 +1 或 -1。二进制回文数是指二进制表示（无前导零）正反读相同的数。求每个元素变为最近二进制回文数的最少操作次数。

## 解题思路

预生成所有不超过 10000 的二进制回文数，对每个 num 找距离最近的回文数即可。生成方式：枚举位长度，构造前半部分然后镜像。

## Solution

[SourceCode](./solution.js)
