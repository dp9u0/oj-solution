# [LCR 070] 有序数组中的单一元素

## Description


```md
https://leetcode.cn/problems/skFtm2/description/
* algorithms
* Medium (60.95%)
* Likes:    85
* Dislikes: -
* Testcase Example:  '[1,1,2,3,3,4,4,8,8]'
给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。

示例 1：
输入: nums = [1,1,2,3,3,4,4,8,8]
输出: 2
示例 2：
输入: nums =  [3,3,7,7,10,11,11]
输出: 10


提示：
1 <= nums.length <= 105
0 <= nums[i] <= 105

进阶：采用的方案可以在 O(log n) 时间复杂度和 O(1) 空间复杂度中运行吗？

注意：本题与主站 540 题相同：https://leetcode.cn/problems/single-element-in-a-sorted-array/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a sorted array `nums` where every element appears **twice** except one that appears once, find that single element.

**Example 1:** `[1,1,2,3,3,4,4,8,8]` → `2`
**Example 2:** `[3,3,7,7,10,11,11]` → `10`

**Constraints:** length ≤ 10^5. Follow-up: O(log n) time, O(1) space.

Note: same as LeetCode 540.

---

## Approach

The single element occupies an **even** index (before it all elements are paired). Binary search using parity:

- Let `lo=0, hi=n-1`. For `mid`, if `nums[mid] === nums[mid ^ 1]` (the pair is intact around mid), the single is to the **right** → `lo = mid + 1`; otherwise → `hi = mid`.

`mid ^ 1` pairs index with its neighbor of opposite parity.

Complexity: `O(log n)`.
