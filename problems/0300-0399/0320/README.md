# [320] 列举单词的全部缩写

## Description


```md
https://leetcode.cn/problems/generalized-abbreviation/description/
* algorithms
* Medium (70.81%)
* Likes:    119
* Dislikes: -
* Testcase Example:  '"word"'
单词的 广义缩写词 可以通过下述步骤构造：先取任意数量的 不重叠、不相邻 的子字符串，再用它们各自的长度进行替换。
例如，"abcde" 可以缩写为：

"a3e"（"bcd" 变为 "3" ）
"1bcd1"（"a" 和 "e" 都变为 "1"）
"5" ("abcde" 变为 "5")
"abcde" (没有子字符串被代替)


然而，这些缩写是 无效的 ：

"23"（"ab" 变为 "2" ，"cde" 变为 "3" ）是无效的，因为被选择的字符串是相邻的
"22de" ("ab" 变为 "2" ， "bc" 变为 "2")  是无效的，因为被选择的字符串是重叠的


给你一个字符串 word ，返回 一个由 word 的所有可能 广义缩写词 组成的列表 。按 任意顺序 返回答案。

示例 1：
输入：word = "word"
输出：["4","3d","2r1","2rd","1o2","1o1d","1or1","1ord","w3","w2d","w1r1","w1rd","wo2","wo1d","wor1","word"]
示例 2：
输入：word = "a"
输出：["1","a"]

提示：
1 <= word.length <= 15
word 仅由小写英文字母组成

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `word`, return ALL possible general abbreviations (each position kept or counted; consecutive counted positions merge into one number, no two numbers adjacent).

**Example:**
"word" → ["word","1ord","w1rd","2rd","wo1d","wo2d","w1o1d","3d","w3d","4","wo3","w2o1d","1o2d","1o1r1d","1o1r2","2o1d"...] (16 total)

**Constraints:**
- 1 <= word.length <= 15

## Approach

回溯:每个位置二选一——保留字母(reset 计数)或并入缩写计数(计数 +1);计数 >0 时在结尾补上数字。

时间 O(2^n),空间 O(n)(递归栈,不计输出)。
