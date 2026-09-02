# [LCR 092] 将字符串翻转到单调递增

## Description


```md
https://leetcode.cn/problems/cyJERH/description/
* algorithms
* Medium (68.27%)
* Likes:    91
* Dislikes: -
* Testcase Example:  '"00110"'
如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，那么该字符串是 单调递增 的。
我们给出一个由字符 '0' 和 '1' 组成的字符串 s，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。
返回使 s 单调递增 的最小翻转次数。

示例 1：
输入：s = "00110"
输出：1
解释：我们翻转最后一位得到 00111.
示例 2：
输入：s = "010110"
输出：2
解释：我们翻转得到 011111，或者是 000111。
示例 3：
输入：s = "00011000"
输出：2
解释：我们翻转得到 00000000。

提示：
1 <= s.length <= 20000
s 中只包含字符 '0' 和 '1'

注意：本题与主站 926 题相同： https://leetcode.cn/problems/flip-string-to-monotone-increasing/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A binary string is **monotone increasing** if it's `0*1*`. Flip any 0↔1. Return the minimum flips to make `s` monotone increasing.

**Example:** `"00110"`→1; `"010110"`→2; `"00011000"`→2.

**Constraints:** length ≤ 2e4. Note: same as LeetCode 926.

---

## Approach

DP scanning left→right: `zero` = min flips to make processed prefix all `0`s; `one` = min flips to make it monotone ending in `1`. Update per char; answer `min(zero, one)` at end.

Complexity: `O(n)`.
