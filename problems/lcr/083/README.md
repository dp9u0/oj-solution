# [LCR 083] 全排列

## Description


```md
https://leetcode.cn/problems/VvJkup/description/
* algorithms
* Medium (82.61%)
* Likes:    91
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给定一个不含重复数字的整数数组 nums ，返回其 所有可能的全排列 。可以 按任意顺序 返回答案。

示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：
输入：nums = [1]
输出：[[1]]

提示：
1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

注意：本题与主站 46 题相同：https://leetcode.cn/problems/permutations/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer array `nums` with **no duplicates**, return all the possible permutations. You may return the answer in **any order**.

**Example 1:**
> Input: `nums = [1,2,3]`
> Output: `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`

**Example 2:**
> Input: `nums = [0,1]`
> Output: `[[0,1],[1,0]]`

**Example 3:**
> Input: `nums = [1]`
> Output: `[[1]]`

**Constraints:**
- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All integers in `nums` are unique.

Note: This problem is the same as LeetCode 46 on the main site.

---

## Approach

Classic **backtracking** over index positions:

- Maintain a partial permutation `path`. At each step pick an element not yet used (tracked via a `used` boolean array), append it to `path`, recurse, then undo (backtrack).
- When `path.length === nums.length`, a full permutation is formed — push a copy into the results.

Since all elements are unique, no deduplication is needed.

Complexity: `O(n!)` permutations × `O(n)` to build each, `O(n)` space for recursion depth + `used`.
