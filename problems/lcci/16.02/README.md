# [面试题 16.02] 单词频率

## Description


```md
https://leetcode.cn/problems/words-frequency-lcci/description/
* lcci
* Medium (77.58%)
* Likes:    47
* Dislikes: -
* Testcase Example:  '["WordsFrequency","get","get","get","get","get"]\n' +
'[[["i","have","an","apple","he","have","a","pen"]],["you"],["have"],["an"],["apple"],["pen"]]'
设计一个方法，找出任意指定单词在一本书中的出现频率。
你的实现应该支持如下操作：
WordsFrequency(book)构造函数，参数为字符串数组构成的一本书
get(word)查询指定单词在书中出现的频率
示例：
WordsFrequency wordsFrequency = new WordsFrequency({"i", "have", "an", "apple", "he", "have", "a", "pen"});
wordsFrequency.get("you"); //返回0，"you"没有出现过
wordsFrequency.get("have"); //返回2，"have"出现2次
wordsFrequency.get("an"); //返回1
wordsFrequency.get("apple"); //返回1
wordsFrequency.get("pen"); //返回1
提示：
book[i]中只包含小写字母
1 <= book.length <= 100000
1 <= book[i].length <= 10
get函数的调用次数不会超过100000
Hint 1: 想想这个问题的最佳运行时间是多少。如果你的解法匹配最理想的运行时间，那么你可能无法做的更好了。
Hint 2: 可以使用散列表来优化重复的情况吗？

```

## Description (English)

Design a method to find the frequency of any given word in a book. Support:
- WordsFrequency(book): constructor taking the book as an array of strings.
- get(word): return the frequency of the given word.

Example:
WordsFrequency({"i","have","an","apple","he","have","a","pen"});
get("you") → 0; get("have") → 2; get("an") → 1; get("apple") → 1; get("pen") → 1

Notes: book[i] contains only lowercase letters; 1 <= book.length <= 100000; 1 <= book[i].length <= 10; at most 100000 get calls.

## 思路

构造期把整本书灌进哈希表 O(Σ|book|)，get 直接查表 O(1)——已是理论下界。

## Solution

[SourceCode](./solution.js)
