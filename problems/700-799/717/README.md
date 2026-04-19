# [717] 1-bit and 2-bit Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/1-bit-and-2-bit-characters/description/)

* algorithms
* Easy (48.76%)
* Testcase Example:  '[1,0,0]'

```md
We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).  
Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.
Example 1:
Input:
bits = [1, 0, 0]
Output: True
Explanation:
The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.
Example 2:
Input:
bits = [1, 1, 1, 0]
Output: False
Explanation:
The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.
Note:
1 .
bits[i] is always 0 or 1.

```

## Solution

题目中自带了一个规则 : bits 只包含3种character : 0,10,11,肯定没有second char 值为 01, 因此碰到01 一定是 `[..0][1...]` 这样分割的.因此只需要考虑倒数第二个0后面的char即可.

可以分为两类 :

* xxxx01110: 在出现倒数第二个0前出现了 奇数个1,这种不符合要求
* xxxx0110 : 在出现倒数第二个0前出现了 偶数(包括0)个1,这种符合要求

[SourceCode](./solution.js)