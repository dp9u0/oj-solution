# [面试题 01.06] 字符串压缩

## Description


```md
https://leetcode.cn/problems/compress-string-lcci/description/
* lcci
* Easy (46.14%)
* Likes:    194
* Dislikes: -
* Testcase Example:  '"aabcccccaa"'
字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
示例 1：
输入："aabcccccaaa"
输出："a2b1c5a3"
示例 2：
输入："abbccd"
输出："abbccd"
解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
提示：
字符串长度在 [0, 50000] 范围内。
Hint 1: 先做容易的事。压缩字符串，然后再比较长度。
Hint 2: 注意不要把字符串重复连接在一起。这会非常低效。

```

## Description (English)

String compression. Implement basic compression using the counts of repeated characters: e.g. "aabcccccaaa" becomes "a2b1c5a3". If the compressed string is not shorter than the original, return the original string. The string contains only English letters.

Example 1:
Input: "aabcccccaaa"
Output: "a2b1c5a3"

Example 2:
Input: "abbccd"
Output: "abbccd" (compressed "a1b2c2d1" is longer)

Note: string length in [0, 50000].

## 思路

游程编码 O(n)：单趟统计连续字符段，片段收进数组最后 join（避免反复字符串拼接）。压缩后长度严格小于原串才返回压缩串。

## Solution

[SourceCode](./solution.js)
