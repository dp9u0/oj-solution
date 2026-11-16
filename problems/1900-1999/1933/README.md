# [1933] 判断字符串是否可分解为值均等的子串

## Description


```md
https://leetcode.cn/problems/check-if-string-is-decomposable-into-value-equal-substrings/description/
* algorithms
* Easy (49.34%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '"000111000"'
一个字符串的所有字符都是一样的，被称作等值字符串。
举例，"1111" 和 "33" 就是等值字符串。
相比之下，"123"就不是等值字符串。
规则：给出一个数字字符串s，将字符串分解成一些等值字符串，如果有且仅有一个等值子字符串长度为2，其他的等值子字符串的长度都是3.
如果能够按照上面的规则分解字符串s，就返回真，否则返回假。
子串就是原字符串中连续的字符序列。

示例 1：
输入: s = "000111000"
输出: false
解释:  s只能被分解长度为3的等值子字符串。
示例 2：
输入: s = "00011111222"
输出: true
解释: s 能被分解为 ["000","111","11","222"].
示例 3：
输入: s = "01110002223300"
输出: false
解释: 一个不能被分解的原因是在开头有一个0.

提示:
1 <= s.length <= 1000
s 仅包含数字。
Hint 1: Keep looking for 3-equals, if you find a 3-equal, keep going. If you don't find a 3-equal, check if it is a 2-equal.
Hint 2: Make sure that it is the only 2-equal.
Hint 3: If it is neither a 3-equal nor a 2-equal, then it is impossible.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

An equal-value string is a string where all characters are the same. Given a digit string `s`, decompose it into equal-value substrings such that **exactly one** substring has length 2 and **all others** have length 3. Return `true` if such a decomposition exists, otherwise `false`.

**Constraints:**
- 1 <= s.length <= 1000
- s consists of digits.

## Approach

按连续相同字符分组。每段长度 L 只能拆成若干 3 加至多一个 2:`L % 3 == 1` 无解直接 false;`L % 3 == 2` 的段必须消耗唯一的 2 长度块(否则剩 2 无法处理),故统计这类段数并要求恰好为 1。

时间 O(n),空间 O(1)。
