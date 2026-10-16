# [面试题 02.01] 移除重复节点

## Description


```md
https://leetcode.cn/problems/remove-duplicate-node-lcci/description/
* lcci
* Easy (66.44%)
* Likes:    207
* Dislikes: -
* Testcase Example:  '[1, 2, 3, 3, 2, 1]'
编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
示例1：
输入：[1, 2, 3, 3, 2, 1]
输出：[1, 2, 3]
示例2：
输入：[1, 1, 1, 1, 2]
输出：[1, 2]
提示：
链表长度在[0, 20000]范围内。
链表元素在[0, 20000]范围内。
进阶：
如果不得使用临时缓冲区，该怎么解决？
Hint 1: 你有没有试过一个散列表？你应该可以通过一次链表遍历做到这一点。
Hint 2: 没有额外的空间，你需要O(N2)的时间。尝试使用两个指针，其中第二个指针在第一个指针之前搜索。

```

## Description (English)

Write code to remove duplicates from an unsorted linked list, keeping the first occurrence.

Example 1:
Input: [1, 2, 3, 3, 2, 1]
Output: [1, 2, 3]

Example 2:
Input: [1, 1, 1, 1, 2]
Output: [1, 2]

Note:
- The length of the list is in the range [0, 20000].
- The elements are in the range [0, 20000].
- Follow-up: what if no temporary buffer is allowed?

## 思路

一次遍历 + 已见集合：dummy 哨兵统一头节点删除，`prev.next` 已出现则摘除，否则标记后前进。

值域限定 [0, 20000]，用 `Uint8Array(20001)` 位图代替哈希表——无哈希开销、空间 O(值域) 恒定。时间 O(n)。

进阶（不允许临时缓冲区）：对每个节点用第二指针在后续扫描删除重复，时间 O(n²)、空间 O(1)，本题以缓冲区版为最优解。

## Solution

[SourceCode](./solution.js)
