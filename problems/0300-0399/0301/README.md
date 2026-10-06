# [301] 删除无效的括号

## Description


```md
https://leetcode.cn/problems/remove-invalid-parentheses/description/
* algorithms
* Hard (56.35%)
* Likes:    1026
* Dislikes: -
* Testcase Example:  '"()())()"'
给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。
返回所有可能的结果。答案可以按 任意顺序 返回。

示例 1：
输入：s = "()())()"
输出：["(())()","()()()"]
示例 2：
输入：s = "(a)())()"
输出：["(a())()","(a)()()"]
示例 3：
输入：s = ")("
输出：[""]

提示：
1 <= s.length <= 25
s 由小写英文字母以及括号 '(' 和 ')' 组成
s 中至多含 20 个括号
Hint 1: Since we do not know which brackets can be removed, we try all the options! We can use recursion.
Hint 2: In the recursion, for each bracket, we can either use it or remove it.
Hint 3: Recursion will generate all the valid parentheses strings but we want the ones with the least number of parentheses deleted.
Hint 4: We can count the number of invalid brackets to be deleted and only generate the valid strings in the recusrion.

```

## Description (English)

Given a string `s` that consists of parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return all possible results. The answer may be returned in any order.

Example 1:
Input: s = "()())()"
Output: ["(())()","()()()"]

Example 2:
Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]

Example 3:
Input: s = ")("
Output: [""]

Constraints:
- 1 <= s.length <= 25
- s consists of lowercase English letters, '(' and ')'
- There are at most 20 parentheses in s

## Approach

**回溯 + 最少删除数剪枝**

1. **预处理**：一次扫描统计最少需要删除的括号数 —— 遇到 `'('` 计数 `lRemove++`；遇到 `')'` 时若 `lRemove > 0` 则配对抵消（`lRemove--`），否则 `rRemove++`。扫描结束后 `lRemove + rRemove` 就是最少删除数。
2. **回溯**：在 `start` 位置起遍历字符串，每个括号都有"保留/删除"两种选择：
   - 是 `'('` 且 `lRemove > 0`：删除它，递归（`lRemove - 1`）；
   - 是 `')'` 且 `rRemove > 0`：删除它，递归（`rRemove - 1`）。
   - 当 `lRemove === 0 && rRemove === 0` 时做最终校验，合法则收入结果集。
3. **剪枝与去重**：
   - `str[i] === str[i-1]` 时跳过（连续相同括号只删第一个，天然去重）；
   - 剩余字符数不足以完成删除时提前返回。
4. **校验** `isValid`：单次扫描，前缀计数 `')'` 多于 `'('` 即非法，最终计数必须为 0。

复杂度：最坏 O(2^n)（n ≤ 25，括号最多 20 个），剪枝后实际远小于上界；空间 O(n) 递归深度。

## Solution

[SourceCode](./solution.js)
