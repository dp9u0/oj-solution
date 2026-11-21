# [2124] 检查是否所有 A 都在 B 之前

## Description


```md
https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs/description/
* algorithms
* Easy (69.66%)
* Likes:    24
* Dislikes: -
* Testcase Example:  '"aaabbb"'
给你一个 仅 由字符 'a' 和 'b' 组成的字符串  s 。如果字符串中 每个  'a' 都出现在 每个 'b' 之前，返回 true ；否则，返回 false 。

示例 1：
输入：s = "aaabbb"
输出：true
解释：
'a' 位于下标 0、1 和 2 ；而 'b' 位于下标 3、4 和 5 。
因此，每个 'a' 都出现在每个 'b' 之前，所以返回 true 。
示例 2：
输入：s = "abab"
输出：false
解释：
存在一个 'a' 位于下标 2 ，而一个 'b' 位于下标 1 。
因此，不能满足每个 'a' 都出现在每个 'b' 之前，所以返回 false 。
示例 3：
输入：s = "bbb"
输出：true
解释：
不存在 'a' ，因此可以视作每个 'a' 都出现在每个 'b' 之前，所以返回 true 。

提示：
1 <= s.length <= 100
s[i] 为 'a' 或 'b'
Hint 1: You can check the opposite: check if there is a ‘b’ before an ‘a’. Then, negate and return that answer.
Hint 2: s should not have any occurrences of “ba” as a substring.

```

## Description (English)

Given a string `s` consisting of only the characters 'a' and 'b', return `true` if every 'a' appears before every 'b' in the string. Otherwise, return `false`.

Example 1:
Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Therefore, every 'a' appears before every 'b', so we return true.

Example 2:
Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Therefore, not every 'a' appears before every 'b', so we return false.

Example 3:
Input: s = "bbb"
Output: true
Explanation:
There are no 'a's, hence every 'a' appears before every 'b', so we return true.

Constraints:
- 1 <= s.length <= 100
- s[i] is either 'a' or 'b'

## Approach

The condition "every 'a' appears before every 'b'" is violated exactly when the substring "ba" exists in `s` — a 'b' followed later by an 'a' implies somewhere an adjacent "ba" pair.

So the check is simple: return `!s.includes("ba")`.

Time complexity: O(n), Space complexity: O(1).

## Solution

[SourceCode](./solution.js)
