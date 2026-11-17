# [2914] 使二进制字符串变美丽的最少修改次数

## Description


```md
https://leetcode.cn/problems/minimum-number-of-changes-to-make-binary-string-beautiful/description/
* algorithms
* Medium (77.52%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '"1001"'
给你一个长度为偶数下标从 0 开始的二进制字符串 s 。
如果可以将一个字符串分割成一个或者更多满足以下条件的子字符串，那么我们称这个字符串是 美丽的 ：
每个子字符串的长度都是 偶数 。
每个子字符串都 只 包含 1 或 只 包含 0 。
你可以将 s 中任一字符改成 0 或者 1 。
请你返回让字符串 s 美丽的 最少 字符修改次数。

示例 1：
输入：s = "1001"
输出：2
解释：我们将 s[1] 改为 1 ，且将 s[3] 改为 0 ，得到字符串 "1100" 。
字符串 "1100" 是美丽的，因为我们可以将它分割成 "11
00" 。
将字符串变美丽最少需要 2 次修改。
示例 2：
输入：s = "10"
输出：1
解释：我们将 s[1] 改为 1 ，得到字符串 "11" 。
字符串 "11" 是美丽的，因为它已经是美丽的。
将字符串变美丽最少需要 1 次修改。
示例 3：
输入：s = "0000"
输出：0
解释：不需要进行任何修改，字符串 "0000" 已经是美丽字符串。

提示：
2 <= s.length <= 105
s 的长度为偶数。
s[i] 要么是 '0' ，要么是 '1' 。
Hint 1: For any valid partition, since each part consists of an even number of the same characters, we can further partition each part into lengths of exactly 2.
Hint 2: After noticing the first hint, we can decompose the whole string into disjoint blocks of size 2 and find the minimum number of changes required to make those blocks beautiful.

```

## Description (English)

You are given a 0-indexed binary string `s` of even length.

A string is called **beautiful** if it can be partitioned into one or more substrings such that:

- Each substring has an **even** length.
- Each substring contains **only** `1`'s or **only** `0`'s.

You may change any character in `s` to `'0'` or `'1'`.

Return the **minimum** number of changes required to make the string `s` beautiful.

**Example 1:**

```
Input: s = "1001"
Output: 2
Explanation: We change s[1] to 1 and s[3] to 0, getting "1100",
which is beautiful because it can be partitioned as "11|00".
```

**Example 2:**

```
Input: s = "10"
Output: 1
Explanation: We change s[1] to 1, getting "11".
```

**Example 3:**

```
Input: s = "0000"
Output: 0
Explanation: No changes needed.
```

**Constraints:**

- `2 <= s.length <= 10^5`
- `s` has an even length.
- `s[i]` is either `'0'` or `'1'`.

## Approach

**关键观察**:美丽的字符串可以按每个满足条件的子串进一步切成若干长度恰好为 2 的块。由于每个子串长度都是偶数,所有分割点都落在偶数下标上,因此整个字符串实际被分解成固定的一组不相交数对:`(s[0],s[1])`, `(s[2],s[3])`, …。

**推论**:`s` 是美丽的 ⟺ 每个数对 `(s[2i], s[2i+1])` 内两个字符相同(此时按数对切分即满足条件)。

**贪心**:对每个数对,若两字符不同,恰好需要 1 次修改(把其中一个改成另一个);若相同,需要 0 次。各数对相互独立,答案即所有数对中 `s[2i] != s[2i+1]` 的个数。

- 时间复杂度:O(n),一次遍历。
- 空间复杂度:O(1)。

## Solution

[SourceCode](./solution.js)
