# [1794] 统计距离最小的子串对个数

## Description


```md
https://leetcode.cn/problems/count-pairs-of-equal-substrings-with-minimum-difference/description/
* algorithms
* Medium (49.63%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '"abcd"\n"bccda"'
输入数据为两个字符串firstString 和 secondString，两个字符串下标均从0开始，且均只包含小写的英文字符，请计算满足下列要求的下标四元组(i,j,a,b)的个数：
0 <= i <= j < firstString.length
0 <= a <= b < secondString.length
firstString字符串中从i位置到j位置的子串(包括j位置的字符)和secondString字符串从a位置到b位置的子串(包括b位置字符)相等
j-a的数值是所有符合前面三个条件的四元组中可能的最小值
返回符合上述 4 个条件的四元组的 个数 。

示例1：
输入：firstString = "abcd", secondString = "bccda"
输出：1
解释：(0,0,4,4)是唯一符合条件的四元组且其j-a的数值是最小的.
示例 2：
输入：firstString = "ab", secondString = "cd"
输出：0
解释：没有任何一个四元组能满足上述4个要求.

提示：
1 <= firstString.length, secondString.length <= 2 * 105
两个输入字符串均只包含小写英文字符.
Hint 1: If the chosen substrings are of size larger than 1, then you can remove all but the first character from both substrings, and you'll get equal substrings of size 1, with the same a but less j. Hence, it's always optimal to choose substrings of size 1.
Hint 2: If you choose a specific letter, then it's optimal to choose its first occurrence in firstString, and its last occurrence in secondString, to minimize j-a.

```

## Solution

[SourceCode](./solution.js)

## Translation

Count quadruples (i,j,a,b) where substrings match, j − a equals the MINIMUM possible difference.

## Approach

**单字符最优 + 首末索引**。更长的匹配可缩到首字符(j 更小),故最优必为单字符;对每个字母取 firstString 首现 i(最小 j)与 secondString 末现 a(最大 a),diff = i − a 取最小,统计取到最小值的字母数。O(n)。
