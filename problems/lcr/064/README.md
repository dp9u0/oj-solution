# [LCR 064] 实现一个魔法字典

## Description


```md
https://leetcode.cn/problems/US1pGT/description/
* algorithms
* Medium (61.34%)
* Likes:    55
* Dislikes: -
* Testcase Example:  '["MagicDictionary", "buildDict", "search", "search", "search", "search"]\n' +
'[[], [["hello","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]'
设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于已构建的神奇字典中。
实现 MagicDictionary 类：
MagicDictionary() 初始化对象
void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，dictionary 中的字符串互不相同
bool search(String searchWord) 给定一个字符串 searchWord ，判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 true ；否则，返回 false 。

示例：
输入
inputs = ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
inputs = [[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
输出
[null, null, false, true, false, false]
解释
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // 返回 False
magicDictionary.search("hhllo"); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
magicDictionary.search("hell"); // 返回 False
magicDictionary.search("leetcoded"); // 返回 False

提示：
1 <= dictionary.length <= 100
1 <= dictionary[i].length <= 100
dictionary[i] 仅由小写英文字母组成
dictionary 中的所有字符串 互不相同
1 <= searchWord.length <= 100
searchWord 仅由小写英文字母组成
buildDict 仅在 search 之前调用一次
最多调用 100 次 search

注意：本题与主站 676 题相同： https://leetcode.cn/problems/implement-magic-dictionary/

```

## Solution

[SourceCode](./solution.js)

## English Translation

Design a data structure that is initialized with a list of **distinct** words. Given a word, you need to judge whether you can change **exactly one** letter in this word to another letter, so that the new word formed is in the built magic dictionary.

Implement the `MagicDictionary` class:
- `MagicDictionary()` Initializes the object.
- `void buildDict(String[] dictionary)` Sets the data structure with an array of distinct strings `dictionary`.
- `bool search(String searchWord)` Returns `true` if you can change **exactly one character** in `searchWord` to another character so that the new word formed matches any string in the dictionary; otherwise, returns `false`.

**Example:**
```
Input
inputs = ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
inputs = [[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
Output
[null, null, false, true, false, false]
```

**Constraints:**
- `1 <= dictionary.length <= 100`
- `1 <= dictionary[i].length <= 100`
- `dictionary[i]` consists only of lowercase English letters
- All the strings in `dictionary` are distinct
- `1 <= searchWord.length <= 100`
- `searchWord` consists only of lowercase English letters
- `buildDict` is called only once before `search`
- At most `100` calls to `search`

*Note: This problem is the same as LeetCode 676 (Implement Magic Dictionary).*

## Approach

**Hash map keyed by wildcard patterns.**

For every word in the dictionary, generate a wildcard key for **each position**: replace the character at position `i` with `*` (e.g. `hello` → `*ello`, `h*llo`, `he*lo`, `hel*o`, `hell*`). Store each key, remembering the original word it came from.

When searching `searchWord`, generate the same wildcard keys for each position. A match is found if:
1. The key exists in the map, AND
2. The matching dictionary word is **different** from `searchWord` (i.e. at least one letter actually differs — otherwise `hello` searching for `hello` would wrongly return true).

Since a wildcard key may map to multiple words, store a `Set` per key (or a map from key → set of source words). Checking different-source rules out the same-word false positive.

- `buildDict`: O(total characters of dictionary)
- `search`: O(searchWord.length) with a hash lookup per position
- Space: O(total characters of dictionary)

*Alternative: brute-force over 26 replacements per position is also fine given small constraints; the wildcard approach is cleaner and faster.*
