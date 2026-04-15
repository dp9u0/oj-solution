# [1850] Minimum Adjacent Swaps to Reach the Kth Smallest Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/description/)

* algorithms
* Medium (71.85%)
* Likes:    810
* Dislikes: 122
* Testcase Example:  '"5489355142"\n4'

```md
You are given a string num, representing a large integer, and an integer k.
We call some integer wonderful if it is a permutation of the digits in num and is greater in value than num. There can be many wonderful integers. However, we only care about the smallest-valued ones.

For example, when num = '5489355142':

The 1st smallest wonderful integer is '5489355214'.
The 2nd smallest wonderful integer is '5489355241'.
The 3rd smallest wonderful integer is '5489355412'.
The 4th smallest wonderful integer is '5489355421'.



Return the minimum number of adjacent digit swaps that needs to be applied to num to reach the kth smallest wonderful integer.
The tests are generated in such a way that kthsmallest wonderful integer exists.

Example 1:

Input: num = '5489355142', k = 4
Output: 2
Explanation: The 4th smallest wonderful number is '5489355421'. To get this number:
- Swap index 7 with index 8: '5489355142' -> '5489355412'
- Swap index 8 with index 9: '5489355412' -> '5489355421'

Example 2:

Input: num = '11112', k = 4
Output: 4
Explanation: The 4th smallest wonderful number is '21111'. To get this number:
- Swap index 3 with index 4: '11112' -> '11121'
- Swap index 2 with index 3: '11121' -> '11211'
- Swap index 1 with index 2: '11211' -> '12111'
- Swap index 0 with index 1: '12111' -> '21111'

Example 3:

Input: num = '00123', k = 1
Output: 1
Explanation: The 1st smallest wonderful number is '00132'. To get this number:
- Swap index 3 with index 4: '00123' -> '00132'


Constraints:

2 <= num.length <= 1000
1 <= k <= 1000
num only consists of digits.


```

## 中文翻译

给定一个表示大整数的字符串 `num` 和一个整数 `k`。

如果一个整数是 `num` 数字的排列且值大于 `num`，则称为"美丽数"。可能有很多美丽数，但我们只关心值最小的那些。

返回将 `num` 转换为第 k 个最小美丽数所需的最少相邻数字交换次数。题目保证第 k 个最小美丽数存在。

## 解题思路

**next_permutation + 计算逆序对距离：**

1. 先找到第 k 个最小美异数：对 `num` 执行 k 次 next permutation 操作
2. 然后计算从原始 `num` 到目标排列的最少相邻交换次数
3. 最少相邻交换次数 = 原始位置到目标位置的"逆序距离"：对每个位置，找到原始数组中对应的数字，将其通过相邻交换移到目标位置，累加交换次数

具体计算交换次数的方法：
- 将原始数组复制一份
- 对于目标排列的每个位置 i，在原始副本中找到对应数字的位置 j
- j - i 即为将该数字移动到位置 i 所需的相邻交换次数
- 累加所有交换次数

时间复杂度：O(n * k + n^2)

## Solution

[SourceCode](./solution.js)
