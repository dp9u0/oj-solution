# [234] Palindrome Linked List

## Description

* algorithms
* Easy (34.74%)
* Total Accepted:    212.9K
* Total Submissions: 612.8K
* Testcase Example:  '[1,2]'

```md
Given a singly linked list, determine if it is a palindrome.
Example 1:
Input: 1->2
Output: false
Example 2:
Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

```

## Solution

将 mid->end inplace reverse,然后 tp 比较

[SourceCode](./solution.js)