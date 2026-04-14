# [2381] Shifting Letters II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shifting-letters-ii/description/)

* algorithms
* Medium (53.60%)
* Likes:    1774
* Dislikes: 72
* Testcase Example:  '"abc"\n[[0,1,0],[1,2,1],[0,2,1]]'

```md
You are given a string s of lowercase English letters and a 2D integer array shifts where shifts[i] = [starti, endi, directioni]. For every i, shift the characters in s from the index starti to the index endi (inclusive) forward if directioni = 1, or shift the characters backward if directioni = 0.
Shifting a character forward means replacing it with the next letter in the alphabet (wrapping around so that &#39;z&#39; becomes &#39;a&#39;). Similarly, shifting a character backward means replacing it with the previous letter in the alphabet (wrapping around so that &#39;a&#39; becomes &#39;z&#39;).
Return the final string after all such shifts to s are applied.

Example 1:

Input: s = 'abc', shifts = [[0,1,0],[1,2,1],[0,2,1]]
Output: 'ace'
Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = 'zac'.
Secondly, shift the characters from index 1 to index 2 forward. Now s = 'zbd'.
Finally, shift the characters from index 0 to index 2 forward. Now s = 'ace'.
Example 2:

Input: s = 'dztz', shifts = [[0,0,0],[1,1,1]]
Output: 'catz'
Explanation: Firstly, shift the characters from index 0 to index 0 backward. Now s = 'cztz'.
Finally, shift the characters from index 1 to index 1 forward. Now s = 'catz'.


Constraints:

1 <= s.length, shifts.length <= 5 * 104
shifts[i].length == 3
0 <= starti <= endi < s.length
0 <= directioni <= 1
s consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定小写字母字符串 s 和 shifts 数组，每个 shift 为 [start, end, direction]，direction=1 表示前移（a→b），direction=0 表示后移（a→z）。对区间内所有字符执行移位操作，返回最终字符串。

## 解题思路

差分数组。对每个 shift [start, end, dir]：diff[start] += delta, diff[end+1] -= delta。最后求前缀和得到每个位置的总移位量，对 26 取模后应用到字符上。

时间复杂度 O(n + m)。
