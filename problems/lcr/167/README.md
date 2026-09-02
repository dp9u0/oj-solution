# [LCR 167] 招式拆解 I

## Description


```md
https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/description/
* algorithms
* Medium (46.04%)
* Likes:    635
* Dislikes: -
* Testcase Example:  '"dbascDdad"'
某套连招动作记作序列 arr，其中 arr[i] 为第 i 个招式的名字。请返回 arr 中最多可以出连续不重复的多少个招式。

示例 1：
输入：arr = "dbascDdad"
输出：6
解释：因为连续且最长的招式序列是 "dbascD" 或 "bascDd"，所以其长度为 6。
示例 2：
输入：arr = "KKK"
输出：1
解释：因为无重复字符的最长子串是 "K"，所以其长度为 1。
示例 3：
输入：arr = "pwwkew"
输出：3
解释：因为连续且最长的招式序列是 "wke"，所以其长度为 3。
请注意区分 子串 与 子序列 的概念：你的答案必须是 连续招式 的长度，也就是 子串。而 "pwke" 是一个非连续的 子序列，不是 子串。

提示：
0 <= arr.length <= 40000
arr 由英文字母、数字、符号和空格组成。

注意：本题与主站 3 题相同：https://leetcode.cn/problems/longest-substring-without-repeating-characters/

```

## Solution

[SourceCode](./solution.js)

### English Translation

A combo sequence is recorded as string `arr`, where `arr[i]` is the name of the i-th move. Return the maximum number of consecutive moves that can be performed without repetition — i.e., the length of the longest substring without repeating characters.

Example 1:
Input: arr = "dbascDdad"
Output: 6
Explanation: The longest consecutive non-repeating sequences are "dbascD" or "bascDd", both of length 6.

Example 2:
Input: arr = "KKK"
Output: 1
Explanation: The longest substring without repeating characters is "K", length 1.

Example 3:
Input: arr = "pwwkew"
Output: 3
Explanation: The longest consecutive non-repeating sequence is "wke", length 3.

Please distinguish **substring** from **subsequence**: the answer must be the length of a contiguous substring. "pwke" is a non-contiguous subsequence, not a substring.

Constraints:
- 0 <= arr.length <= 40000
- arr consists of English letters, digits, symbols and spaces.

Note: This problem is identical to main-site problem 3: Longest Substring Without Repeating Characters.

### Approach

Sliding window with two pointers.

Maintain a window `[left, right]` that contains no duplicate characters, expanding `right` one character at a time. Use a hash map to store the most recent index of each character seen.

- When `arr[right]` has appeared before at index `prev >= left`, the window is invalid, so jump `left` forward to `prev + 1` to drop the earlier duplicate.
- Otherwise, no duplicates are introduced; update the answer with `right - left + 1`.
- Always record/refresh the current character's latest index.

Each character is visited at most twice (once by `right`, once being skipped by `left`), so time complexity is O(n), and space complexity is O(n) in the worst case for the hash map.

Cases are compared case-sensitively: 'd' and 'D' are different characters (see example 1).
