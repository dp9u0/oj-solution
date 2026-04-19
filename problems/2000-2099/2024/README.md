# [2024] Maximize the Confusion of an Exam

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/description/)

* algorithms
* Medium (69.87%)
* Likes:    3091
* Dislikes: 55
* Testcase Example:  '"TTFF"\n2'

```md
A teacher is writing a test with n true/false questions, with &#39;T&#39; denoting true and &#39;F&#39; denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).
You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

Change the answer key for any question to &#39;T&#39; or &#39;F&#39; (i.e., set answerKey[i] to &#39;T&#39; or &#39;F&#39;).

Return the maximum number of consecutive &#39;T&#39;s or &#39;F&#39;s in the answer key after performing the operation at most k times.

Example 1:

Input: answerKey = 'TTFF', k = 2
Output: 4
Explanation: We can replace both the &#39;F&#39;s with &#39;T&#39;s to make answerKey = 'TTTT'.
There are four consecutive &#39;T&#39;s.

Example 2:

Input: answerKey = 'TFFT', k = 1
Output: 3
Explanation: We can replace the first &#39;T&#39; with an &#39;F&#39; to make answerKey = 'FFFT'.
Alternatively, we can replace the second &#39;T&#39; with an &#39;F&#39; to make answerKey = 'TFFF'.
In both cases, there are three consecutive &#39;F&#39;s.

Example 3:

Input: answerKey = 'TTFTTFTT', k = 1
Output: 5
Explanation: We can replace the first &#39;F&#39; to make answerKey = 'TTTTTFTT'
Alternatively, we can replace the second &#39;F&#39; to make answerKey = 'TTFTTTTT'.
In both cases, there are five consecutive &#39;T&#39;s.


Constraints:

n == answerKey.length
1 <= n <= 5 * 104
answerKey[i] is either &#39;T&#39; or &#39;F&#39;
1 <= k <= n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个由 'T' 和 'F' 组成的字符串 answerKey 和整数 k。你可以将任意位置改成 'T' 或 'F'，最多操作 k 次。求操作后最长的连续相同字符子串长度。

**约束：** 1 <= n <= 5*10^4, 1 <= k <= n

## 解题思路

**Approach: 滑动窗口**

1. 分别对目标字符 'T' 和 'F' 各做一次滑动窗口
2. 维护窗口内非目标字符的数量 count，当 count > k 时收缩左端
3. 记录最大窗口长度
4. 时间复杂度 O(n)，空间复杂度 O(1)
