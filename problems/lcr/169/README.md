# [LCR 169] 招式拆解 II

## Description


```md
https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/description/
* algorithms
* Easy (61.89%)
* Likes:    369
* Dislikes: -
* Testcase Example:  '"abbccdeff"'
某套连招动作记作仅由小写字母组成的序列 arr，其中 arr[i] 第 i 个招式的名字。请返回第一个只出现一次的招式名称，如不存在请返回空格。

示例 1：
输入：arr = "abbccdeff"
输出：'a'
示例 2：
输入：arr = "ccdd"
输出：' '

限制：
0 <= arr.length <= 50000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A combo of moves is recorded as a sequence `arr` of lowercase letters, where `arr[i]` is the name of the i-th move. Return the name of the **first move that appears exactly once**; if none exists, return a space character `' '`.

**Example 1:** Input `arr = "abbccdeff"` → Output `'a'`
**Example 2:** Input `arr = "ccdd"` → Output `' '`

**Constraints:** `0 <= arr.length <= 50000`

---

## Approach

Two passes:

1. Count the frequency of each character in `arr`.
2. Scan `arr` left to right and return the first character whose count is `1`.
3. If no such character, return `' '`.

Complexity: `O(n)` time, `O(1)` space (only 26 lowercase letters).
