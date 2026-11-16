# [3062] 链表游戏的获胜者

## Description


```md
https://leetcode.cn/problems/winner-of-the-linked-list-game/description/
* algorithms
* Easy (51.82%)
* Dislikes: -
* Testcase Example:  '[2,1]'
给定长度为 偶数 ，包含整数的链表的 head 节点。
每个 奇数编号 的节点包含一个奇数，并且每个 偶数编号 的节点包含一个偶数。
我们把每个偶数编号的节点和它的下一个节点叫做一个 对，例如编号为 0 和 1 的节点是一对，编号为 2 和 3 的节点是一对，以此类推。
对于每个 对，我们比较对中节点的值：
如果奇数节点更大，"Odd" 队得一分。
如果偶数节点更大，"Even" 队得一分。
返回分数更 高 的队名，如果分数相同，返回 "Tie"。

示例 1：
输入：head = [2,1]
输出："Even"
解释：链表中只有一个对 (2,1)。因为 2 > 1，偶数队得分。
因此，答案是 "Even"。

示例 2：
输入：head = [2,5,4,7,20,5]
输出："Odd"
解释：此链表中有 3 对。让我们分别对每一对进行分析：
(2,5) -> 因为 2 < 5，奇数队得分。
(4,7) -> 因为 4 < 7，奇数队得分。
(20,5) -> 因为 20 > 5，偶数队得分。
奇数队得 2 分，偶数队得 1 分，奇数队得分更高。
因此，答案是 "Odd"。

示例 3：
输入：head = [4,5,2,1]
输出："Tie"
解释：此链表中有 2 对。让我们分别对每一对进行分析：
(4,5) -> 因为 4 < 5，奇数队得分。
(2,1) -> 因为 2 > 1，偶数队得分。
每队得 1 分。
因此，答案是 "Tie"。

提示：
链表中节点的数字在范围 [2, 100] 内。
链表中的节点数为偶数。
1 <= Node.val <= 100
每个奇数编号节点的值都是奇数。
每个偶数编号节点的值都是偶数。
Hint 1: Traverse linked list and try to find pairs.
Hint 2: For each team, keep the number of its winning games in a variable.
Hint 3: Compare the winning variables and find the answer.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given the `head` of a linked list of even length. Every even-indexed node contains an even number and every odd-indexed node contains an odd number. Nodes at indices (0,1), (2,3), ... form pairs. For each pair: if the even-indexed value is greater, team "Even" scores; if the odd-indexed value is greater, team "Odd" scores. Return the team name with the higher score, or "Tie" if equal.

**Constraints:**
- 2 <= number of nodes <= 100 (even)
- 1 <= Node.val <= 100

## Approach

每次走两步,比较 `cur.val` 与 `cur.next.val` 计分,最后比较两队分数。

时间 O(n),空间 O(1)。
