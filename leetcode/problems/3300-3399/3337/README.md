# [3337] Total Characters in String After Transformations II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/description/)

* algorithms
* Hard (57.96%)
* Likes:    388
* Dislikes: 83
* Testcase Example:  '"abcyy"\n2\n[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]'

```md
You are given a string s consisting of lowercase English letters, an integer t representing the number of transformations to perform, and an array nums of size 26. In one transformation, every character in s is replaced according to the following rules:

Replace s[i] with the next nums[s[i] - &#39;a&#39;] consecutive characters in the alphabet. For example, if s[i] = &#39;a&#39; and nums[0] = 3, the character &#39;a&#39; transforms into the next 3 consecutive characters ahead of it, which results in 'bcd'.
The transformation wraps around the alphabet if it exceeds &#39;z&#39;. For example, if s[i] = &#39;y&#39; and nums[24] = 3, the character &#39;y&#39; transforms into the next 3 consecutive characters ahead of it, which results in 'zab'.

Return the length of the resulting string after exactly t transformations.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: s = 'abcyy', t = 2, nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]
Output: 7
Explanation:


First Transformation (t = 1):

&#39;a&#39; becomes &#39;b&#39; as nums[0] == 1
&#39;b&#39; becomes &#39;c&#39; as nums[1] == 1
&#39;c&#39; becomes &#39;d&#39; as nums[2] == 1
&#39;y&#39; becomes &#39;z&#39; as nums[24] == 1
&#39;y&#39; becomes &#39;z&#39; as nums[24] == 1
String after the first transformation: 'bcdzz'



Second Transformation (t = 2):

&#39;b&#39; becomes &#39;c&#39; as nums[1] == 1
&#39;c&#39; becomes &#39;d&#39; as nums[2] == 1
&#39;d&#39; becomes &#39;e&#39; as nums[3] == 1
&#39;z&#39; becomes &#39;ab&#39; as nums[25] == 2
&#39;z&#39; becomes &#39;ab&#39; as nums[25] == 2
String after the second transformation: 'cdeabab'



Final Length of the string: The string is 'cdeabab', which has 7 characters.



Example 2:

Input: s = 'azbk', t = 1, nums = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
Output: 8
Explanation:


First Transformation (t = 1):

&#39;a&#39; becomes &#39;bc&#39; as nums[0] == 2
&#39;z&#39; becomes &#39;ab&#39; as nums[25] == 2
&#39;b&#39; becomes &#39;cd&#39; as nums[1] == 2
&#39;k&#39; becomes &#39;lm&#39; as nums[10] == 2
String after the first transformation: 'bcabcdlm'



Final Length of the string: The string is 'bcabcdlm', which has 8 characters.




Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters.
1 <= t <= 109
nums.length == 26
1 <= nums[i] <= 25


```

## 题目翻译

给定字符串 s、整数 t 和长度为 26 的数组 nums。每次变换中，字符 c 被替换为字母表中接下来的 nums[c-'a'] 个连续字符（循环）。求 t 次变换后字符串的长度，结果对 10^9+7 取模。

## 解题思路

矩阵快速幂。只关心每种字符的数量，不关心位置。

定义 26 维向量 count[c] 表示字符 c 的数量。变换可用 26x26 转移矩阵 M 描述：M[i][j] = 1 表示字符 j 变换后产生字符 i。

count[t] = M^t * count[0]，答案为 count[t] 各分量之和。

矩阵快速幂 O(26^3 * log t)，约 26^3 ≈ 17576 * 30 ≈ 527k 次运算。

## Solution

[SourceCode](./solution.js)
