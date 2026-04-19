# [382] Linked List Random Node

## Description

[LeetCode Problem Description](https://leetcode.com/problems/linked-list-random-node/description/)

* algorithms
* Medium (64.74%)
* Likes:    3221
* Dislikes: 723
* Testcase Example:  '["Solution","getRandom","getRandom","getRandom","getRandom","getRandom"]\n' +

```md
'[[[1,2,3]],[],[],[],[],[]]'
Given a singly linked list, return a random node&#39;s value from the linked list. Each node must have the same probability of being chosen.
Implement the Solution class:

Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.


Example 1:


Input
['Solution', 'getRandom', 'getRandom', 'getRandom', 'getRandom', 'getRandom']
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]
Explanation
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.


Constraints:

The number of nodes in the linked list will be in the range [1, 104].
-104 <= Node.val <= 104
At most 104 calls will be made to getRandom.


Follow up:

What if the linked list is extremely large and its length is unknown to you?
Could you solve this efficiently without using extra space?


```

## 中文翻译

给定单链表，随机返回一个节点的值，每个节点被选中的概率相等。

## 解题思路

蓄水池抽样（Reservoir Sampling）：遍历链表，第 i 个节点以 1/i 的概率替换当前结果。这样每个节点被选中的概率均为 1/n。

时间复杂度：O(n) 每次 getRandom，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
