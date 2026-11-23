# [3135] 通过添加或删除结尾字符来同化字符串

## Description


```md
https://leetcode.cn/problems/equalize-strings-by-adding-or-removing-characters-at-ends/description/
* algorithms
* Medium (22.27%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '"abcde"\n"cdef"'
给定两个字符串 initial 和 target，你的任务是通过一系列操作改变 initial 以使它与 target 相同。
在一次操作中，您只能在 initial 字符串开头或结尾添加或删除一个字符。
返回将 initial 变为 target 所需的最小 操作次数。

示例 1：
输入：initial = "abcde", target = "cdef"
输出：3
解释：
从 initial 的开头删除 'a' 和 'b' 并添加 'f' 到结尾。
示例 2：
输入：initial = "axxy", target = "yabx"
输出：6
解释：


操作
结果字符串


将 'y' 添加到开头
"yaxxy"


从结尾删除
"yaxx"


从结尾删除
"yax"


从结尾删除
"ya"


将 'b' 添加到结尾
"yab"


将 'x' 添加到结尾
"yabx"


示例 3：
输入：initial = "xyz", target = "xyz"
输出：0
解释：
不需要任何操作，因为字符串已经相等。

提示：
1 <= initial.length, target.length <= 1000
initial 和 target 只包含小写英文字母。

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Transform initial to target by adding/removing one character at either end. Minimum operations.

Approach: chars kept from initial always form a contiguous substring (end deletions only; additions don't disturb). So answer = len(initial) + len(target) - 2 * L, L = longest common substring of initial and target (classic DP, O(n*m)).

Verified: "abcde"/"cdef" -> 3 (common "cde"); "axxy"/"yabx" -> 6; "xyz"/"xyz" -> 0.
