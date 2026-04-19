# [1032] Stream of Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stream-of-characters/description/)

* algorithms
* Hard (52.13%)
* Likes:    1881
* Dislikes: 186
* Testcase Example:  '["StreamChecker","query","query","query","query","query","query","query","query","query","query","query","query"]\n' +

```md
'[[["cd","f","kl"]],["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"]]'
Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings words.
For example, if words = ['abc', 'xyz']and the stream added the four characters (one by one) &#39;a&#39;, &#39;x&#39;, &#39;y&#39;, and &#39;z&#39;, your algorithm should detect that the suffix 'xyz' of the characters 'axyz' matches 'xyz' from words.
Implement the StreamChecker class:

StreamChecker(String[] words) Initializes the object with the strings array words.
boolean query(char letter) Accepts a new character from the stream and returns true if any non-empty suffix from the stream forms a word that is in words.


Example 1:

Input
['StreamChecker', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query', 'query']
[[['cd', 'f', 'kl']], ['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g'], ['h'], ['i'], ['j'], ['k'], ['l']]
Output
[null, false, false, false, true, false, true, false, false, false, false, false, true]
Explanation
StreamChecker streamChecker = new StreamChecker(['cd', 'f', 'kl']);
streamChecker.query('a'); // return False
streamChecker.query('b'); // return False
streamChecker.query('c'); // return False
streamChecker.query('d'); // return True, because &#39;cd&#39; is in the wordlist
streamChecker.query('e'); // return False
streamChecker.query('f'); // return True, because &#39;f&#39; is in the wordlist
streamChecker.query('g'); // return False
streamChecker.query('h'); // return False
streamChecker.query('i'); // return False
streamChecker.query('j'); // return False
streamChecker.query('k'); // return False
streamChecker.query('l'); // return True, because &#39;kl&#39; is in the wordlist


Constraints:

1 <= words.length <= 2000
1 <= words[i].length <= 200
words[i] consists of lowercase English letters.
letter is a lowercase English letter.
At most 4 * 104 calls will be made to query.


```

## 题目翻译

设计数据结构，接受字符流，检查当前流的某个非空后缀是否在给定单词列表中。

## 解题思路

**反转 Trie**

将所有单词逆序插入 Trie。查询时从流的最末字符向前匹配 Trie。只保留最近 maxLen 个字符（最长单词长度）即可。

构建 O(总字符数)，每次查询 O(maxLen)。

## Solution

[SourceCode](./solution.js)
