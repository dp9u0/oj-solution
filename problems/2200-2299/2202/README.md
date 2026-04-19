# [2202] Maximize the Topmost Element After K Moves

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/description/)

* algorithms
* Medium (24.08%)
* Likes:    652
* Dislikes: 336
* Testcase Example:  '[5,2,2,4,0,6]\n4'

```md
You are given a 0-indexed integer array nums representing the contents of a pile, where nums[0] is the topmost element of the pile.
In one move, you can perform either of the following:

If the pile is not empty, remove the topmost element of the pile.
If there are one or more removed elements, add any one of them back onto the pile. This element becomes the new topmost element.

You are also given an integer k, which denotes the total number of moves to be made.
Return the maximum value of the topmost element of the pile possible after exactly k moves. In case it is not possible to obtain a non-empty pile after k moves, return -1.

Example 1:

Input: nums = [5,2,2,4,0,6], k = 4
Output: 5
Explanation:
One of the ways we can end with 5 at the top of the pile after 4 moves is as follows:
- Step 1: Remove the topmost element = 5. The pile becomes [2,2,4,0,6].
- Step 2: Remove the topmost element = 2. The pile becomes [2,4,0,6].
- Step 3: Remove the topmost element = 2. The pile becomes [4,0,6].
- Step 4: Add 5 back onto the pile. The pile becomes [5,4,0,6].
Note that this is not the only way to end with 5 at the top of the pile. It can be shown that 5 is the largest answer possible after 4 moves.

Example 2:

Input: nums = [2], k = 1
Output: -1
Explanation:
In the first move, our only option is to pop the topmost element of the pile.
Since it is not possible to obtain a non-empty pile after one move, we return -1.


Constraints:

1 <= nums.length <= 105
0 <= nums[i], k <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个表示堆的数组 nums（nums[0] 是栈顶），每次操作可以：移除栈顶元素，或将之前移除的某个元素放回栈顶。进行恰好 k 次操作后，求栈顶元素的最大值。若无法得到非空堆则返回 -1。

## 解题思路

**分类讨论**

k 次操作后，栈顶元素只有两种来源：
1. 从未移除的元素：恰好移除 k 个后，栈顶是 nums[k]（需 k < n）
2. 移除后放回的元素：移除 k-1 个后放回最大的那个，候选是 nums[0..min(k-2, n-1)] 的最大值（需 k >= 2）

特殊情况：n = 1 时，只能反复移除和放回唯一的元素。k 为偶数可放回，k 为奇数堆为空。

取两种来源的最大值即可。
