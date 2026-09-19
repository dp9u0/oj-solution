# [3498] 字符串的反转度

## Description


```md
https://leetcode.cn/problems/reverse-degree-of-a-string/description/
* algorithms
* Easy (86.54%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '"abc"'
给你一个字符串 s，计算其 反转度。
反转度的计算方法如下：
对于每个字符，将其在 反转 字母表中的位置（'a' = 26, 'b' = 25, ..., 'z' = 1）与其在字符串中的位置（下标从1 开始）相乘。
将这些乘积加起来，得到字符串中所有字符的和。
返回 反转度。

示例 1：
输入： s = "abc"
输出： 148
解释：


字母
反转字母表中的位置
字符串中的位置
乘积


'a'
26
1
26


'b'
25
2
50


'c'
24
3
72


反转度是 26 + 50 + 72 = 148 。
示例 2：
输入： s = "zaza"
输出： 160
解释：


字母
反转字母表中的位置
字符串中的位置
乘积


'z'
1
1
1


'a'
26
2
52


'z'
1
3
3


'a'
26
4
104


反转度是 1 + 52 + 3 + 104 = 160 。

提示：
1 <= s.length <= 1000
s 仅包含小写字母。
Hint 1: Simulate the operations as described.

```

## Description (English)

You are given a string `s`. Calculate its **reverse degree**.

The reverse degree is calculated as follows:

- For each character, multiply its position in the **reversed** alphabet (`'a'` = 26, `'b'` = 25, ..., `'z'` = 1) by its position in the string (1-indexed).
- Sum these products across all characters in the string.

Return the **reverse degree** of `s`.

Example 1:

```
Input: s = "abc"
Output: 148
Explanation: 'a' → 26 * 1 = 26, 'b' → 25 * 2 = 50, 'c' → 24 * 3 = 72.
The reverse degree is 26 + 50 + 72 = 148.
```

Example 2:

```
Input: s = "zaza"
Output: 160
Explanation: 'z' → 1 * 1 = 1, 'a' → 26 * 2 = 52, 'z' → 1 * 3 = 3, 'a' → 26 * 4 = 104.
The reverse degree is 1 + 52 + 3 + 104 = 160.
```

Constraints:

- `1 <= s.length <= 1000`
- `s` consists of only lowercase English letters.

## 思路

一次线性遍历模拟即可：

- 字符 `c` 在反转字母表中的位置为 `26 - (c - 'a')`，即 `'a'` 对应 26，`'z'` 对应 1。
- 字符在字符串中的位置为 1-indexed 下标 `i + 1`。
- 累加 `(26 - (s.charCodeAt(i) - 97)) * (i + 1)`。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
