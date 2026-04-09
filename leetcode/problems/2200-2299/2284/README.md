# [2284] Sender With Largest Word Count

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sender-with-largest-word-count/description/)

* algorithms
* Medium (59.65%)
* Likes:    469
* Dislikes: 41
* Testcase Example:  '["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"]\n' +

```md
'["Alice","userTwo","userThree","Alice"]'
You have a chat log of n messages. You are given two string arrays messages and senders where messages[i] is a message sent by senders[i].
A message is list of words that are separated by a single space with no leading or trailing spaces. The word count of a sender is the total number of words sent by the sender. Note that a sender may send more than one message.
Return the sender with the largest word count. If there is more than one sender with the largest word count, return the one with the lexicographically largest name.
Note:

Uppercase letters come before lowercase letters in lexicographical order.
'Alice' and 'alice' are distinct.


Example 1:

Input: messages = ['Hello userTwooo','Hi userThree','Wonderful day Alice','Nice day userThree'], senders = ['Alice','userTwo','userThree','Alice']
Output: 'Alice'
Explanation: Alice sends a total of 2 + 3 = 5 words.
userTwo sends a total of 2 words.
userThree sends a total of 3 words.
Since Alice has the largest word count, we return 'Alice'.

Example 2:

Input: messages = ['How is leetcode for everyone','Leetcode is useful for practice'], senders = ['Bob','Charlie']
Output: 'Charlie'
Explanation: Bob sends a total of 5 words.
Charlie sends a total of 5 words.
Since there is a tie for the largest word count, we return the sender with the lexicographically larger name, Charlie.

Constraints:

n == messages.length == senders.length
1 <= n <= 104
1 <= messages[i].length <= 100
1 <= senders[i].length <= 10
messages[i] consists of uppercase and lowercase English letters and &#39; &#39;.
All the words in messages[i] are separated by a single space.
messages[i] does not have leading or trailing spaces.
senders[i] consists of uppercase and lowercase English letters only.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定聊天记录 messages 和发送者 senders，统计每个发送者的总词数，返回总词数最多的发送者。若有多人并列，返回字典序最大的名字。

## 解题思路

**Approach: 哈希表计数**

1. 遍历 messages 和 senders，用 Map 统计每个 sender 的总词数
2. 词数 = 字符串按空格分割后的长度
3. 找到最大词数，若有并列则按字典序取最大
4. 复杂度 O(n * L)，n 为消息数，L 为平均消息长度
