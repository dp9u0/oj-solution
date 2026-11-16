# [3696] 不同单词间的最大距离 I

## Description


```md
https://leetcode.cn/problems/maximum-distance-between-unequal-words-in-array-i/description/
* algorithms
* Easy (82.90%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '["leetcode","leetcode","codeforces"]'
给你一个字符串数组 words。
找到两个 不同 下标 i 和 j 之间的 最大距离 ，且满足以下条件：
words[i] != words[j]，并且
距离定义为 j - i + 1。
返回所有满足条件的下标对中最大的距离。如果不存在有效的下标对，返回 0。

示例 1：
输入： words = ["leetcode","leetcode","codeforces"]
输出： 3
解释：
在此示例中，words[0] 和 words[2] 不相等，并且它们的最大距离为 2 - 0 + 1 = 3。
示例 2：
输入： words = ["a","b","c","a","a"]
输出： 4
解释：
在此示例中，words[1] 和 words[4] 的最大距离为 4 - 1 + 1 = 4。
示例 3：
输入： words = ["z","z","z"]
输出： 0
解释：
在此示例中，所有单词都相等，因此答案为 0。

提示：
1 <= words.length <= 100
1 <= words[i].length <= 10
words[i] 由小写英文字母组成。
Hint 1: Use bruteforce

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given a string array `words`.

Find the **maximum distance** between two **different** indices `i` and `j` such that:
- `words[i] != words[j]`, and
- the distance is defined as `j - i + 1`.

Return the maximum distance among all valid pairs of indices. If no valid pair exists, return `0`.

**Example 1:**
Input: words = ["leetcode","leetcode","codeforces"]
Output: 3
Explanation: words[0] and words[2] are not equal, and their maximum distance is 2 - 0 + 1 = 3.

**Example 2:**
Input: words = ["a","b","c","a","a"]
Output: 4
Explanation: The maximum distance between words[1] and words[4] is 4 - 1 + 1 = 4.

**Example 3:**
Input: words = ["z","z","z"]
Output: 0
Explanation: All words are equal, so the answer is 0.

**Constraints:**
- 1 <= words.length <= 100
- 1 <= words[i].length <= 10
- words[i] consists of lowercase English letters.

## Approach

关键观察:最优解一定可以取到某个端点。

1. 若 `words[0] != words[n-1]`,首尾直接构成合法对,答案为 `n`。
2. 若首尾相等,合法对必须一端是首或尾、另一端是与 `words[0]` 不同的词。扫描一遍记录与 `words[0]` 不同的最左下标 `first` 和最右下标 `last`:
   - 取尾部对 `(first, n-1)` 距离 `n - first`;
   - 取头部对 `(0, last)` 距离 `last + 1`;
   - 答案为 `max(last + 1, n - first)`。
3. 若不存在任何不同的词,返回 `0`。

时间 O(n),空间 O(1)。
