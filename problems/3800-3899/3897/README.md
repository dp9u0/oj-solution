# [3897] Maximum Value of Concatenated Binary Segments

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-value-of-concatenated-binary-segments/description/)

* algorithms
* Hard (26.66%)
* Likes:    71
* Dislikes: 3
* Testcase Example:  '[1,2]\n[1,0]'

```md
You are given two integer arrays nums1 and nums0, each of size n.
nums1[i] represents the number of '1's in the ith segment.
nums0[i] represents the number of '0's in the ith segment.
For each index i, construct a binary segment consisting of:
nums1[i] occurrences of '1' followed by
nums0[i] occurrences of '0'.
You may rearrange the order of these segments in any way. After rearranging, concatenate all segments to form a single binary string.
Return the maximum possible integer value of the concatenated binary string.
Since the result can be very large, return the answer modulo 109 + 7.

Example 1:
Input: nums1 = [1,2], nums0 = [1,0]
Output: 14
Explanation:
At index 0, nums1[0] = 1 and nums0[0] = 1, so the segment formed is "10".
At index 1, nums1[1] = 2 and nums0[1] = 0, so the segment formed is "11".
Reordering the segments as "11" followed by "10" produces the binary string "1110".
The binary number "1110" has value 14 which is the maximum possible value.
Example 2:
Input: nums1 = [3,1], nums0 = [0,3]
Output: 120
Explanation:
At index 0, nums1[0] = 3 and nums0[0] = 0, so the segment formed is "111".
At index 1, nums1[1] = 1 and nums0[1] = 3, so the segment formed is "1000".
Reordering the segments as "111" followed by "1000" produces the binary string "1111000".
The binary number "1111000" has value 120 which is the maximum possible value.

Constraints:
1
0
nums1[i] + nums0[i] > 0
The total sum of all elements in nums1 and nums0 does not exceed 2 * 105.
Hint 1: It is optimal for the segments with more leading ones to come first.
Hint 2: Sort the segments by the number of ones in their prefix (in descending order).
Hint 3: Start with segments that contain the most ones first.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你两个整数数组 `nums1` 和 `nums0`,长度均为 n。
- `nums1[i]` 表示第 i 段中 '1' 的个数
- `nums0[i]` 表示第 i 段中 '0' 的个数

对每个下标 i,构造一个二进制段:先 `nums1[i]` 个 '1',再跟 `nums0[i]` 个 '0'。
你可以任意重排这些段的顺序,重排后把所有段拼接成一个二进制字符串。
返回拼接后的二进制字符串可能的最大整数值。
由于结果可能很大,返回对 10^9 + 7 取模后的答案。

示例 1:
输入: nums1 = [1,2], nums0 = [1,0]
输出: 14
解释: 段 0 为 "10",段 1 为 "11"。按 "11"+"10" 排列得到 "1110" = 14,为最大值。

示例 2:
输入: nums1 = [3,1], nums0 = [0,3]
输出: 120
解释: 段 0 为 "111",段 1 为 "1000"。按 "111"+"1000" 排列得到 "1111000" = 120,为最大值。

约束:
- 1 <= n
- 0 <= nums1[i], nums0[i],且 nums1[i] + nums0[i] > 0
- nums1 与 nums0 所有元素总和不超过 2 * 10^5

## 解题思路

**贡献拆分 + 交换论证排序**

段 j = "1^a 0^b",若它后面还有 T 位(后续所有段的总长度),则该段的 1 对数值的贡献为:

    value_j = (2^a - 1) * 2^(b + T)

即 a 个 1 分别落在 2^(b+T) ... 2^(b+T+a-1) 这些位上。

**相邻交换论证**:比较相邻两段 A=(a1,b1) 与 B=(a2,b2)(设其后还有 T 位),两种顺序的贡献差(除去公因子 2^T)为:

    A前 - B前 = (2^a1-1)·2^b1·(2^b2-1) - (2^a2-1)·2^b2·(2^b1-1)

所以 A 在前当且仅当 key(A) >= key(B),其中:

    key(a, b) = (2^a - 1) * 2^b / (2^b - 1)

- b = 0(纯 1 段):key = +∞,必然放最前
- b >= 1 时:key ∈ [2^a - 1, 2^(a+1) - 2),不同 a 之间由 a 完全决定大小;a 相同时 b 越小 key 越大
- a = 0(纯 0 段):key = 0,放最后

因此最优排序规则(等价于按 key 降序):
1. 纯 1 段(b=0)放最前,内部顺序任意
2. 其余段按 a 降序,a 相同时 b 升序
3. 纯 0 段(a=0)放最后

**求值**:预处理 2 的幂(模 1e9+7)到总长度 L,从最后一段往前扫,维护后缀长度 suffix,累加 `(pow2[a]-1) * pow2[b] % MOD * pow2[suffix] % MOD`。

复杂度:O(n log n + L),L = Σ(a+b) ≤ 2*10^5。
