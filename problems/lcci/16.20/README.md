# [面试题 16.20] T9键盘

## Description


```md
https://leetcode.cn/problems/t9-lcci/description/
* lcci
* Medium (70.89%)
* Likes:    41
* Dislikes: -
* Testcase Example:  '"8733"\n["tree", "used"]'
在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。给定一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表。映射如下图所示：
示例 1：
输入：num = "8733", words = ["tree", "used"]
输出：["tree", "used"]
示例 2：
输入：num = "2", words = ["a", "b", "c", "d"]
输出：["a", "b", "c"]
提示：
num.length <= 1000
words.length <= 500
words[i].length == num.length
num中不会出现 0, 1 这两个数字
Hint 1: 想想递归。
Hint 2: 你能递归地尝试所有的可能性吗？
Hint 3: 在现实世界中，我们应该知道一些前缀/子字符串是行不通的。例如，考虑数字33835676368。虽然3383确实对应于fftf，但是没有以fftf开头的单词。有没有什么办法对于这样的情况做特殊处理？
Hint 4: trie可以帮助我们。如果将整个单词列表存储在trie中会怎样？
Hint 5: 我们可能会多次运行这个算法。如果做更多的预处理，这里有办法优化吗？
Hint 6: 通过预处理，实际上可以将查找时间降低到O(1)。

```

## Description (English)

On old mobile phones, users type on a numeric keypad and the phone offers the list of words matching the typed numbers. Each digit maps to 0-4 letters. Given a digit sequence, implement an algorithm to return the list of matching words; you are given a list of valid words. Keypad mapping: 2=abc, 3=def, 4=ghi, 5=jkl, 6=mno, 7=pqrs, 8=tuv, 9=wxyz.

Example 1:
Input: num = "8733", words = ["tree", "used"]
Output: ["tree", "used"]

Example 2:
Input: num = "2", words = ["a", "b", "c", "d"]
Output: ["a", "b", "c"]

Notes: num.length <= 1000; words.length <= 500; words[i].length == num.length; num contains no 0 or 1.

## 思路

预处理字母→数字映射表，把每个单词编码成 T9 数字串与 num 逐位比较，保留原序过滤。总复杂度 O(Σ|words|)，比逐词回溯展开候选简单且无歧义。

## Solution

[SourceCode](./solution.js)
