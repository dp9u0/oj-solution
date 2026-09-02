# [LCR 048] 二叉树的序列化与反序列化

## Description


```md
https://leetcode.cn/problems/h54YBf/description/
* algorithms
* Hard (66.96%)
* Likes:    91
* Dislikes: -
* Testcase Example:  '[1,2,3,null,null,4,5]'
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

示例 1：
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
示例 2：
输入：root = []
输出：[]
示例 3：
输入：root = [1]
输出：[1]
示例 4：
输入：root = [1,2]
输出：[1,2]

提示：
输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，也可以采用其他的方法解决这个问题。
树中结点数在范围 [0, 104] 内
-1000 <= Node.val <= 1000

注意：本题与主站 297 题相同：https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Serialization converts a data structure/object into a bit sequence storable in file/memory or transmissible over a network; the reverse reconstructs the original data. Design an algorithm to **serialize** and **deserialize** a binary tree (any valid format). Input/output follow LeetCode's level-order format but any method is acceptable.

**Examples:** `[1,2,3,null,null,4,5]` round-trips; `[]` ↔ empty; `[1]`; `[1,2]`.

**Constraints:** nodes ≤ 10^4, values ±1000. Note: same as LeetCode 297 (identical to LCR 156).

---

## Approach

**Preorder with `null` markers**: serialize via preorder DFS writing values (or `null` for absent children) comma-separated. Deserialize by splitting tokens and rebuilding recursively with an index pointer; `null` yields a missing child.

Complexity: `O(n)` time/space.
