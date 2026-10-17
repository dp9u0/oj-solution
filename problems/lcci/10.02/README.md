# [面试题 10.02] 变位词组

## Description


```md
https://leetcode.cn/problems/group-anagrams-lcci/description/
* lcci
* Medium (74.64%)
* Likes:    117
* Dislikes: -
* Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。
注意：本题相对原题稍作修改
示例：
输入：["eat", "tea", "tan", "ate", "nat", "bat"],
输出：
[
["ate","eat","tea"],
["nat","tan"],
["bat"]
]
说明：
所有输入均为小写字母。
不考虑答案输出的顺序。
Hint 1: 你如何检查两个单词是否互为变位词？想一想如何定义“变位词”。用你自己的话来解释一下。
Hint 2: 两个单词互为变位词是指含有相同的字符，但顺序不同。怎么才能把字符排好序呢？
Hint 3: 你能利用标准排序算法吗？
Hint 4: 你真的需要真正的排序吗？或者仅需重新组织列表就够了？

```

## Description (English)

Write a method to sort an array of strings so that all anagrams are grouped together. An anagram is a string with the same letters in a different order.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["ate","eat","tea"], ["nat","tan"], ["bat"]]

Notes: all inputs are lowercase letters; the order of the output does not matter.

## 思路

26 位字母计数作哈希键 O(n·k)：每个单词统计字母频次数组，`join(',')` 后作为 Map 键分组——比"排序作键"省去 k log k。输出顺序不影响判题。

## Solution

[SourceCode](./solution.js)
