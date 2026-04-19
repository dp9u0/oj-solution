# [676] Implement Magic Dictionary

## Description

[LeetCode Problem Description](https://leetcode.com/problems/implement-magic-dictionary/description/)

* algorithms
* Medium (57.79%)
* Likes:    1469
* Dislikes: 216
* Testcase Example:  '["MagicDictionary", "buildDict", "search", "search", "search", "search"]\n' +

```md
'[[], [["hello","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]'
Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.
Implement theMagicDictionaryclass:

MagicDictionary()Initializes the object.
void buildDict(String[]dictionary)Sets the data structurewith an array of distinct strings dictionary.
bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, otherwise returns false.


Example 1:

Input
['MagicDictionary', 'buildDict', 'search', 'search', 'search', 'search']
[[], [['hello', 'leetcode']], ['hello'], ['hhllo'], ['hell'], ['leetcoded']]
Output
[null, null, false, true, false, false]
Explanation
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(['hello', 'leetcode']);
magicDictionary.search('hello'); // return False
magicDictionary.search('hhllo'); // We can change the second &#39;h&#39; to &#39;e&#39; to match 'hello' so we return True
magicDictionary.search('hell'); // return False
magicDictionary.search('leetcoded'); // return False


Constraints:

1 <=dictionary.length <= 100
1 <=dictionary[i].length <= 100
dictionary[i] consists of only lower-case English letters.
All the strings indictionaryare distinct.
1 <=searchWord.length <= 100
searchWordconsists of only lower-case English letters.
buildDictwill be called only once before search.
At most 100 calls will be made to search.


```

## 中文翻译

设计一个数据结构，用一组不同的单词初始化。给定一个字符串，判断是否可以恰好改变其中一个字符来匹配数据结构中的某个单词。

实现 MagicDictionary 类：
- `buildDict(dictionary)`: 设置字典
- `search(searchWord)`: 判断能否恰好改变一个字符来匹配字典中的某个单词

## 解题思路

**按长度分组 + 暴力匹配：**

1. `buildDict` 按单词长度分组存储
2. `search` 时只检查同长度的单词，逐位比较差异字符数，恰好为 1 则返回 true

时间复杂度：search O(n * L)，n 为同长度单词数，L 为单词长度

## Solution

[SourceCode](./solution.js)
