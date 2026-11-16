# [1165] 单行键盘

## Description


```md
https://leetcode.cn/problems/single-row-keyboard/description/
* algorithms
* Easy (86.09%)
* Likes:    39
* Dislikes: -
* Testcase Example:  '"abcdefghijklmnopqrstuvwxyz"\n"cba"'
我们定制了一款特殊的键盘，所有的键都 排列在一行上 。
给定一个长度为 26 的字符串 keyboard ，来表示键盘的布局(索引从 0 到 25 )。一开始，你的手指在索引 0 处。要输入一个字符，你必须把你的手指移动到所需字符的索引处。手指从索引 i 移动到索引 j 所需要的时间是
i - j
。
您需要输入一个字符串 word 。写一个函数来计算用一个手指输入需要多少时间。

示例 1：
输入：keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
输出：4
解释：从 0 号键移动到 2 号键来输出 'c'，又移动到 1 号键来输出 'b'，接着移动到 0 号键来输出 'a'。
总用时 = 2 + 1 + 1 = 4.
示例 2：
输入：keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
输出：73

提示：
keyboard.length == 26
keyboard 按某种特定顺序排列，并包含每个小写英文字母一次。
1 <= word.length <= 104
word[i] 为小写英文字母
Hint 1: Can be the problem divided in parts, so solving each part and sum their solutions it should return the answer? Yes, you only need to divide the problem in finger jumps.
Hint 2: In each finger jump you need to move your finger from one character to another, you need to know its index.
Hint 3: Map each character to it's index.
Hint 4: Use a hash table to do that.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

A custom keyboard lays all 26 keys in a single row, described by `keyboard`. Your finger starts at index 0. To type a character you must move your finger to its index; moving from index `i` to `j` costs `|i - j|`. Return the total time to type `word`.

**Example 1:**
keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba" → 4 (2 + 1 + 1)

**Constraints:**
- keyboard.length == 26, contains each lowercase letter once
- 1 <= word.length <= 10^4

## Approach

Map 每个字母到索引,累加相邻字符索引差的绝对值。

时间 O(|keyboard| + |word|),空间 O(26)。
