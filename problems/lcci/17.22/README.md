# [面试题 17.22] 单词转换

## Description


```md
https://leetcode.cn/problems/word-transformer-lcci/description/
* lcci
* Medium (41.32%)
* Likes:    78
* Dislikes: -
* Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。
编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。
示例 1：
输入：
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
输出：
["hit","hot","dot","lot","log","cog"]
示例 2：
输入：
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
输出：[]
解释：endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
Hint 1: 从一个蛮力的递归解法开始。只需要创建所有一次编辑的单词，检查它们是否在字典中，然后尝试该编辑路径。
Hint 2: 一旦你有了一个蛮力解法，就可以尝试找到一个更快的方法以得到所有一次编辑的有效单词。当绝大多数字符串都不是有效的字典单词时，你不会想创建所有一次编辑的字符串。
Hint 3: 为了快速得到编辑距离为1的有效单词，试着将字典中的单词以一种有效的方式进行分组。注意，b_ll形式的所有单词（如bill、ball、bell和bull）的编辑距离为1。然而，这些并不是仅有的编辑距离为1的单词。
Hint 4: 创建从通配符形式（如b_ll）到该通配符所匹配的所有单词的映射。然后，当你想要查找与bill相隔编辑距离为1的所有单词时，可以在映射中查找_ill、b_ll、bi_l和bil_。
Hint 5: 你之前的算法可能类似于深度优先搜索。你能使它更快吗?
Hint 6: 广度优先的搜索通常比深度优先的搜索要快。在最坏的情况下未必如此，但在很多情况下都是这样。为什么？你能找到更快的方法吗？
Hint 7: 如果同时从起始单词和目标单词开始进行广度优先搜索，结果会怎样？

```

## Description (English)

Given two words of equal length in a dictionary, write a method to transform one word into the other, changing exactly one character at a time. Each intermediate word must exist in the dictionary. Return one possible transformation sequence (any is acceptable).

Example 1:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: ["hit","hot","dot","lot","log","cog"]

Example 2:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: [] (endWord "cog" is not in the dictionary)

## 思路

通配符桶 + BFS：字典按 `b_ll` 式通配键建桶，扩展邻接只查 L 个桶（避免枚举 26^L 变体）。BFS 记录前驱，首次触达 endWord 即回溯路径——special judge 收任意合法序列。endWord 不在字典直接短路返回 []。

## Solution

[SourceCode](./solution.js)
