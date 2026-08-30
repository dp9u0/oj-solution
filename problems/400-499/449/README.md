# [449] Serialize and Deserialize BST

## Description

[LeetCode Problem Description](https://leetcode.com/problems/serialize-and-deserialize-bst/description/)

* algorithms
* Medium (59.97%)
* Likes:    3612
* Dislikes: 180
* Testcase Example:  '[2,1,3]'

```md
Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
The encoded string should be as compact as possible.

Example 1:
Input: root = [2,1,3]
Output: [2,1,3]
Example 2:
Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 104].
0 <= Node.val <= 104
The input tree is guaranteed to be a binary search tree.


```

## 题目翻译

序列化是将数据结构或对象转换为一系列比特的过程，以便它可以存储在文件或内存缓冲区中，或者通过网络连接链路传输，以便稍后在相同或另一个计算机环境中重建。

设计一个算法来序列化和反序列化二叉搜索树（BST）。对序列化/反序列化算法的工作方式没有限制。你需要确保一个二叉搜索树可以被序列化为一个字符串，并且这个字符串可以被反序列化为原始的树结构。

编码的字符串应当尽可能紧凑。

示例 1：
输入：root = [2,1,3]
输出：[2,1,3]
示例 2：
输入：root = []
输出：[]

约束条件：

树中节点数目在范围 [0, 10^4] 内。
0 <= Node.val <= 10^4
题目数据保证输入是一棵二叉搜索树。

## 解题思路

**关键洞察：BST 的前序遍历可以唯一确定树结构，无需存储 null 标记。**

- 普通二叉树序列化需要记录 null 占位符才能重建；但 BST 中，知道前序序列后，第一个元素是根，比根小的都是左子树，比根大的都是右子树，结构完全确定。
- 这样既满足"尽可能紧凑"的要求（省掉所有 null），又简化了编解码。

**序列化（serialize）：**
- 前序遍历（根 → 左 → 右），把节点值用逗号拼接成字符串。
- 空树返回空字符串。

**反序列化（deserialize）：**
- 切分字符串得到值数组，用索引指针 + 上下界（lower/upper）递归构建：
  - 若当前值不在 (lower, upper) 范围内，说明它不属于当前子树，回退索引并返回 null。
  - 否则创建节点，先递归构建左子树（上界为当前值），再递归构建右子树（下界为当前值）。
- 利用 BST 有序性避免线性扫描划分左右子树，时间复杂度 O(n)。

复杂度：序列化/反序列化均为 O(n) 时间、O(n) 空间（递归栈 + 结果串）。

## Solution

[SourceCode](./solution.js)
