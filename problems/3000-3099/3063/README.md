# [3063] 链表频率

## Description


```md
https://leetcode.cn/problems/linked-list-frequency/description/
* algorithms
* Easy (55.45%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[1,1,2,1,2,3]'
给定包含 k 个 不同 元素的链表的 head 节点，创建一个长度为 k 的链表，以 任何顺序 返回链表中所有 不同元素 出现的 频率。返回这个链表的头节点。

示例 1:
输入：head = [1,1,2,1,2,3]
输出：[3,2,1]
解释：列表中有 3 个不同的元素。1 的频率是 3，2 的频率是 2，3 的频率是 1。因此，我们返回 3 -> 2 -> 1。
注意 1 -> 2 -> 3，1 -> 3 -> 2，2 -> 1 -> 3，2 -> 3 -> 1，和 3 -> 1 -> 2 都是合法的答案。
示例 2:
输入：head = [1,1,2,2,2]
输出：[2,3]
解释：列表中有 2 个不同的元素。1 和 2 出现的频率是 2 和 3。因此，我们返回 2 -> 3。
示例 3:
输入：head = [6,5,4,3,2,1]
输出：[1,1,1,1,1,1]
解释：列表中有 6 个不同的元素。每个元素的频率是 1。因此，我们返回 1 -> 1 -> 1 -> 1 -> 1 -> 1。

提示：
链表中的节点数字范围在 [1, 105]之间。
1 <= Node.val <= 105
Hint 1: Traverse the linked list and keep the number of occurrences of values using a HashMap.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given the `head` of a linked list containing `k` distinct elements. Create a linked list of length `k` containing the frequencies of all distinct elements in any order. Return the head of this list.

**Example 1:**
Input: head = [1,1,2,1,2,3]
Output: [3,2,1] (1 appears 3 times, 2 twice, 3 once)

**Constraints:**
- 1 <= number of nodes <= 10^5
- 1 <= Node.val <= 10^5

## Approach

一遍遍历用 Map 统计各值频率,再按 Map 的值重建链表(任意顺序)。

时间 O(n),空间 O(k)。
