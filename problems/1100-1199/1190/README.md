# [1190] 反转每对括号间的子串

## Description


```md
https://leetcode.cn/problems/reverse-substrings-between-each-pair-of-parentheses/description/
* algorithms
* Medium (66.17%)
* Likes:    326
* Dislikes: -
* Testcase Example:  '"(abcd)"'
给出一个字符串 s（仅含有小写英文字母和括号）。
请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
注意，您的结果中 不应 包含任何括号。

示例 1：
输入：s = "(abcd)"
输出："dcba"
示例 2：
输入：s = "(u(love)i)"
输出："iloveu"
解释：先反转子字符串 "love" ，然后反转整个字符串。
示例 3：
输入：s = "(ed(et(oc))el)"
输出："leetcode"
解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。

提示：
1 <= s.length <= 2000
s 中只有小写英文字母和括号
题目测试用例确保所有括号都是成对出现的
Hint 1: Find all brackets in the string.
Hint 2: Does the order of the reverse matter ?
Hint 3: The order does not matter.

```

## Description (English)

You are given a string `s` that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one. Your result should not contain any brackets.

Example 1:
Input: s = "(abcd)"
Output: "dcba"

Example 2:
Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

Example 3:
Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First we reverse the substring "oc", then "etco", and finally, the whole string.

Constraints:
- 1 <= s.length <= 2000
- s only contains lower case English characters and parentheses
- It is guaranteed that all parentheses are balanced.

## 思路

**虫洞跳跃法（O(n) 时间）**：避免真正地一层层反转字符串。

1. 用栈对每个括号做配对预处理：`pair[i]` 记录下标 `i` 处括号匹配括号的下标。
2. 逆向思维——每个括号相当于一个"虫洞"：正向走到 `(` 就传送到配对的 `)` 并掉头反向走；走到 `)` 则传送到配对的 `(` 掉头正向走。字母照常收集。
3. 这样每个字符最多被访问常数次，总时间 O(n)，避免了普通栈解法中内层字符串反复拼接/反转的 O(n²) 开销。

正确性直觉：从内到外逐层反转，等价于"每穿过一次括号壁，行进方向就翻转一次"，这正是虫洞跳跃的语义。

## Solution

[SourceCode](./solution.js)
