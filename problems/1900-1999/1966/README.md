# [1966] 未排序数组中的可被二分查找的数

## Description


```md
https://leetcode.cn/problems/binary-searchable-numbers-in-an-unsorted-array/description/
* algorithms
* Medium (56.90%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '[7]'
有一个 类似 二分查找 的方法。 这个方法有两个入参: sequence 是一个整数数组， target 是一个整数。 这个方法可以判断 target 是否存在 sequence中。
该方法的伪代码如下：
func(sequence, target)
while sequence is not empty
randomly choose an element from sequence as the pivot
if pivot = target, return true
else if pivot < target, remove pivot and all elements to its left from the sequence
else, remove pivot and all elements to its right from the sequence
end while
return false
当 sequence 是排好序时, 这个方法对 所有 值都可正常判断。如果 sequence 不是排好序的, 该方法并不是对所有值都可正常判断, 但对一些 值仍可正常判断。
给定一个仅包含不同数字的数组 nums表示 sequence， nums是否排序未知，对于 所有可能的选择, 返回通过这个方法保证能找到的值的数量。

示例 1:
输入: nums = [7]
输出: 1
解释:
7 保证能被找到.
因为数组中只有一个数字, 7 一定会被选中. 因为选中的值等于target, 这个方法会返回 true.
示例 2:
输入: nums = [-1,5,2]
输出: 1
解释:
只有 -1 保证能被找到.
如果 -1 被选中, 这个方法就会返回 true.
如果 5 被选中, 5 和 2 会被移除。 在下一次循环时, 这个序列只有一个元素： -1 ，这个方法就会返回 true.
如果 2 被选中, 2 将会被移除。 在下次循环时, 这个序列里将会有 -1 和 5. 无论哪个数字被选中, 这个方法都会找到 -1 且返回 true.
5 不能保证被找到。
如果 2 被选中, -1, 5 和 2 将会被移除。 这个序列将会被清空且这个方法会返回 false。
2 不能保证被找到.
如果 5 被选中, 5 和 2 将会被移除。在下次循环时, 这个序列只会有一个元素： -1 且这个方法会返回 false。
因为只有-1 是保证能被找到的, 你应该返回 1.

提示:
1 <= nums.length <= 105
-105 <= nums[i] <= 105
nums 中所有值都 不同.

提升: 如果 nums 存在 重复的值, 你会如何修改你的算法吗?
Hint 1: The target will not be found if it is removed from the sequence. When does this occur?
Hint 2: If a pivot is to the left of and is greater than the target, then the target will be removed. The same occurs when the pivot is to the right of and is less than the target.
Hint 3: Since any element can be chosen as the pivot, for any target NOT to be removed, the condition described in the previous hint must never occur.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Consider a binary-search-like method with two inputs: `sequence` (an integer array) and `target`. Pseudocode: while the sequence is not empty, randomly choose a pivot; if pivot == target return true; if pivot < target, remove the pivot and everything to its left; otherwise remove the pivot and everything to its right. Return false when the sequence empties.

Given `nums` (all values distinct, order unknown), return the count of values that are guaranteed to be found regardless of pivot choices.

Example 1:
Input: nums = [7]
Output: 1

Example 2:
Input: nums = [-1,5,2]
Output: 1

Constraints: 1 <= nums.length <= 10^5, -10^5 <= nums[i] <= 10^5, all values distinct.

## Approach

A target at index i is lost as soon as some chosen pivot left of i is greater than it (that pivot's removal wipes out i), or some pivot right of i is smaller than it. Since every pivot sequence must succeed, nums[i] is guaranteed findable iff every element to its left is smaller AND every element to its right is larger — i.e., nums[i] is both a prefix maximum and a suffix minimum.

Scan with a running prefix max and a precomputed suffix min; count positions satisfying both.

Time O(n), space O(n).
