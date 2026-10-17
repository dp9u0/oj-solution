# [面试题 08.08] 有重复字符串的排列组合

## Description


```md
https://leetcode.cn/problems/permutation-ii-lcci/description/
* lcci
* Medium (69.34%)
* Likes:    117
* Dislikes: -
* Testcase Example:  '"qqe"'
有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。
示例 1：
输入：S = "qqe"
输出：["eqq","qeq","qqe"]
示例 2：
输入：S = "ab"
输出：["ab", "ba"]
提示:
字符都是英文字母。
字符串长度在[1, 9]之间。
Hint 1: 你可以通过在打印之前检查是否有重复内容（或将它们添加到列表中）来处理此问题。你可以用散列表来做到这一点。在什么情况下，这样是可以的？在什么情况下，这可能不是一个很好的解法？
Hint 2: 如果你还没有解决8.7的问题，就先解决那个。
Hint 3: 试着获得每个字符的计数。例如，abcaac有3个a、2个c和1个b。
Hint 4: 要得到3个a、2个c和1个b的全排列，你首先需要选择一个起始字符：a、b或c。如果是a，那么你需要2个a、2个c和1个b的全排列。

```

## Description (English)

Permutation with duplicates. Write a method to compute all permutations of a string that may contain duplicate characters.

Example 1:
Input: S = "qqe"
Output: ["eqq","qeq","qqe"]

Example 2:
Input: S = "ab"
Output: ["ab", "ba"]

Notes: characters are English letters; string length in [1, 9].

## 思路

计数回溯去重 O(答案数)：统计各字符出现次数，每层只在**计数大于零**的字符中按字典序枚举——重复排列根本不会生成（而非生成后再过滤），输出天然字典序有序。n ≤ 9，剪枝后远快于 n! 全排列。

## Solution

[SourceCode](./solution.js)
