# [LCR 032] 有效的字母异位词

## Description


```md
https://leetcode.cn/problems/dKk3P7/description/
* algorithms
* Easy (58.36%)
* Likes:    56
* Dislikes: -
* Testcase Example:  '"anagram"\n"nagaram"'
给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。
注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。

示例 1：
输入：s = "anagram", t = "nagaram"
输出：true
示例 2：
输入：s = "rat", t = "car"
输出：false
示例 3：
输入：s = "a", t = "a"
输出：false

提示：
1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

注意：本题与主站 242 题相似（字母异位词定义不同）：https://leetcode.cn/problems/valid-anagram/

```

## English Description

Given two strings `s` and `t`, write a function to determine whether they are an anagram of each other.

**Note:** `s` and `t` are considered anagrams only if the occurrence count of every character is the same in both strings **and** the order of characters is not exactly the same.

Example 1:
- Input: `s = "anagram", t = "nagaram"`
- Output: `true`

Example 2:
- Input: `s = "rat", t = "car"`
- Output: `false`

Example 3:
- Input: `s = "a", t = "a"`
- Output: `false`

Constraints:
- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters only.

Follow-up: What if the inputs contain Unicode characters? Can you adjust your solution to handle that case?

**Note:** This problem is similar to main-site problem 242 (with a different anagram definition): https://leetcode.cn/problems/valid-anagram/

## Approach

**核心观察:** 与主站 242 不同,本题要求**字符顺序不完全相同**,即 `s === t` 时不算变位词(示例3)。

**解法:** 
1. 若 `s.length !== t.length`,直接返回 false;
2. 若 `s === t`,返回 false;
3. 用长度为 26 的数组统计 `s` 中每个字符出现次数;
4. 遍历 `t`,对每个字符对应计数减 1,若某字符计数变为负数,说明 `t` 中该字符多于 `s`,返回 false;
5. 遍历结束返回 true(此时计数必然全部为 0)。

时间复杂度 O(n),空间复杂度 O(1)(固定 26 个计数器)。

**进阶(Unicode):** 若包含 Unicode 字符,改用 `Map` 按字符统计即可,时间复杂度不变,空间 O(字符种类数)。

## Solution

[SourceCode](./solution.js)
