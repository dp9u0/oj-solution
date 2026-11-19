# [1100] 长度为 K 的无重复字符子串

## Description


```md
https://leetcode.cn/problems/find-k-length-substrings-with-no-repeated-characters/description/
* algorithms
* Medium (72.52%)
* Likes:    70
* Dislikes: -
* Testcase Example:  '"havefunonleetcode"\n5'
给你一个字符串 s，找出所有长度为 k 且不含重复字符的子串，请你返回全部满足要求的子串的 数目。

示例 1：
输入：s = "havefunonleetcode", k = 5
输出：6
解释：
这里有 6 个满足题意的子串，分别是：'havef','avefu','vefun','efuno','etcod','tcode'。
示例 2：
输入：s = "home", k = 5
输出：0
解释：
注意：k 可能会大于 s 的长度。在这种情况下，就无法找到任何长度为 k 的子串。

提示：
1 <= s.length <= 104
s 中的所有字符均为小写英文字母
1 <= k <= 104
Hint 1: How to check efficiently each K-length substring?
Hint 2: First store the first leftmost K-length substring in a hashTable or array of frequencies.
Hint 3: Then iterate through the rest of characters and erase the first element and add the next element from the right. If in the hashTable we have K different character we add 1 to the counter. After that return as answer the counter.

```

## Solution

[SourceCode](./solution.js)

## Translation

Count substrings of length exactly k with no repeated characters (k may exceed s.length → 0). Lowercase only, so any window longer than 26 has a repeat.

- Example: s = "havefunonleetcode", k = 5 → `6`

## Approach

**滑动窗口**。k > 26 或 k > n 直接 0。右端扩窗,新字符频次 >1 时左端收缩到无重复;窗口恰长 k 计数后左移一格。O(n),freq[26] 计数。
