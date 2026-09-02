# [LCR 084] 全排列 II

## Description


```md
https://leetcode.cn/problems/7p8L0Z/description/
* algorithms
* Medium (68.35%)
* Likes:    76
* Dislikes: -
* Testcase Example:  '[1,1,2]'
给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。

示例 1：
输入：nums = [1,1,2]
输出：
[[1,1,2],
[1,2,1],
[2,1,1]]
示例 2：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

提示：
1 <= nums.length <= 8
-10 <= nums[i] <= 10

注意：本题与主站 47 题相同： https://leetcode.cn/problems/permutations-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a collection `nums` that may contain duplicates, return all possible unique permutations (any order).

**Example:** `[1,1,2]` → `[[1,1,2],[1,2,1],[2,1,1]]`

**Constraints:** length ≤ 8. Note: same as LeetCode 47.

---

## Approach

Backtracking with a `used[]` array. Sort first so duplicates are adjacent; when choosing at a position, skip `nums[i]` if `i>0 && nums[i]===nums[i-1] && !used[i-1]` (only the first of a duplicate run may be newly chosen), guaranteeing each multiset-permutation appears once.

Complexity: `O(n!)` distinct outputs.
