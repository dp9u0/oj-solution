# [LCR 120] 寻找文件副本

## Description


```md
https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/description/
* algorithms
* Easy (66.95%)
* Likes:    1260
* Dislikes: -
* Testcase Example:  '[2, 5, 3, 0, 5, 0]'
设备中存有 n 个文件，文件 id 记于数组 documents。若文件 id 相同，则定义为该文件存在副本。请返回任一存在副本的文件 id。

示例 1：
输入：documents = [2, 5, 3, 0, 5, 0]
输出：0 或 5

提示：
0 ≤ documents[i] ≤ n-1
2 <= n <= 100000

```

## Solution

[SourceCode](./solution.js)

### English Translation

A device stores n files, and the file IDs are stored in the array `documents`. Two files are considered duplicates if they share the same file ID. Return the ID of any file that has a duplicate.

Example 1:
Input: documents = [2, 5, 3, 0, 5, 0]
Output: 0 or 5

Constraints:
- 0 ≤ documents[i] ≤ n - 1
- 2 <= n <= 100000

### Approach

Since every value satisfies `0 ≤ documents[i] ≤ n - 1`, each number can be placed at its own index (i.e., `documents[i] === i`).

**In-place swap (index mapping)**:
- Iterate through the array with index `i`.
- While `documents[i] !== i`, look at the value `val = documents[i]`. If `documents[val] === val`, then `val` already sits at its correct slot — it is a duplicate, return it. Otherwise swap `documents[i]` with `documents[val]` to place `val` into its slot.
- Time: O(n), each element is swapped at most a constant number of times. Space: O(1).
