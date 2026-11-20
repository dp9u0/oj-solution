# [1586] 二叉搜索树迭代器 II

## Description


```md
https://leetcode.cn/problems/binary-search-tree-iterator-ii/description/
* algorithms
* Medium (49.34%)
* Likes:    26
* Dislikes: -
* Testcase Example:  '["BSTIterator","next","next","prev","next","hasNext","next","next","next","hasNext","hasPrev","prev","prev"]\n' +
'[[[7,3,15,null,null,9,20]],[null],[null],[null],[null],[null],[null],[null],[null],[null],[null],[null],[null]]'
实现二叉搜索树（BST）的中序遍历迭代器 BSTIterator 类：
BSTIterator(TreeNode root) 初始化 BSTIterator 类的实例。二叉搜索树的根节点 root 作为构造函数的参数传入。内部指针使用一个不存在于树中且小于树中任意值的数值来初始化。
boolean hasNext() 如果当前指针在中序遍历序列中，存在右侧数值，返回 true ，否则返回 false 。
int next() 将指针在中序遍历序列中向右移动，然后返回移动后指针所指数值。
boolean hasPrev() 如果当前指针在中序遍历序列中，存在左侧数值，返回 true ，否则返回 false 。
int prev() 将指针在中序遍历序列中向左移动，然后返回移动后指针所指数值。
注意，虽然我们使用树中不存在的最小值来初始化内部指针，第一次调用 next() 需要返回二叉搜索树中最小的元素。
你可以假设 next() 和 prev() 的调用总是有效的。即，当 next()/prev() 被调用的时候，在中序遍历序列中一定存在下一个/上一个元素。
进阶：你可以不提前遍历树中的值来解决问题吗？

示例 1:
输入
["BSTIterator", "next", "next", "prev", "next", "hasNext", "next", "next", "next", "hasNext", "hasPrev", "prev", "prev"]
[[[7, 3, 15, null, null, 9, 20]], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null], [null]]
输出
[null, 3, 7, 3, 7, true, 9, 15, 20, false, true, 15, 9]
解释
// 划线的元素表示指针当前的位置。
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]); // 当前状态为   [3, 7, 9, 15, 20]
bSTIterator.next(); // 状态变为 [3, 7, 9, 15, 20], 返回 3
bSTIterator.next(); // 状态变为 [3, 7, 9, 15, 20], 返回 7
bSTIterator.prev(); // 状态变为 [3, 7, 9, 15, 20], 返回 3
bSTIterator.next(); // 状态变为 [3, 7, 9, 15, 20], 返回 7
bSTIterator.hasNext(); // 返回 true
bSTIterator.next(); // 状态变为 [3, 7, 9, 15, 20], 返回 9
bSTIterator.next(); // 状态变为 [3, 7, 9, 15, 20], 返回 15
bSTIterator.next(); // 状态变为 [3, 7, 9, 15, 20], 返回 20
bSTIterator.hasNext(); // 返回 false
bSTIterator.hasPrev(); // 返回 true
bSTIterator.prev(); // 状态变为 [3, 7, 9, 15, 20], 返回 15
bSTIterator.prev(); // 状态变为 [3, 7, 9, 15, 20], 返回 9

提示:
树中节点个数的范围是 [1, 105] 。
0 <= Node.val <= 106
最多调用 105 次 hasNext、 next、 hasPrev 和 prev 。
Hint 1: The inorder traversal of a BST gives us the elements in a sorted order.
Hint 2: We can use a stack to simulate the inorder traversal of the BST.
Hint 3: We can use another stack as a buffer to store numbers returned from calls to next and use this buffer whenever prev is called.

```

## Solution

[SourceCode](./solution.js)

## Translation

BST iterator supporting next/prev/hasNext/hasPrev over the inorder sequence; internal pointer starts before the smallest value.

## Approach

**惰性栈 + 已产出缓冲**。栈做中序遍历生成器(next 时逐段压右子树左链,不提前遍历);arr 存所有已产出值,idx 为当前指针——next 时 idx+1 若落在 arr 内直接复用(prev 后回退的场景),否则弹栈产出;prev 使 idx−1 返回 arr[idx]。均摊 O(1)。
