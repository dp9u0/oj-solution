# [3649] Number of Perfect Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-perfect-pairs/description/)

* algorithms
* Medium (33.80%)
* Likes:    101
* Dislikes: 11
* Testcase Example:  '[0,1,2,3]'

```md
You are given an integer array nums.
A pair of indices (i, j) is called perfect if the following conditions are satisfied:

i < j
Let a = nums[i], b = nums[j]. Then:

min(
a - b
,
a + b
) <= min(
a
,
b
)
max(
a - b
,
a + b
) >= max(
a
,
b
)



Return the number of distinct perfect pairs.
Note: The absolute value
x
refers to the non-negative value of x.

Example 1:

Input: nums = [0,1,2,3]
Output: 2
Explanation:
There are 2 perfect pairs:



(i, j)
(a, b)
min(
a &minus; b
,
a + b
)
min(
a
,
b
)
max(
a &minus; b
,
a + b
)
max(
a
,
b
)




(1, 2)
(1, 2)
min(
1 &minus; 2
,
1 + 2
) = 1
1
max(
1 &minus; 2
,
1 + 2
) = 3
2


(2, 3)
(2, 3)
min(
2 &minus; 3
,
2 + 3
) = 1
2
max(
2 &minus; 3
,
2 + 3
) = 5
3




Example 2:

Input: nums = [-3,2,-1,4]
Output: 4
Explanation:
There are 4 perfect pairs:



(i, j)
(a, b)
min(
a &minus; b
,
a + b
)
min(
a
,
b
)
max(
a &minus; b
,
a + b
)
max(
a
,
b
)




(0, 1)
(-3, 2)
min(
-3 - 2
,
-3 + 2
) = 1
2
max(
-3 - 2
,
-3 + 2
) = 5
3


(0, 3)
(-3, 4)
min(
-3 - 4
,
-3 + 4
) = 1
3
max(
-3 - 4
,
-3 + 4
) = 7
4


(1, 2)
(2, -1)
min(
2 - (-1)
,
2 + (-1)
) = 1
1
max(
2 - (-1)
,
2 + (-1)
) = 3
2


(1, 3)
(2, 4)
min(
2 - 4
,
2 + 4
) = 2
2
max(
2 - 4
,
2 + 4
) = 6
4




Example 3:

Input: nums = [1,10,100,1000]
Output: 0
Explanation:
There are no perfect pairs. Thus, the answer is 0.


Constraints:

2 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## 题目翻译

给定一个整数数组 nums。一对下标 (i, j) 被称为完美对，如果满足以下条件：
- i < j
- 令 a = nums[i], b = nums[j]，则 min(|a - b|, |a + b|) <= min(|a|, |b|) 且 max(|a - b|, |a + b|) >= max(|a|, |b|)

返回不同完美对的数量。

## 解题思路

**排序 + 双指针**：分析条件可知，无论 a, b 同号还是异号，两个条件等价于 `max(|a|, |b|) <= 2 * min(|a|, |b|)`。取绝对值排序后，用双指针统计满足条件的对数。

- 时间复杂度：O(n log n)
- 空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
