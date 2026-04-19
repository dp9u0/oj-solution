# [2269] Find the K-Beauty of a Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-k-beauty-of-a-number/description/)

* algorithms
* Easy (63.24%)
* Likes:    741
* Dislikes: 47
* Testcase Example:  '240\n2'

```md
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.

Given integers num and k, return the k-beauty of num.
Note:

Leading zeros are allowed.
0 is not a divisor of any value.

A substring is a contiguous sequence of characters in a string.

Example 1:

Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- '24' from '240': 24 is a divisor of 240.
- '40' from '240': 40 is a divisor of 240.
Therefore, the k-beauty is 2.

Example 2:

Input: num = 430043, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- '43' from '430043': 43 is a divisor of 430043.
- '30' from '430043': 30 is not a divisor of 430043.
- '00' from '430043': 0 is not a divisor of 430043.
- '04' from '430043': 4 is not a divisor of 430043.
- '43' from '430043': 43 is a divisor of 430043.
Therefore, the k-beauty is 2.


Constraints:

1 <= num <= 109
1 <= k <= num.length (taking num as a string)


```

## 题目翻译

给定整数 num 和 k，将 num 转为字符串后，找出所有长度为 k 的子串对应的整数中，能整除 num 的个数（0 不能作为除数）。

## 解题思路

滑动窗口，遍历所有长度为 k 的子串，转为整数后检查是否能整除 num。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
