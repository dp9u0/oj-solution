# [2266] Count Number of Texts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-texts/description/)

* algorithms
* Medium (50.09%)
* Likes:    945
* Dislikes: 36
* Testcase Example:  '"22233"'

```md
Alice is texting Bob using her phone. The mapping of digits to letters is shown in the figure below.

In order to add a letter, Alice has to press the key of the corresponding digit i times, where i is the position of the letter in the key.

For example, to add the letter &#39;s&#39;, Alice has to press &#39;7&#39; four times. Similarly, to add the letter &#39;k&#39;, Alice has to press &#39;5&#39; twice.
Note that the digits &#39;0&#39; and &#39;1&#39; do not map to any letters, so Alice does not use them.

However, due to an error in transmission, Bob did not receive Alice&#39;s text message but received a string of pressed keys instead.

For example, when Alice sent the message 'bob', Bob received the string '2266622'.

Given a string pressedKeys representing the string received by Bob, return the total number of possible text messages Alice could have sent.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: pressedKeys = '22233'
Output: 8
Explanation:
The possible text messages Alice could have sent are:
'aaadd', 'abdd', 'badd', 'cdd', 'aaae', 'abe', 'bae', and 'ce'.
Since there are 8 possible messages, we return 8.

Example 2:

Input: pressedKeys = '222222222222222222222222222222222222'
Output: 82876089
Explanation:
There are 2082876103 possible text messages Alice could have sent.
Since we need to return the answer modulo 109 + 7, we return 2082876103 % (109 + 7) = 82876089.


Constraints:

1 <= pressedKeys.length <= 105
pressedKeys only consists of digits from &#39;2&#39; - &#39;9&#39;.


```

## 题目翻译

Alice 用手机给 Bob 发短信，手机按键映射：2→abc, 3→def, 4→ghi, 5→jkl, 6→mno, 7→pqrs, 8→tuv, 9→wxyz。按 i 次同一个键表示选择该键上的第 i 个字母（7 和 9 有 4 个字母，其他有 3 个）。

由于传输错误，Bob 收到的是按键序列而非文本。给定按键序列，返回可能的原始文本数量，结果对 10^9+7 取模。

## 解题思路

DP。dp[i] 表示前 i 个按键的解码方式数。对于位置 i，尝试将最后 1/2/3/4 个相同数字组成一个字母：
- dp[i] = dp[i-1]（取 1 个字符作为一个字母）
- 如果 s[i-2]==s[i-1]，加 dp[i-2]（2 个相同按键 = 1 个字母）
- 如果 s[i-3]==s[i-2]==s[i-1]，加 dp[i-3]（3 个相同按键 = 1 个字母）
- 如果 s[i-4]==...==s[i-1] 且数字是 7 或 9，加 dp[i-4]

时间复杂度 O(n)，空间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
