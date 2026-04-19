# [3757] Number of Effective Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-effective-subsequences/description/)

* algorithms
* Hard (31.06%)
* Likes:    30
* Dislikes: 2
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums.
The strength of the array is defined as the bitwise OR of all its elements.
A subsequence is considered effective if removing that subsequence strictly decreases the strength of the remaining elements.
Return the number of effective subsequences in nums. Since the answer may be large, return it modulo 109 + 7.
The bitwise OR of an empty array is 0.

Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation:

The Bitwise OR of the array is 1 OR 2 OR 3 = 3.
Subsequences that are effective are:

[1, 3]: The remaining element [2] has a Bitwise OR of 2.
[2, 3]: The remaining element [1] has a Bitwise OR of 1.
[1, 2, 3]: The remaining elements [] have a Bitwise OR of 0.


Thus, the total number of effective subsequences is 3.


Example 2:

Input: nums = [7,4,6]
Output: 4
Explanation:​​​​​​​

The Bitwise OR of the array is 7 OR 4 OR 6 = 7.
Subsequences that are effective are:

[7]: The remaining elements [4, 6] have a Bitwise OR of 6.
[7, 4]: The remaining element [6] has a Bitwise OR of 6.
[7, 6]: The remaining element [4] has a Bitwise OR of 4.
[7, 4, 6]: The remaining elements [] have a Bitwise OR of 0.


Thus, the total number of effective subsequences is 4.


Example 3:

Input: nums = [8,8]
Output: 1
Explanation:

The Bitwise OR of the array is 8 OR 8 = 8.
Only the subsequence [8, 8] is effective since removing it leaves [] which has a Bitwise OR of 0.
Thus, the total number of effective subsequences is 1.


Example 4:

Input: nums = [2,2,1]
Output: 5
Explanation:

The Bitwise OR of the array is 2 OR 2 OR 1 = 3.
Subsequences that are effective are:

[1]: The remaining elements [2, 2] have a Bitwise OR of 2.
[2, 1] (using nums[0], nums[2]): The remaining element [2] has a Bitwise OR of 2.
[2, 1] (using nums[1], nums[2]): The remaining element [2] has a Bitwise OR of 2.
[2, 2]: The remaining element [1] has a Bitwise OR of 1.
[2, 2, 1]: The remaining elements [] have a Bitwise OR of 0.


Thus, the total number of effective subsequences is 5.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106


```

## 题目翻译

给定数组nums，strength定义为所有元素的按位OR。有效子序列是指移除该子序列后，剩余元素的strength严格减小。返回有效子序列数量对10^9+7取模。

## 解题思路

令total = OR of all nums。有效子序列 = 移除后剩余OR < total。等价于：被移除的子序列S中，对于total的每个bit位，至少包含一个该位为1的元素。即S必须"覆盖"total的所有bit位。

但更准确地说：有效 = 剩余OR < total。剩余OR = total XOR (total中被移除元素"独占"的位)。

换一种思路：total有b个bit位为1。对每个bit位，统计有多少元素该位为1。如果某个bit位只有1个元素提供，则该元素必须被移除。

更好的思路：按bit位分析。对total的每个为1的bit位b，令count[b] = 该位为1的元素个数。一个子序列是有效的，当且仅当对于每个total中为1的bit位b，至少有一个该位为1的元素在子序列中。

但等一下，这不对。让我重新想：剩余OR < total意味着至少有一个total中的bit在剩余中变为0。所以有效子序列是"使得至少一个bit丢失的子序列"。

用容斥/位DP：对total的每个为1的bit子集S，计算"丢失恰好S中所有bit"的子序列数，然后求和。

实际上更简单：总子序列数 = 2^n - 1（非空）。无效子序列 = 移除后OR不变（仍等于total）。答案 = 总数 - 无效数。

无效子序列：对total的每个为1的bit，至少保留一个该bit为1的元素。按位独立：对bit b，有count[b]个元素可选，必须至少保留1个，其余可移除可保留。无效数 = product over all bits b of (2^count[b] - 1) * product over all non-contributing elements of 2。

让我重新计算：对每个bit位b（total中为1的），记count[b]为该位为1的元素数。记other为不贡献任何独有bit的元素...不对。

直接算：无效 = 剩余OR = total。对于剩余集合R，OR(R) = total，意味着对total中每个为1的bit，R中至少有一个该bit为1的元素。

所以无效的R的个数 = 对total中每个为1的bit b，从count[b]个元素中至少选1个，对所有bit取交集。用容斥原理。

或者换个角度：令mask = total。对每个元素，它贡献的bits = nums[i] & mask。R需要覆盖mask的所有bits。这是一个集合覆盖问题，用容斥：

答案 = 总有效子序列数 = sum over all S (subset of removed elements) where OR(remaining) < total。

用bit位容斥：total有m个为1的bit。OR(remaining) < total 等价于存在至少一个bit b使得remaining中没有任何元素该bit为1。

用容斥：ans = sum_{non-empty S subset of bits} (-1)^(|S|+1) * (number of subsequences whose removal covers all bits in S)。

对特定的bit集合S，"removal covers S"意味着被移除的子序列中，对S中每个bit至少有一个该bit为1的元素。剩余元素都不贡献S中的任何bit。

令 A = {i : nums[i] 对S有贡献}，B = 其余元素。则"removal covers S"的子序列 = 从A中选一个非空子集覆盖S中所有bit，B中元素随意。B的贡献 = 2^|B|。A的贡献需要容斥...

这变得复杂了。让我换个思路。

直接计算：对total的每个为1的bit位，独立考虑。令bit[i]表示nums[i] & total。

一个更简洁的方法：对每个bit b，令c[b] = 该位为1的元素个数，f[b] = 该位为0的元素个数。

无效移除（移除后OR仍=total）= 从每个bit b（total中为1的）中至少保留1个该位为1的元素。

用补集：对bit b，c[b]个元素全部被移除 = 这c[b]个元素都在子序列中。其余元素随意。所以"bit b丢失"的移除数 = 2^(n-c[b])（其余元素的任意子集） * 1（c[b]个全在）。

但多个bit同时丢失有重叠。用容斥：

丢失至少一个bit = sum_{S non-empty subset of bits} (-1)^(|S|+1) * prod_{b in S} (2^(n-c[b]) 和所有b的c[b]元素都在移除中的交集)。

对S中的所有bit，需要所有c[b]集合的并集中的元素全部被移除，其余随意。交集不太好算...

其实可以更简单：直接按bit逐位处理。令ans = 0。对total中每个为1的bit位b（共m个），枚举b被丢失的情况。

还是用DP/bitmask吧。total最多20个bit（nums[i] <= 10^6）。m个bit，用bitmask枚举所有子集太慢（2^20 = 1M，可行）。

实际上m <= 20，但n = 10^5。对每个bitmask S（S subset of bits_of_total），需要计算"恰好丢失S中所有bit"的子序列数。

"丢失S中所有bit"意味着：S中每个bit的所有贡献元素都必须被移除，其余元素随意。

令 must_remove(S) = {i : nums[i] & S > 0}（即对S中至少一个bit有贡献的元素集合）。这些元素全部被移除，其余元素随意（可移除可保留）。

但是"恰好丢失S"意味着不能丢失S以外的bit。即S的补集中（total中为1但S中为0的bit）不能丢失。

所以"恰好丢失S" = must_remove(S)全被移除 + must_remove(~S & total)不全被移除。

这还是很复杂。让我简化。

直接计算"至少丢失一个bit"：
- 对total中每个为1的bit b，令A[b] = {i : bit b set in nums[i]}。"bit b丢失"意味着A[b]中所有元素都被移除。
- 答案 = |移除集覆盖至少一个A[b]| = 用容斥。

对S（A[b1] union A[b2] ... 全在移除集中），移除集中的元素必须包含S的并集，其余随意。

令 union_sz(S) = |A[b1] ∪ A[b2] ∪ ...|，则贡献 = (-1)^(|S|+1) * 2^(n - union_sz(S))。

m <= 20，枚举所有2^m子集。但union_sz怎么算？

对每个bitmask S，union_sz(S) = |{i : nums[i] & bit_mask(S) > 0}|。预处理每个元素的bitmask贡献，然后用SOS DP。

具体：对每个元素i，令 mask[i] = nums[i] & total。将 mask[i] 视为一个m-bit的子集。令 f[S] = mask恰好为S的元素个数。则 union_sz(T) = sum_{S & T > 0} f[S]。

总元素 = sum f[S]。不贡献T的 = sum_{S & T == 0} f[S]。union_sz(T) = n - sum_{S & T == 0} f[S]。

可以预处理 g[T] = sum_{S subset of ~T} f[S]，用SOS DP。

n = 10^5, m <= 20, 2^m <= 2^20 = 1M。可行！

## Solution

[SourceCode](./solution.js)
