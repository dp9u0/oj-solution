# 662. Maximum Width of Binary Tree

## Descriotion

Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

## Example

### Example 1

```shell
Input:

           1
         /   \
        3     2
       / \     \  
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
```

### Example 2

```shell
Input:

          1
         /  
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
```

### Example 3

```shell
Input:

          1
         / \
        3   2
       /
      5

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
```

### Example 4

```shell
Input:

          1
         / \
        3   2
       /     \  
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
```

## Solution

通过深度优先遍历所有节点,每一个深度最左边的节点位置,然后计算每个节点与最左边节点的差值,即为当前宽度,然后更新最优值即可.

[SourceCode](./solution.js)