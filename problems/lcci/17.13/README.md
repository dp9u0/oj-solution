# [面试题 17.13] 恢复空格

## Description


```md
https://leetcode.cn/problems/re-space-lcci/description/
* lcci
* Medium (55.75%)
* Likes:    224
* Dislikes: -
* Testcase Example:  '["looked","just","like","her","brother"]\n"jesslookedjustliketimherbrother"'
哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。
注意：本题相对原题稍作改动，只需返回未识别的字符数

示例：
输入：
dictionary = ["looked","just","like","her","brother"]
sentence = "jesslookedjustliketimherbrother"
输出： 7
解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
提示：
0 <= len(sentence) <= 1000
dictionary中总字符数不超过 150000。
你可以认为dictionary和sentence中只包含小写字母。
Hint 1: 试试递归方法。
Hint 2: 你能把所有的可能性都试一试吗？那会是什么样子？
Hint 3: 你可以用两种方法中的一种来考虑递归算法：(1)对于每个字符，我应该在这里放一个空格吗？(2)下一个空格应该放在哪里？两种方案都可以递归地解决。
Hint 4: 递归算法是否会反复遇到相同的子问题？你能用一个散列表进行优化吗？
Hint 5: 在现实生活中，我们知道有些路径不会构成一个词。例如，没有以hellothisism开头的单词。能在明知行不通的情况下提前终止吗？
Hint 6: 如果想提前终止，可以试一试trie。

```

## Description (English)

Oh no! You accidentally removed all spaces and punctuation from a long article, and lowercased everything. Before handling punctuation and case, you need to break the text into words. You have a thick dictionary; some words are not in it. Design an algorithm to break the article so that the number of unrecognized characters is minimized, and return that count.

Example:
Input: dictionary = ["looked","just","like","her","brother"], sentence = "jesslookedjustliketimherbrother"
Output: 7
Explanation: one segmentation is "jess looked just like tim her brother" with 7 unrecognized characters.

Notes: 0 <= len(sentence) <= 1000; total dictionary chars <= 150000; only lowercase letters.

## 思路

DP + 倒序 Trie，O(n·L)：`dp[i]` = 前 i 个字符的最少未识别数，转移 `dp[i] = dp[i-1] + 1`（第 i 字不识别），再枚举以 i 结尾的词典词 `dp[i] = min(dp[i], dp[i - len])`。把词典单词**倒序**建 Trie，从 i-1 向前走 Trie 同步匹配——路径断掉立即剪枝，无需对每个 i 重扫词表。

## Solution

[SourceCode](./solution.js)
