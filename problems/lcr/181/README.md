# [LCR 181] 字符串中的单词反转

## Description


```md
https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/description/
* algorithms
* Easy (45.15%)
* Likes:    349
* Dislikes: -
* Testcase Example:  '"the sky is blue"'
你在与一位习惯从右往左阅读的朋友发消息，他发出的文字顺序都与正常相反但单词内容正确，为了和他顺利交流你决定写一个转换程序，把他所发的消息 message 转换为正常语序。
注意：输入字符串 message 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

示例 1：
输入: message = "the sky is blue"
输出: "blue is sky the"
示例 2：
输入: message = "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：
输入: message = "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

提示：
0 <= message.length <= 104
message 中包含英文大小写字母、空格和数字
注意：
本题与主站 151 题相同：https://leetcode.cn/problems/reverse-words-in-a-string/

```

## English Description

You are messaging a friend who is used to reading from right to left. The text they send is in reverse word order, but each word's content is correct. To communicate smoothly, you decide to write a conversion program that converts the received message into normal word order.

Note: The input string `message` may contain leading spaces, trailing spaces, or multiple spaces between words. In the returned result string, words should be separated by a single space and should not include any extra spaces.

Example 1:
```
Input: message = "the sky is blue"
Output: "blue is sky the"
```

Example 2:
```
Input: message = "  hello world!  "
Output: "world! hello"
```
Explanation: The input string may contain extra spaces in front or behind, but the reversed result must not include them.

Example 3:
```
Input: message = "a good   example"
Output: "example good a"
```
Explanation: If there are extra spaces between two words, reduce the spaces between words to only a single one after reversal.

Constraints:
- 0 <= message.length <= 10^4
- `message` consists of English letters (upper and lower case), spaces, and digits.

Note: This problem is identical to main-site problem 151: https://leetcode.cn/problems/reverse-words-in-a-string/

## Approach

**Analysis:** This is a classic "reverse order of words" problem. The goal is to reverse the word order while normalizing whitespace (trim leading/trailing spaces, collapse runs of spaces between words into one).

Key observations:
1. The order of characters within each word must be preserved — only the words themselves are reversed.
2. Multiple/extra spaces must be cleaned up, so we cannot simply `reverse()` the whole string.

**Solution (one-liner):**
1. `message.trim()` — remove leading and trailing whitespace.
2. `.split(/\s+/)` — split on one-or-more whitespace, so each element is a non-empty word.
3. `.reverse()` — reverse the word array.
4. `.join(' ')` — join with single spaces.

Time complexity: O(n), where n is the string length (each char processed once). Space complexity: O(n) for the word array and result.

## Solution

[SourceCode](./solution.js)
