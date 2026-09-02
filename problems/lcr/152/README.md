# [LCR 152] 验证二叉搜索树的后序遍历序列

## Description


```md
https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/description/
* algorithms
* Medium (57.07%)
* Likes:    793
* Dislikes: -
* Testcase Example:  '[4,9,6,5,8]'
请实现一个函数来判断整数数组 postorder 是否为二叉搜索树的后序遍历结果。

示例 1：
输入: postorder = [4,9,6,5,8]
输出: false
解释：从上图可以看出这不是一颗二叉搜索树
示例 2：
输入: postorder = [4,6,5,9,8]
输出: true
解释：可构建的二叉搜索树如上图

提示：
数组长度 <= 1000
postorder 中无重复数字

```

## Solution

[SourceCode](./solution.js)

## English Translation

Implement a function to determine whether the integer array `postorder` is a valid postorder traversal result of a Binary Search Tree.

Example 1:
```
Input: postorder = [4,9,6,5,8]
Output: false
Explanation: It is not a BST postorder sequence (as shown in the figure).
```
Example 2:
```
Input: postorder = [4,6,5,9,8]
Output: true
Explanation: A BST can be constructed from it (as shown in the figure).
```

Constraints:
- The length of the array is at most 1000.
- All numbers in `postorder` are distinct.

## Approach

For a BST, every left subtree node is smaller than the root and every right subtree node is greater than the root. In postorder traversal (left → right → root), the last element is always the root.

**Recursive divide & conquer:**
1. For range `[i, j]`, the root is `postorder[j]`.
2. Scan from `i` to find the split point `m` — the first index whose value is greater than the root. Then `[i, m-1]` forms the left subtree (all < root) and `[m, j-1]` the right subtree (all > root).
3. If any element in `[m, j-1]` is smaller than the root, the sequence is invalid.
4. Recurse into both sub-ranges; a single/empty range is valid.

Time complexity is O(n²) in the worst case (skewed tree) and O(n log n) on average; with `n ≤ 1000` this is fine.
