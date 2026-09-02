# [LCR 174] 寻找二叉搜索树中的目标节点

## Description


```md
https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/description/
* algorithms
* Easy (76.49%)
* Likes:    428
* Dislikes: -
* Testcase Example:  '[7,3,9,1,5]\n2'
某公司组织架构以二叉搜索树形式记录，节点值为处于该职位的员工编号。请返回第 cnt 大的员工编号。

示例 1：
输入：root = [7, 3, 9, 1, 5], cnt = 2
7
/ \
3   9
/ \
1   5
输出：7
示例 2：
输入: root = [10, 5, 15, 2, 7, null, 20, 1, null, 6, 8], cnt = 4
10
/ \
5   15
/ \    \
2   7    20
/   / \
1   6   8
输出: 8

提示：
1 ≤ cnt ≤ 二叉搜索树元素个数

```

## Solution

[SourceCode](./solution.js)

### English Description

A company's organizational structure is recorded as a binary search tree, where each node value is the employee ID of that position. Return the `cnt`-th **largest** employee ID.

**Example 1:**
```
Input: root = [7, 3, 9, 1, 5], cnt = 2
Output: 7
```

**Example 2:**
```
Input: root = [10, 5, 15, 2, 7, null, 20, 1, null, 6, 8], cnt = 4
Output: 8
```

**Constraints:**
- `1 <= cnt <= number of nodes in the BST`

### Approach (中文思路)

**右-根-左 逆中序遍历 + 计数剪枝**

- BST 的性质：**中序遍历为升序**，因此**逆中序遍历（先右子树 → 根 → 左子树）为降序**。
- 第 cnt 大 = 逆中序遍历中第 cnt 个访问到的节点。
- 递归遍历时维护计数器 `count`，每访问一个节点自增；当 `count === cnt` 时即为答案，记录后**直接返回（剪枝）**，不再继续递归。
- 可设置一个 `done` 标志，在已找到答案后提前终止递归，避免遍历整棵树。
- 时间复杂度 O(height + cnt)（最坏 O(n)），空间 O(height)（递归栈）。

> 另可参考：中序收集全部节点取第 `n-cnt` 小，但要 O(n) 空间且不能提前终止；此法更优。
