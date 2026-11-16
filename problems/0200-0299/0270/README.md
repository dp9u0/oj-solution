# [270] 最接近的二叉搜索树值

## Description


```md
https://leetcode.cn/problems/closest-binary-search-tree-value/description/
* algorithms
* Easy (50.66%)
* Likes:    177
* Dislikes: -
* Testcase Example:  '[4,2,5,1,3]\n3.714286'
给你二叉搜索树的根节点 root 和一个目标值 target ，请在该二叉搜索树中找到最接近目标值 target 的数值。如果有多个答案，返回最小的那个。

示例 1：
输入：root = [4,2,5,1,3], target = 3.714286
输出：4
示例 2：
输入：root = [1], target = 4.428571
输出：1

提示：
树中节点的数目在范围 [1, 104] 内
0 <= Node.val <= 109
-109 <= target <= 109

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given the `root` of a BST, a floating-point `target`, return the value in the BST closest to `target`. If multiple answers exist, return the smallest.

**Example:**
root = [4,2,5,1,3], target = 3.714286 → 4

**Constraints:**
- 1 <= number of nodes <= 10^4, values unique, 0 <= target <= 10^8

## Approach

沿 BST 走:每层用当前节点更新最优(距离相等取较小值),target 小于当前值走左子树否则右子树——有序性保证另一侧不可能更近。

时间 O(h),空间 O(1)。

## Description (English)

Given the `root` of a BST, a floating-point `target`, return the value in the BST closest to `target`. If multiple answers exist, return the smallest.

**Example:**
root = [4,2,5,1,3], target = 3.714286 → 4

**Constraints:**
- 1 <= number of nodes <= 10^4, values unique, 0 <= target <= 10^8

## Approach

沿 BST 走:每层更新最优,距离相等时显式取值较小的节点(注意遍历顺序可能先大后小,不能依赖"先到先得");target 小于当前值走左子树否则右子树。

时间 O(h),空间 O(1)。
