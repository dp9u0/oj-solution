# [2268] 最少按键次数

## Description


```md
https://leetcode.cn/problems/minimum-number-of-keypresses/description/
* algorithms
* Medium (62.60%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '"apple"'
你有一个 9 键键盘，按键按 1 到 9 编号，每个按键对应着几个英文小写字母。你可以决定每个按键对应哪些英文字母，但要满足如下条件：
26 个英文小写字母必须全部映射到这 9 个按键上。
每个英文字母只能映射到 恰好 一个按键上。
每个按键 最多 对应 3 个英文字母。
如果想打出按键上的第一个字母，只需要按一次。如果想打出按键上的第二个字母，则需要按两次，依次类推。
给你一个字符串 s ，返回基于你设计的键盘打出 s 需要的 最少 按键次数。
注意：字母映射到每个按键上，映射的顺序无法进行更改。

示例 1 ：
输入：s = "apple"
输出：5
解释：上图所示为设置键盘的最佳方法之一。
按按键 1 一次输入 'a' 。
按按键 6 一次输入 'p' 。
按按键 6 一次输入 'p' 。
按按键 5 一次输入 'l' 。
按按键 3 一次输入 'e' 。
总共按按键 5 次，所以返回 5 。
示例 2 ：
输入：s = "abcdefghijkl"
输出：15
解释：上图所示为设置键盘的最佳方法之一。
字母 'a' 到 'i' 每个只需要按一次按键。
按按键 1 两次输入 'j' 。
按按键 2 两次输入 'k' 。
按按键 3 两次输入 'l' 。
总共按按键 15 次，所以返回 15 。

提示：
1 <= s.length <= 105
s 由小写英文字母组成
Hint 1: Map the most frequent letters so that you can type them with only 1 keypress.
Hint 2: Use an array to keep track of the frequency of every character, then sort it in non-increasing order.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Design a 9-key phone keyboard: map all 26 letters to 9 keys, at most 3 letters per key; typing the k-th letter on a key takes k presses. Given s, return the minimum number of presses to type s under the best mapping.

Example 1:
Input: s = "apple"
Output: 5

Example 2:
Input: s = "abcdefghijkl"
Output: 15

Constraints: 1 <= s.length <= 10^5.

## Approach

Greedy: sort letter frequencies in non-increasing order; assign the 9 most frequent letters to first slots (1 press), the next 9 to second slots (2 presses), the rest to third slots (3 presses). Sum frequency * slot cost.
