# [LCR 156] 序列化与反序列化二叉树

## Description


```md
https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/description/
* algorithms
* Hard (57.44%)
* Likes:    446
* Dislikes: -
* Testcase Example:  '[1,2,3,null,null,4,5]'
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

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
树中结点数在范围 [0, 104] 内
-1000 <= Node.val <= 1000
注意：本题与主站 297 题相同：https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Serialization is the process of converting a data structure or object into a sequence of bits, so that the result can be stored in a file or memory, and also transmitted over a network to another computer environment, then reconstructed via the reverse operation.

Design an algorithm to **serialize** and **deserialize** a binary tree. Your serialization/deserialization algorithm logic is not constrained — you only need to guarantee that a binary tree can be serialized to a string and that this string deserializes back to the original tree structure.

**Note:** The input/output format matches what LeetCode currently uses. You are not required to use it; other methods are fine too.

**Example 1:** Input `root = [1,2,3,null,null,4,5]` → Output `[1,2,3,null,null,4,5]`
**Example 2:** Input `root = []` → Output `[]`
**Example 3:** Input `root = [1]` → Output `[1]`
**Example 4:** Input `root = [1,2]` → Output `[1,2]`

**Constraints:**
- Node count in `[0, 10^4]`
- `-1000 <= Node.val <= 1000`

Note: This problem is the same as LeetCode 297.

---

## Approach

Use **preorder traversal with `null` markers**:

- **serialize(root):** do a preorder DFS. Emit `node.val` for a real node, emit `null` for a missing child. Join values with `,` (e.g. `"1,2,null,null,3,4,null,null,5,null,null"`). A `null` root yields the empty string.
- **deserialize(data):** split the string on `,` into tokens and walk them with an index pointer, reconstructing nodes recursively in the same preorder order: read a token — if `null`, return `null`; otherwise create a node, then rebuild `left` and `right` from the next tokens.

This is a bijection: the markers make the preorder sequence unambiguous.

Complexity: `O(n)` time and `O(n)` space (serialized length is linear in node count).
