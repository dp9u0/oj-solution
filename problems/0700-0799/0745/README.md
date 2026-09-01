# [745] Prefix and Suffix Search

## Description

[LeetCode Problem Description](https://leetcode.com/problems/prefix-and-suffix-search/description/)

* algorithms
* Hard (41.14%)
* Likes:    2362
* Dislikes: 501
* Testcase Example:  '["WordFilter","f"]\n[[["apple"]],["a","e"]]'

```md
Design a special dictionary that searches the words in it by a prefix and a suffix.
Implement the WordFilter class:
WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string pref, string suff) Returns the index of the word in the dictionary, which has the prefix pref and the suffix suff. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.

Example 1:
Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]
Explanation
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = "e".

Constraints:
1 <= words.length <= 104
1 <= words[i].length <= 7
1 <= pref.length, suff.length <= 7
words[i], pref and suff consist of lowercase English letters only.
At most 104 calls will be made to the function f.
Hint 1: Take "apple" as an example, we will insert add "apple{apple", "pple{apple", "ple{apple", "le{apple", "e{apple", "{apple" into the Trie Tree.
Hint 2: If the query is: prefix = "app", suffix = "le", we can find it by querying our trie for
"le { app".
Hint 3: We use '{' because in ASCii Table, '{' is next to 'z', so we just need to create new TrieNode[27] instead of 26. Also, compared with traditional Trie, we add the attribute weight in class TrieNode.
You can still choose any different character.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

设计一个特殊的字典，支持按前缀和后缀搜索单词。

实现 `WordFilter` 类：

- `WordFilter(string[] words)`：用字典中的单词初始化对象。
- `f(string pref, string suff)`：返回字典中同时以 `pref` 为前缀、以 `suff` 为后缀的单词的下标。若有多个合法下标，返回其中最大的；若不存在这样的单词，返回 `-1`。

示例 1：
输入
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
输出
[null, 0]
解释
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // 返回 0，因为下标 0 处的单词前缀 = "a" 且后缀 = "e"。

约束：
1 <= words.length <= 10^4
1 <= words[i].length <= 7
1 <= pref.length, suff.length <= 7
words[i]、pref 和 suff 仅由小写英文字母组成。
函数 f 的调用次数最多为 10^4 次。

## 解题思路

前后缀联合 Trie：

1. **建树**：对下标为 i 的单词 word，取它的每个后缀（从空到整个单词），把 `后缀 + '{' + word` 共 L+1 个变体插入 Trie。'{' 的 ASCII 码紧跟 'z' 之后，与小写字母不冲突，起分隔作用。
2. **记录权值**：插入路径上每个节点都记录 weight = i。由于按下标升序插入，后写覆盖先写，每个节点最终保存的是经过该节点的最大单词下标。
3. **查询**：f(pref, suff) 即沿 `suff + '{' + pref` 这条路径在 Trie 中行走：能走完则终点节点的 weight 就是同时满足前缀和后缀条件的最大下标；中途断链返回 -1。

正确性：变体 `suffix + '{' + word` 存在路径 `suff + '{' + pref`，当且仅当 word 以 suff 结尾（对应某个后缀变体恰好是 suff）且 word 以 pref 开头（分隔符之后匹配 word 的前缀部分）。

复杂度：单词长度 L ≤ 7，每个单词插入 L+1 条长度 ≤ 2L+1 的路径，建树约 O(ΣL²)（≈ 10^4 × 92 次节点操作）；单次查询 O(|pref| + |suff|)。
