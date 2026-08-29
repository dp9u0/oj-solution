# [3029] Minimum Time to Revert Word to Initial State I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/description/)

* algorithms
* Medium (42.41%)
* Likes:    186
* Dislikes: 34
* Testcase Example:  '"abacaba"\n3'

```md
You are given a 0-indexed string word and an integer k.
At every second, you must perform the following operations:

Remove the first k characters of word.
Add any k characters to the end of word.

Note that you do not necessarily need to add the same characters that you removed. However, you must perform both operations at every second.
Return the minimum time greater than zero required for word to revert to its initial state.

Example 1:

Input: word = 'abacaba', k = 3
Output: 2
Explanation: At the 1st second, we remove characters 'aba' from the prefix of word, and add characters 'bac' to the end of word. Thus, word becomes equal to 'cababac'.
At the 2nd second, we remove characters 'cab' from the prefix of word, and add 'aba' to the end of word. Thus, word becomes equal to 'abacaba' and reverts to its initial state.
It can be shown that 2 seconds is the minimum time greater than zero required for word to revert to its initial state.

Example 2:

Input: word = 'abacaba', k = 4
Output: 1
Explanation: At the 1st second, we remove characters 'abac' from the prefix of word, and add characters 'caba' to the end of word. Thus, word becomes equal to 'abacaba' and reverts to its initial state.
It can be shown that 1 second is the minimum time greater than zero required for word to revert to its initial state.

Example 3:

Input: word = 'abcbabcd', k = 2
Output: 4
Explanation: At every second, we will remove the first 2 characters of word, and add the same characters to the end of word.
After 4 seconds, word becomes equal to 'abcbabcd' and reverts to its initial state.
It can be shown that 4 seconds is the minimum time greater than zero required for word to revert to its initial state.


Constraints:

1 <= word.length <= 50
1 <= k <= word.length
word consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个下标从 0 开始的字符串 `word` 和一个整数 `k`。

每一秒你必须执行以下操作：

1. 移除 `word` 的**前 `k` 个字符**；
2. 在 `word` 末尾**添加任意 `k` 个字符**。

注意：添加的字符不一定非要与移除的相同，但每秒两个操作都必须执行。

返回 `word` 恢复到初始状态所需的**大于 0 的最少时间**（秒数）。

示例 1：
- 输入：`word = "abacaba", k = 3`
- 输出：`2`
- 解释：第 1 秒移除 `"aba"`、添加 `"bac"` → `"cababac"`；第 2 秒移除 `"cab"`、添加 `"aba"` → `"abacaba"`，恢复初始状态。

示例 2：
- 输入：`word = "abacaba", k = 4`
- 输出：`1`

示例 3：
- 输入：`word = "abcbabcd", k = 2`
- 输出：`4`
- 解释：每秒移除前 2 个字符并把它们原样接到末尾（整体左旋），4 秒后复原。

约束：
- `1 <= word.length <= 50`
- `1 <= k <= word.length`
- `word` 只含小写英文字母

## 解题思路

关键观察：经过 `t` 秒后，原串的前 `t*k` 个字符已被移除，取而代之的是我们**任意**添加的字符；而原串剩余的尾部 `word[t*k:]` 会顶到前面。

因此 `t` 秒后能够恢复初始状态，当且仅当：

1. **若 `t*k >= n`**：整个字符串都由任意字符构成，直接拼回原串即可，必然可行；
2. **若 `t*k < n`**：剩余尾部必须与原串前缀逐位相同，即 `word.startsWith(word.substring(t*k))`（等价于 `t*k` 是 `word` 的一个周期）。

所以从 `t = 1` 开始逐个检查，第一个满足条件的 `t` 即为答案；最坏情况下 `t = ceil(n / k)` 时一定满足条件 1。

时间复杂度：每次检查 `startsWith` 为 O(n)，共 O(n/k) 次，总体 O(n²/k)（n ≤ 50 足够；若 n 达到 1e6 的版本 II 可用 Z 函数求周期做到 O(n)）。空间复杂度 O(1)。

验证示例 1：`word = "abacaba", k = 3`，t=1 时 `"caba"` 不是前缀，t=2 时 `"a"` 是前缀 → 2 ✓
