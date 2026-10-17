# [面试题 01.09] 字符串轮转

## Description


```md
https://leetcode.cn/problems/string-rotation-lcci/description/
* lcci
* Easy (53.57%)
* Likes:    265
* Dislikes: -
* Testcase Example:  '"waterbottle"\n"erbottlewat"'
字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
示例 1：
输入：s1 = "waterbottle", s2 = "erbottlewat"
输出：True
示例 2：
输入：s1 = "aa", s2 = "aba"
输出：False
提示：
字符串长度在[0, 100000]范围内。
说明:
你能只调用一次检查子串的方法吗？
Hint 1: 如果一个字符串是另一个字符串的旋转，那么它就是在某个特定点上的旋转。例如，字符串waterbottle在3处的旋转意味着在第三个字符处切割waterbottle，并在左半部分（wat）之前放置右半部分（erbottle）。
Hint 2: 本质上，我们是在寻找是否有一种方式可以把第一个字符串分成两部分，即x和y，如此一来，第一个字符串就是xy，第二个字符串就是yx。例如，x = wat，y = erbottle。那么，第一个字符串xy = waterbottle，第二个字符串yx = erbottlewat。
Hint 3: 想想前面的提示。再想想当你将erbottlewat与它本身连接会发生什么。你得到了erbottlewaterbottlewat。

```

## Description (English)

String rotation. Given two strings s1 and s2, write code to check whether s2 is a rotation of s1 (e.g. "waterbottle" is a rotation of "erbottlewat").

Example 1:
Input: s1 = "waterbottle", s2 = "erbottlewat"
Output: True

Example 2:
Input: s1 = "aa", s2 = "aba"
Output: False

Notes: string length in [0, 100000]; use only ONE substring check.

## 思路

s2 是 s1 的旋转 ⇔ 等长且 s2 是 `s1 + s1` 的子串——s1+s1 恰好把每种旋转的起点都展开一遍（xy ∈ (xy)(xy)）。一次 includes 调用满足题目约束，O(n)。

## Solution

[SourceCode](./solution.js)
