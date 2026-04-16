# [3527] Find the Most Common Response

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-most-common-response/description/)

* algorithms
* Medium (74.93%)
* Likes:    59
* Dislikes: 7
* Testcase Example:  '[["good","ok","good","ok"],["ok","bad","good","ok","ok"],["good"],["bad"]]'

```md
You are given a 2D string array responses where each responses[i] is an array of strings representing survey responses from the ith day.
Return the most common response across all days after removing duplicate responses within each responses[i]. If there is a tie, return the lexicographically smallest response.

Example 1:

Input: responses = [['good','ok','good','ok'],['ok','bad','good','ok','ok'],['good'],['bad']]
Output: 'good'
Explanation:

After removing duplicates within each list, responses = [['good', 'ok'], ['ok', 'bad', 'good'], ['good'], ['bad']].
'good' appears 3 times, 'ok' appears 2 times, and 'bad' appears 2 times.
Return 'good' because it has the highest frequency.


Example 2:

Input: responses = [['good','ok','good'],['ok','bad'],['bad','notsure'],['great','good']]
Output: 'bad'
Explanation:

After removing duplicates within each list we have responses = [['good', 'ok'], ['ok', 'bad'], ['bad', 'notsure'], ['great', 'good']].
'bad', 'good', and 'ok' each occur 2 times.
The output is 'bad' because it is the lexicographically smallest amongst the words with the highest frequency.



Constraints:

1 <= responses.length <= 1000
1 <= responses[i].length <= 1000
1 <= responses[i][j].length <= 10
responses[i][j] consists of only lowercase English letters


```

## 中文翻译

给定二维字符串数组 responses，每天有一组调查反馈。去除每天内重复的回答后，统计所有回答的出现频率，返回频率最高的回答。若频率相同，返回字典序最小的。

## 解题思路

对每天的回答先去重（用 Set），然后用哈希表统计全局频率，最后找频率最高且字典序最小的回答。

## Solution

[SourceCode](./solution.js)
