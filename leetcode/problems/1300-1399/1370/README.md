# [1370] Increasing Decreasing String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/increasing-decreasing-string/description/)

* algorithms
* Easy (77.25%)
* Likes:    844
* Dislikes: 878
* Testcase Example:  '"aaaabbbbcccc"'

```md
You are given a string s. Reorder the string using the following algorithm:

Remove the smallest character from s and append it to the result.
Remove the smallest character from s that is greater than the last appended character, and append it to the result.
Repeat step 2 until no more characters can be removed.
Remove the largest character from s and append it to the result.
Remove the largest character from s that is smaller than the last appended character, and append it to the result.
Repeat step 5 until no more characters can be removed.
Repeat steps 1 through 6 until all characters from s have been removed.

If the smallest or largest character appears more than once, you may choose any occurrence to append to the result.
Return the resulting string after reordering s using this algorithm.

Example 1:

Input: s = 'aaaabbbbcccc'
Output: 'abccbaabccba'
Explanation: After steps 1, 2 and 3 of the first iteration, result = 'abc'
After steps 4, 5 and 6 of the first iteration, result = 'abccba'
First iteration is done. Now s = 'aabbcc' and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = 'abccbaabc'
After steps 4, 5 and 6 of the second iteration, result = 'abccbaabccba'

Example 2:

Input: s = 'rat'
Output: 'art'
Explanation: The word 'rat' becomes 'art' after re-ordering it with the mentioned algorithm.


Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters.


```

## 中文翻译

给定字符串 s，按算法重排：先从小到大取字符，再从大到小取字符，重复直到取完。返回结果字符串。

## 解题思路

**计数排序 + 正逆序交替**

1. 统计 26 个字母频次 cnt[26]
2. 每轮：正序扫描 0~25，有频次就取一个；再逆序扫描 25~0，有频次就取一个
3. 直到所有字符取完

时间复杂度：O(26 * n)，空间复杂度：O(26)

## Solution

[SourceCode](./solution.js)
