# [2459] 通过移动项目到空白区域来排序数组

## Description


```md
https://leetcode.cn/problems/sort-array-by-moving-items-to-empty-space/description/
* algorithms
* Hard (48.16%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[4,2,0,3,1]'
给定一个大小为 n 的整数数组 nums，其中包含从 0 到 n - 1 (包含边界) 的 每个 元素。从 1 到 n - 1 的每一个元素都代表一项目，元素 0 代表一个空白区域。
在一个操作中，您可以将 任何 项目移动到空白区域。如果所有项目的编号都是 升序 的，并且空格在数组的开头或结尾，则认为 nums 已排序。
例如，如果 n = 4，则 nums 按以下条件排序:
nums = [0,1,2,3] 或
nums = [1,2,3,0]
...否则被认为是无序的。
返回排序 nums 所需的最小操作数。

示例 1:
输入: nums = [4,2,0,3,1]
输出: 3
解释:
- 将项目 2 移动到空白区域。现在，nums =[4,0,2,3,1]。
- 将项目 1 移动到空白区域。现在，nums =[4,1,2,3,0]。
- 将项目 4 移动到空白区域。现在，nums =[0,1,2,3,4]。
可以证明，3 是所需的最小操作数。
示例 2:
输入: nums = [1,2,3,4,0]
输出: 0
解释: nums 已经排序了，所以返回 0。
示例 3:
输入: nums = [1,0,2,4,3]
输出: 2
解释:
- 将项目 2 移动到空白区域。现在，nums =[1,2,0,4,3]。
- 将项目 3 移动到空白区域。现在，nums =[1,2,3,4,0]。
可以证明，2 是所需的最小操作数。

提示:
n == nums.length
2 <= n <= 105
0 <= nums[i] < n
nums 的所有值都是 唯一 的。
Hint 1: There are two possibilities for nums to be sorted. Find the minimum number of operations needed for the first possibility, then find the minimum number of operations needed for the second possibility. The answer is the minimum out of the two.
Hint 2: If the empty space is not at its ending position, then you can move the item that should be where the empty space is to the empty space.
Hint 3: If the empty space is at its ending position, then you need to move an out-of-place item to the empty space.

```

## Solution

[SourceCode](./solution.js)

## English Translation

nums is a permutation of 0..n-1; 0 is the empty slot; a move puts any item into the empty slot. Sorted means items in ascending order with the empty slot at the start OR the end. Return minimum moves.

Example 1:
Input: nums = [4,2,0,3,1]
Output: 3

Example 2:
Input: nums = [1,2,3,4,0]
Output: 0

Example 3:
Input: nums = [1,0,2,4,3]
Output: 2

Constraints: 2 <= n <= 10^5.

## Approach

Permutation cycles, for each of the two targets (item i belongs at position i, or at position i-1 with 0 at the end). Map position p to targetPos(nums[p]), find cycles, and let blankPos be where item 0 sits. Cost = sum over non-blank cycles of length >= 2 of (len + 1), plus (blankCycleLen - 1) if that cycle has length >= 2. Answer = min over the two targets. O(n).
