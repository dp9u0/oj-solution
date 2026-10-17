# [面试题 17.11] 单词距离

## Description


```md
https://leetcode.cn/problems/find-closest-lcci/description/
* lcci
* Medium (73.07%)
* Likes:    112
* Dislikes: -
* Testcase Example:  '["I","am","a","student","from","a","university","in","a","city"]\n' +
'"a"\n' +
'"student"'
有个内含单词的超大文本文件，给定任意两个不同的单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?
示例：
输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
输出：1
提示：
words.length <= 100000
Hint 1: 如果只运行一次算法，请首先考虑寻找最近距离的算法。你应该能够在 O(N) 时间内完成这项工作，其中 N 是文档中的字数。
Hint 2: 调整你的算法，使它成为可以重复调用的算法的一次执行。它哪里慢?你能优化它吗?
Hint 3: 你可以构建一个查找表，把每个单词映射到它出现位置的列表。然后怎样找到最近的两个位置呢?
Hint 4: 如果你有一个每个单词出现次数的列表，那么你实际上需要在两个数组中寻找一对值(每个数组中选一个值)，使它们之间的差异最小。这应该是一个与初始算法很相似的算法。
Hint 5: 能用两个指针遍历两个数组吗?你应该能在 O(A+B)时间内完成，其中 A 和 B 是两个数组的大小。

```

## Description (English)

You have a large text file of words. Given any two different words, find the shortest distance (number of words apart) between them in the file. If the search is repeated many times with different word pairs, can you optimize?

Example:
Input: words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
Output: 1

Note: words.length <= 100000.

## 思路

按 words 引用缓存倒排索引（词 → 升序位置列表），重复查询不再重建；单次查询对两条位置列表做双指针归并——较小者前进，差值取最小，O(A+B)。

## Solution

[SourceCode](./solution.js)
