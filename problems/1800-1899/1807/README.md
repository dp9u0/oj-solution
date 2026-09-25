# [1807] 替换字符串中的括号内容

## Description


```md
https://leetcode.cn/problems/evaluate-the-bracket-pairs-of-a-string/description/
* algorithms
* Medium (67.76%)
* Likes:    75
* Dislikes: -
* Testcase Example:  '"(name)is(age)yearsold"\n[["name","bob"],["age","two"]]'
给你一个字符串 s ，它包含一些括号对，每个括号中包含一个 非空 的键。
比方说，字符串 "(name)is(age)yearsold" 中，有 两个 括号对，分别包含键 "name" 和 "age" 。
你知道许多键对应的值，这些关系由二维字符串数组 knowledge 表示，其中 knowledge[i] = [keyi, valuei] ，表示键 keyi 对应的值为 valuei 。
你需要替换 所有 的括号对。当你替换一个括号对，且它包含的键为 keyi 时，你需要：
将 keyi 和括号用对应的值 valuei 替换。
如果从 knowledge 中无法得知某个键对应的值，你需要将 keyi 和括号用问号 "?" 替换（不需要引号）。
knowledge 中每个键最多只会出现一次。s 中不会有嵌套的括号。
请你返回替换 所有 括号对后的结果字符串。

示例 1：
输入：s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
输出："bobistwoyearsold"
解释：
键 "name" 对应的值为 "bob" ，所以将 "(name)" 替换为 "bob" 。
键 "age" 对应的值为 "two" ，所以将 "(age)" 替换为 "two" 。
示例 2：
输入：s = "hi(name)", knowledge = [["a","b"]]
输出："hi?"
解释：由于不知道键 "name" 对应的值，所以用 "?" 替换 "(name)" 。
示例 3：
输入：s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]
输出："yesyesyesaaa"
解释：相同的键在 s 中可能会出现多次。
键 "a" 对应的值为 "yes" ，所以将所有的 "(a)" 替换为 "yes" 。
注意，不在括号里的 "a" 不需要被替换。

提示：
1 <= s.length <= 105
0 <= knowledge.length <= 105
knowledge[i].length == 2
1 <= keyi.length, valuei.length <= 10
s 只包含小写英文字母和圆括号 '(' 和 ')' 。
s 中每一个左圆括号 '(' 都有对应的右圆括号 ')' 。
s 中每对括号内的键都不会为空。
s 中不会有嵌套括号对。
keyi 和 valuei 只包含小写英文字母。
knowledge 中的 keyi 不会重复。
Hint 1: Process pairs from right to left to handle repeats
Hint 2: Keep track of the current enclosed string using another string

```

## Description (English)

You are given a string `s` that contains some bracket pairs, with each pair enclosing a **non-empty** key.

- For example, the string `"(name)is(age)yearsold"` has **two** bracket pairs, with keys `"name"` and `"age"` respectively.

You know many key-to-value relationships, given as a 2D string array `knowledge`, where `knowledge[i] = [key_i, value_i]` means key `key_i` maps to value `value_i`.

You must replace **all** bracket pairs. When you replace a bracket pair whose key is `key_i`:

- Replace `key_i` and the brackets with the corresponding value `value_i`.
- If the key is not found in `knowledge`, replace `key_i` and the brackets with a question mark `"?"` (without quotes).

Each key in `knowledge` appears at most once. There are no nested brackets in `s`.

Return the resulting string after replacing all bracket pairs.

**Example 1:**
Input: `s = "(name)is(age)yearsold"`, `knowledge = [["name","bob"],["age","two"]]`
Output: `"bobistwoyearsold"`

**Example 2:**
Input: `s = "hi(name)"`, `knowledge = [["a","b"]]`
Output: `"hi?"`

**Example 3:**
Input: `s = "(a)(a)(a)aaa"`, `knowledge = [["a","yes"]]`
Output: `"yesyesyesaaa"`

**Constraints:**
- `1 <= s.length <= 10^5`
- `0 <= knowledge.length <= 10^5`
- `knowledge[i].length == 2`
- `1 <= key_i.length, value_i.length <= 10`
- `s` contains only lowercase English letters and parentheses `'('` and `')'`.
- Every `'('` in `s` has a matching `')'`; keys inside brackets are non-empty; no nesting.
- `key_i` and `value_i` contain only lowercase English letters; keys in `knowledge` are unique.

## Approach

单次扫描 + 哈希表：

1. 把 `knowledge` 构建成 `Map<key, value>`。
2. 线性扫描 `s`：遇 `'('` 后持续收集字符直到 `')'`，得到键名；在 Map 中查到就追加对应值，否则追加 `"?"`；其余字符直接追加。
3. 用数组暂存片段，最后 `join('')`，避免字符串反复拼接带来的 O(n^2) 开销。

时间复杂度 O(|s| + Σ|knowledge|)，空间复杂度同阶。

## Solution

[SourceCode](./solution.js)
