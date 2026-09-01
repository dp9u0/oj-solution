# 19. Remove Nth Node From End of List

## Description

Given a linked list, remove the n-th node from the end of list and return its head.

Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

## Example

```javascript
Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

## Solution

使用双指针,一个先前进N步,然后两个指针一起前进,直到第二个指针指向End,这时候,第一个指针指向 Last N.

[SourceCode](./solution.js)