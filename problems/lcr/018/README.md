# [LCR 018] 验证回文串

## Description


```md
https://leetcode.cn/problems/XltzEq/description/
* algorithms
* Easy (51.63%)
* Likes:    74
* Dislikes: -
* Testcase Example:  '"A man, a plan, a canal: Panama"'
给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。
本题中，将空字符串定义为有效的 回文串 。

示例 1：
输入: s = "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2：
输入: s = "race a car"
输出: false
解释："raceacar" 不是回文串

提示：
1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成

注意：本题与主站 125 题相同： https://leetcode.cn/problems/valid-palindrome/

```

## Solution

[SourceCode](./solution.js)

### English Description

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome**, or `false` otherwise.

**Example 1:**
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**
```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Constraints:**
- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

> This problem is the same as LeetCode 125: Valid Palindrome.

### Approach (中文思路)

**双指针 + 字符过滤**

- 用左、右两个指针从字符串两端向中间扫描。
- 写一个 `isAlnum(c)` 判断字符是否为字母或数字（用正则或字符码判断）。
- 左指针遇到非字母数字就 `left++`，右指针遇到就 `right--` 跳过。
- 两侧都指向有效字符时，比较忽略大小写后是否相等（`toLowerCase()`），不等则直接返回 `false`。
- 指针相遇或交叉说明遍历完，返回 `true`。
- 时间复杂度 O(n)，空间复杂度 O(1)（不额外拷贝数组）。

> 空字符串/纯标点串按题意是有效回文（true）。
