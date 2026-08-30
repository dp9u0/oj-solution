# [3630] Partition Array for Maximum XOR and AND

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-array-for-maximum-xor-and-and/description/)

* algorithms
* Hard (17.75%)
* Likes:    34
* Dislikes: 9
* Testcase Example:  '[2,3]'

```md
You are given an integer array nums.
Partition the array into three (possibly empty) subsequences A, B, and C such that every element of nums belongs to exactly one subsequence.
Your goal is to maximize the value of: XOR(A) + AND(B) + XOR(C)
where:
XOR(arr) denotes the bitwise XOR of all elements in arr. If arr is empty, its value is defined as 0.
AND(arr) denotes the bitwise AND of all elements in arr. If arr is empty, its value is defined as 0.
Return the maximum value achievable.
Note: If multiple partitions result in the same maximum sum, you can consider any one of them.

Example 1:
Input: nums = [2,3]
Output: 5
Explanation:
One optimal partition is:
A = [3], XOR(A) = 3
B = [2], AND(B) = 2
C = [], XOR(C) = 0
The maximum value of: XOR(A) + AND(B) + XOR(C) = 3 + 2 + 0 = 5. Thus, the answer is 5.
Example 2:
Input: nums = [1,3,2]
Output: 6
Explanation:
One optimal partition is:
A = [1], XOR(A) = 1
B = [2], AND(B) = 2
C = [3], XOR(C) = 3
The maximum value of: XOR(A) + AND(B) + XOR(C) = 1 + 2 + 3 = 6. Thus, the answer is 6.
Example 3:
Input: nums = [2,3,6,7]
Output: 15
Explanation:
One optimal partition is:
A = [7], XOR(A) = 7
B = [2,3], AND(B) = 2
C = [6], XOR(C) = 6
The maximum value of: XOR(A) + AND(B) + XOR(C) = 7 + 2 + 6 = 15. Thus, the answer is 15.

Constraints:
1 <= nums.length <= 19
1 <= nums[i] <= 109
Hint 1: Brute-force all subsets for B.
Hint 2: Let s = XOR of all elements not in B.
Hint 3: We want to choose a value x (a subset‐XOR of the "remaining" elements) to maximize x + (s XOR x).
Hint 4: Observe that x + (s XOR x) = s + 2 * (x AND ~s).
Hint 5: To do this efficiently, build a linear XOR basis over the values nums[j] & ~s for each index j not in B.
Hint 6: Finally, greedily extract the maximum x from that basis.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个整数数组 `nums`。

将数组划分成三个（可以为空的）子序列 A、B、C，使 `nums` 的每个元素恰好属于其中一个子序列。

目标是最大化：`XOR(A) + AND(B) + XOR(C)`，其中：

- `XOR(arr)` 表示数组所有元素的按位异或，数组为空时定义为 0。
- `AND(arr)` 表示数组所有元素的按位与，数组为空时定义为 0。

返回能取得的最大值。

注意：若多个划分取得相同的最大值，任取其一即可。

示例 1：输入 `[2,3]`，输出 `5`（A=[3], B=[2], C=[]，即 3+2+0）。
示例 2：输入 `[1,3,2]`，输出 `6`（A=[1], B=[2], C=[3]，即 1+2+3）。
示例 3：输入 `[2,3,6,7]`，输出 `15`（A=[7], B=[2,3], C=[6]，即 7+2+6）。

约束：`1 <= nums.length <= 19`，`1 <= nums[i] <= 10^9`。

## 解题思路

n ≤ 19，可以枚举 B 的全部 2^n 个子集。

固定 B 后，设剩余元素集合为 R，`s = XOR(R)`。A、C 划分 R：设 `x = XOR(A)`（可取 span(R) 中任意值），则 `XOR(C) = s ^ x`，于是

- `x + (s ^ x) = s + 2 * (x & ~s)`（按位分拆可证，无进位）。

关键性质：`(XOR_{j∈S} nums[j]) & ~s = XOR_{j∈S} (nums[j] & ~s)`（s 为 1 的位两边都被抹成 0，其余位逐位异或相同）。因此可取得的 `x & ~s` 恰是 `{nums[j] & ~s : j ∈ R}` 的线性基张成空间。

算法：对每个 B 子集，预处理 `AND(B)` 与 `s`（用低位 DP 预计算 and[]/xor[]），对 R 中元素建异或线性基（值为 `nums[j] & ~s`），贪心取出最大 x，候选答案为 `AND(B) + s + 2x`。

复杂度：O(2^n · n · 30)，n=19 时约 10^8 基本操作，实测 78ms。

