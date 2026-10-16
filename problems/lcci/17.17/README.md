# [面试题 17.17] 多次搜索

## Description


```md
https://leetcode.cn/problems/multi-search-lcci/description/
* lcci
* Medium (44.97%)
* Likes:    56
* Dislikes: -
* Testcase Example:  '""\n["a","b","c"]'
给定一个较长字符串big和一个包含较短字符串的数组smalls，设计一个方法，根据smalls中的每一个较短字符串，对big进行搜索。输出smalls中的字符串在big里出现的所有位置positions，其中positions[i]为smalls[i]出现的所有位置。
示例：
输入：
big = "mississippi"
smalls = ["is","ppi","hi","sis","i","ssippi"]
输出： [[1,4],[8],[],[3],[1,4,7,10],[5]]
提示：
0 <= len(big) <= 1000
0 <= len(smalls[i]) <= 1000
smalls的总字符数不会超过 106。
你可以认为smalls中没有重复字符串。
所有出现的字符均为英文小写字母。
Hint 1: 从蛮力解法开始。运行时间是多少？
Hint 2: 你能用trie吗?
Hint 3: 一种解决方案是将较大字符串的每个后缀都插入trie。例如，如果单词是dogs，那么后缀应该是dogs、ogs、gs和s。这将如何帮助你解决该问题？其运行时间是多少？
Hint 4: 或者，可以将每个较小的字符串插入到trie中。你将如何解决这个问题？时间复杂度是什么？

```

## Description (English)

Given a longer string `big` and an array of shorter strings `smalls`, design a method to search `big` for each of the shorter strings. Output `positions` where `positions[i]` lists all positions where `smalls[i]` occurs in `big`.

Example:
Input: big = "mississippi", smalls = ["is","ppi","hi","sis","i","ssippi"]
Output: [[1,4],[8],[],[3],[1,4,7,10],[5]]

Notes: 0 <= len(big) <= 1000; 0 <= len(smalls[i]) <= 1000; total chars in smalls <= 10^6; no duplicate strings in smalls; only lowercase letters.

## 思路

多模式 Trie，O(len(big)² + Σ|smalls|)：把 smalls 全部建成 Trie（词尾节点记模式下标，空串跳过）；对 big 的每个起点 i 沿 Trie 前行，沿途每个词尾节点都登记一次出现（天然允许重叠匹配）。路径断裂即止。

## Solution

[SourceCode](./solution.js)
