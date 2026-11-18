# [536] 从字符串生成二叉树

## Description


```md
https://leetcode.cn/problems/construct-binary-tree-from-string/description/
* algorithms
* Medium (56.70%)
* Likes:    127
* Dislikes: -
* Testcase Example:  '"4(2(3)(1))(6(5))"'
你需要用一个包括括号和整数的字符串构建一棵二叉树。
输入的字符串代表一棵二叉树。它包括整数和随后的 0 、1 或 2 对括号。整数代表根的值，一对括号内表示同样结构的子树。
若存在子结点，则从左子结点开始构建。

示例 1:
输入： s = "4(2(3)(1))(6(5))"
输出： [4,2,6,3,1,5]
示例 2:
输入： s = "4(2(3)(1))(6(5)(7))"
输出： [4,2,6,3,1,5,7]
示例 3:
输入： s = "-4(2(3)(1))(6(5)(7))"
输出： [-4,2,6,3,1,5,7]

提示：
0 <= s.length <= 3 * 104
输入字符串中只包含 '(', ')', '-' 和 '0' ~ '9'
树中所有数字的值 最多 不超过 230。

```

## Solution

[SourceCode](./solution.js)

## Translation

Build a binary tree from a string of the form `num(left-subtree)(right-subtree)` where each subtree recursively has the same form (0, 1, or 2 bracket pairs after the integer; left child comes first; numbers may be negative).

- Example 1: "4(2(3)(1))(6(5))" → [4,2,6,3,1,5]
- Example 3: "-4(2(3)(1))(6(5)(7))" → [-4,2,6,3,1,5,7]

Constraints: length ≤ 3·10^4; values up to 2^30.

## Approach

**递归下降 + 全局下标**。`parseNum` 读可选负号和连续数字;`build` 先解析数字建节点,若遇 '(' 递归建左子树,再遇 '(' 递归建右子树,每个子树调用消费掉配对的括号。空串返回 null。一次线性扫描 O(n)。
