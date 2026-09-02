# [LCR 122] 路径加密

## Description


```md
https://leetcode.cn/problems/ti-huan-kong-ge-lcof/description/
* algorithms
* Easy (74.93%)
* Likes:    591
* Dislikes: -
* Testcase Example:  '"a.aef.qerf.bb"'
假定一段路径记作字符串 path，其中以 "." 作为分隔符。现需将路径加密，加密方法为将 path 中的分隔符替换为空格 " "，请返回加密后的字符串。

示例 1：
输入：path = "a.aef.qerf.bb"
输出："a aef qerf bb"

限制：
0 <= path.length <= 10000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A path is recorded as string `path` with `"."` as the separator. Encrypt the path by replacing every separator `.` with a space `" "`, and return the result.

**Example:** `path = "a.aef.qerf.bb"` → `"a aef qerf bb"`

**Constraints:** `0 <= path.length <= 10000`.

---

## Approach

Simple string replacement: replace every `"."` with `" "`.

Complexity: `O(n)`.
