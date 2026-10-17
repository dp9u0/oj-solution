# [面试题 04.10] 检查子树

## Description


```md
https://leetcode.cn/problems/check-subtree-lcci/description/
* lcci
* Medium (64.10%)
* Likes:    94
* Dislikes: -
* Testcase Example:  '[1, 2, 3]\n[2]'
检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。
如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。
注意：此题相对书上原题略有改动。
示例 1：
输入：t1 = [1, 2, 3], t2 = [2]
输出：true
示例 2：
输入：t1 = [1, null, 2, 4], t2 = [3, 2]
输出：false
提示：
树的节点数目范围为 [0, 20000]。
Hint 1: 如果T2是T1的子树，它的中序遍历将如何与T1的比较？它的前序和后序遍历如何？
Hint 2: 中序遍历无法告诉我们更多。毕竟，每个具有相同值的二叉搜索树（不管结构如何）将具有相同的中序遍历。这也就是中序遍历的含义：内容是有序的（如果它在二叉搜索树这种特定情况下不起作用，那么对于一般二叉树来说它肯定不起作用）。然而，前序遍历更具指示性。
Hint 3: 你可能得出结论，如果T2.preorderTraversal()是T1.preorderTraversal()的子字符串，则T2是T1的子树。这几乎是事实，除非树可能有重复的值。假设T1和T2具有所有重复值，但结构不同。即使T2不是T1的子树，前序遍历看起来也是一样的。你如何处理这样的情况？
Hint 4: 尽管问题似乎源于重复的值，但不止如此。问题是，前序遍历是相同的，只是因为我们跳过了空节点（因为它们是空的）。考虑在访问到空节点时往前序遍历的字符串中插入一个占位符。把空节点记录为一个“真正的”节点，你就可以区分出不同的结构了。
Hint 5: 或者用递归法处理这个问题。给定一个特殊节点T1，可以检查它的子树是否匹配T2吗？

```

## Description (English)

Check Subtree. You have two very large binary trees: T1 with millions... tens of thousands of nodes, and T2 with tens of thousands of nodes. Design an algorithm to decide if T2 is a subtree of T1: T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2 (cutting at n yields exactly T2).

Example 1:
Input: t1 = [1, 2, 3], t2 = [2]
Output: true

Example 2:
Input: t1 = [1, null, 2, 4], t2 = [3, 2]
Output: false

Note: node counts are in [0, 20000].

## 思路

前序序列化（空位记 `#`、每个值前置 `,` 防止跨词元误配）+ KMP 子串匹配，O(n1 + n2)：T2 是 T1 子树 ⇔ serialize(T2) 是 serialize(T1) 的子串。序列化用显式栈而非递归——2 万节点的退化链形树会把递归栈打爆。

## Solution

[SourceCode](./solution.js)
