# [1261] Find Elements in a Contaminated Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/description/)

* algorithms
* Medium (84.09%)
* Likes:    1433
* Dislikes: 127
* Testcase Example:  '["FindElements","find","find"]\n[[[-1,null,-1]],[1],[2]]'

```md
Given a binary tree with the following rules:

root.val == 0
For any treeNode:

If treeNode.val has a value x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val has a value x and treeNode.right != null, then treeNode.right.val == 2 * x + 2



Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.
Implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
bool find(int target) Returns true if the target value exists in the recovered binary tree.


Example 1:


Input
['FindElements','find','find']
[[[-1,null,-1]],[1],[2]]
Output
[null,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1]);
findElements.find(1); // return False
findElements.find(2); // return True
Example 2:


Input
['FindElements','find','find','find']
[[[-1,-1,-1,-1,-1]],[1],[3],[5]]
Output
[null,true,true,false]
Explanation
FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
findElements.find(1); // return True
findElements.find(3); // return True
findElements.find(5); // return False
Example 3:


Input
['FindElements','find','find','find','find']
[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
Output
[null,true,false,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
findElements.find(2); // return True
findElements.find(3); // return False
findElements.find(4); // return False
findElements.find(5); // return True


Constraints:

TreeNode.val == -1
The height of the binary tree is less than or equal to 20
The total number of nodes is between [1, 104]
Total calls of find() is between [1, 104]
0 <= target <= 106


```

## 中文翻译

给定一棵被污染的二叉树（所有节点值为 -1），恢复规则为：root.val = 0，左子节点 = 2*x+1，右子节点 = 2*x+2。实现 FindElements 类，支持 find(target) 查询目标值是否存在。

## 解题思路

DFS/BFS 恢复树节点值，用 Set 存储所有值，find 直接查 Set。

时间复杂度：构造 O(n)，find O(1)

## Solution

[SourceCode](./solution.js)
