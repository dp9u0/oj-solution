# [面试题 04.06] 后继者

## Description


```md
https://leetcode.cn/problems/successor-lcci/description/
* lcci
* Medium (62.79%)
* Likes:    244
* Dislikes: -
* Testcase Example:  '[2,1,3]\n1'
设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。
如果指定节点没有对应的“下一个”节点，则返回null。
示例 1：
输入：root = [2,1,3], p = 1
2
/ \
1   3
输出：2
示例 2：
输入：root = [5,3,6,2,4,null,null,1], p = 6
5
/ \
3   6
/ \
2   4
/
1
输出：null
Hint 1: 想想中序遍历是如何工作的，并尝试对其进行“逆向工程”。
Hint 2: 这只是逻辑方法中的一步：一个特定节点的后继节点是右子树的最左节点。如果没有右子树呢？

```

## Description (English)

Design an algorithm to find the "next" node (in-order successor) of a given node in a binary search tree. Return null if there is no successor.

Example 1:
Input: root = [2,1,3], p = 1
Output: 2

Example 2:
Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null

## 思路

利用 BST 性质，O(h)：从根下行，值大于 p 的节点都是候选后继——记录候选后左行找更小者；值不大于 p 则右行。结束时最后记录的候选即中序后继，无需中序遍历全树。

## Solution

[SourceCode](./solution.js)
