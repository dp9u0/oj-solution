# [LCR 114] 火星词典

## Description


```md
https://leetcode.cn/problems/Jf1JuT/description/
* algorithms
* Hard (49.04%)
* Likes:    190
* Dislikes: -
* Testcase Example:  '["wrt","wrf","er","ett","rftt"]'
现有一种使用英语字母的外星文语言，这门语言的字母顺序与英语顺序不同。
给定一个字符串列表 words ，作为这门语言的词典，words 中的字符串已经 按这门新语言的字母顺序进行了排序 。
请你根据该词典还原出此语言中已知的字母顺序，并 按字母递增顺序 排列。若不存在合法字母顺序，返回 "" 。若存在多种可能的合法字母顺序，返回其中 任意一种 顺序即可。
字符串 s 字典顺序小于 字符串 t 有两种情况：
在第一个不同字母处，如果 s 中的字母在这门外星语言的字母顺序中位于 t 中字母之前，那么 s 的字典顺序小于 t 。
如果前面 min(s.length, t.length) 字母都相同，那么 s.length < t.length 时，s 的字典顺序也小于 t 。

示例 1：
输入：words = ["wrt","wrf","er","ett","rftt"]
输出："wertf"
示例 2：
输入：words = ["z","x"]
输出："zx"
示例 3：
输入：words = ["z","x","z"]
输出：""
解释：不存在合法字母顺序，因此返回 ""。

提示：
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] 仅由小写英文字母组成

注意：本题与主站 269 题相同： https://leetcode.cn/problems/alien-dictionary/

```

## Solution

[SourceCode](./solution.js)

## Translation (English)

There is a new alien language which uses the lowercase English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings `words` from the alien language's dictionary, where the strings are sorted in lexicographic order according to the rules of this new language.

Return a string of the unique letters in the new alien language ordered in increasing lexicographic order. If there is no valid ordering of the letters, return `""`. If there are multiple valid orders, you may return any one of them.

A string `s` is lexicographically smaller than a string `t` in two cases:
- At the first position where they differ, the character in `s` comes before the character in `t` in the alien alphabet.
- If the first `min(s.length, t.length)` characters are the same, then `s` is smaller when `s.length < t.length`.

Example 1:
Input: `words = ["wrt","wrf","er","ett","rftt"]`
Output: `"wertf"`

Example 2:
Input: `words = ["z","x"]`
Output: `"zx"`

Example 3:
Input: `words = ["z","x","z"]`
Output: `""`
Explanation: No valid ordering exists, so return `""`.

Constraints:
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists only of lowercase English letters.

Note: This problem is the same as LeetCode 269 (https://leetcode.com/problems/alien-dictionary/).

## Approach

**思路:拓扑排序 (Kahn 算法 + 小顶堆)**

1. **建图**:相邻单词两两比较,在第一个不同字母处确定依赖关系 `w1[i]` 必须在 `w2[i]` 之前,建边 `w1[i] -> w2[i]`。用 `Set` 去重,并维护入度数组。
2. **前缀非法判断**:若 `w1` 长度大于 `w2` 且 `w2` 是 `w1` 的前缀,则顺序矛盾,直接返回 `""`(字典序中较短字符串应在前)。
3. **拓扑排序**:将所有入度为 0 的字母放入小顶堆,每次弹出最小字母,将其所有后继入度减 1,入度变为 0 的后继入堆。这样能保证按"字母递增顺序"输出。
4. **环检测**:若结果长度不等于字母总数,说明存在环(如示例 3 中 `z->x->z`),不存在合法顺序,返回 `""`。

复杂度:O(N×L + 26),N 为单词数,L 为单词平均长度。
