# [面试题 02.08] 环路检测

## Description


```md
https://leetcode.cn/problems/linked-list-cycle-lcci/description/
* lcci
* Medium (57.12%)
* Likes:    128
* Dislikes: -
* Testcase Example:  '[3,2,0,-4]\n1'
给定一个链表，如果它是有环链表，实现一个算法返回环路的开头节点。若环不存在，请返回 null。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。

进阶：
你是否可以不用额外空间解决此题？
Hint 1: 这个问题实际上可以分为两个部分。首先，检测链表是否有循环。第二，找出循环开始的位置。
Hint 2: 要确定是否有一个循环，请尝试“快行指针”方法。让一个指针比另一个指针快。
Hint 3: 你可以使用两个指针，一个指针移动速度是另一个指针的两倍。如果有环，两个指针会碰撞。它们将同时降落在同一地点。它们在哪里相遇？为什么呢？
Hint 4: 如果你还没有确定两个指针的起始位置，请尝试使用链表1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> ?，其中 ? 链接到另一个节点。试着让 ? 成为第一个节点（即9指向1，使得整个链表是一个循环）。然后让 ? 成为节点2，然后成为节点3，然后成为节点4。这一模式是什么？你能解释一下为什么会这样吗？

```

## Description (English)

Given a linked list, return the node where the cycle begins. If there is no cycle, return null. (pos marks the index the tail connects to; it is not passed as a parameter.)

Example 1: head = [3,2,0,-4], pos = 1 → tail connects to node index 1
Example 2: head = [1,2], pos = 0 → tail connects to node index 0
Example 3: head = [1], pos = -1 → no cycle

Follow-up: can you solve it without extra space?

## 思路

Floyd 判圈 O(n)/O(1)：快指针每次走两步、慢指针一步——相遇则必有环。设头到环口为 a、环长 c，相遇点距环口 b：慢指针走了 a+b，快指针走了 a+b+kc，由 2(a+b) = a+b+kc 得 a = kc − b，故相遇后另起一指针从头与慢指针同速前进，再次相遇处即环入口。

## Solution

[SourceCode](./solution.js)
