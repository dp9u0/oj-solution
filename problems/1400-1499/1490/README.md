# [1490] 克隆 N 叉树

## Description


```md
https://leetcode.cn/problems/clone-n-ary-tree/description/
* algorithms
* Medium (81.57%)
* Likes:    23
* Dislikes: -
* Testcase Example:  '[1,null,3,2,4,null,5,6]'
给定一棵 N 叉树的根节点 root ，返回该树的深拷贝（克隆）。
N 叉树的每个节点都包含一个值（ int ）和子节点的列表（ List[Node] ）。
class Node {
public int val;
public List children;
}
N 叉树的输入序列用层序遍历表示，每组子节点用 null 分隔（见示例）。

示例 1：
输入：root = [1,null,3,2,4,null,5,6]
输出：[1,null,3,2,4,null,5,6]
示例 2：
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]

提示：
给定的 N 叉树的深度小于或等于 1000。
节点的总个数在 [0, 104] 之间

进阶：你的解决方案可以适用于克隆图问题吗？
Hint 1: Traverse the tree, keep a hashtable with you and create a clone node for each node in the tree.
Hint 2: Start traversing the original tree again and connect each child pointer in the cloned tree the same way as the original tree with the help of the hashtable.

```

## Solution

[SourceCode](./solution.js)

## Translation

Deep-copy an N-ary tree (val + children list).

## Approach

**DFS**。树无环,单遍递归:克隆节点后 children.map(cloneTree)。O(n),深度 ≤ 1000 栈安全。(进阶的图克隆才需要哈希表防环。)
