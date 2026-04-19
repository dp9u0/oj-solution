# [519] Random Flip Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/random-flip-matrix/description/)

* algorithms
* Medium (45.63%)
* Likes:    461
* Dislikes: 135
* Testcase Example:  '["Solution","flip","flip","flip","reset","flip"]\n[[3,1],[],[],[],[],[]]'

```md
There is an m x n binary grid matrix with all the values set 0 initially. Design an algorithm to randomly pick an index (i, j) where matrix[i][j] == 0 and flips it to 1. All the indices (i, j) where matrix[i][j] == 0 should be equally likely to be returned.
Optimize your algorithm to minimize the number of calls made to the built-in random function of your language and optimize the time and space complexity.
Implement the Solution class:

Solution(int m, int n) Initializes the object with the size of the binary matrix m and n.
int[] flip() Returns a random index [i, j] of the matrix where matrix[i][j] == 0 and flips it to 1.
void reset() Resets all the values of the matrix to be 0.


Example 1:

Input
['Solution', 'flip', 'flip', 'flip', 'reset', 'flip']
[[3, 1], [], [], [], [], []]
Output
[null, [1, 0], [2, 0], [0, 0], null, [2, 0]]
Explanation
Solution solution = new Solution(3, 1);
solution.flip();  // return [1, 0], [0,0], [1,0], and [2,0] should be equally likely to be returned.
solution.flip();  // return [2, 0], Since [1,0] was returned, [2,0] and [0,0]
solution.flip();  // return [0, 0], Based on the previously returned indices, only [0,0] can be returned.
solution.reset(); // All the values are reset to 0 and can be returned.
solution.flip();  // return [2, 0], [0,0], [1,0], and [2,0] should be equally likely to be returned.


Constraints:

1 <= m, n <= 104
There will be at least one free cell for each call to flip.
At most 1000 calls will be made to flip and reset.


```

## 翻译

设计一个 m x n 的二进制矩阵，初始全为 0。实现 flip() 随机选取一个值为 0 的位置翻转为 1（等概率），reset() 将所有值重置为 0。要求最小化随机函数调用次数，优化时空复杂度。

## 解题思路

Fisher-Yates 洗牌虚拟数组。用 Map 记录已交换的位置，维护一个虚拟的剩余可用索引范围 [0, size-1]。每次 flip 随机选取该范围内一个索引，通过 Map 映射到实际位置，然后与末尾交换（缩小范围）。reset 只需清空 Map 并恢复 size。每个 flip 仅 O(1) 时间，空间 O(已翻转数)。

## Solution

[SourceCode](./solution.js)
