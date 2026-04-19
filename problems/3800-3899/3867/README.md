# [3867] Sum of GCD of Formed Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-gcd-of-formed-pairs/description/)

* algorithms
* Medium (65.60%)
* Testcase Example:  '[2,6,4]'

```md
You are given an integer array nums of length n.
Construct an array prefixGcd where for each index i:
Let mxi = max(nums[0], nums[1], ..., nums[i]).
prefixGcd[i] = gcd(nums[i], mxi).
After constructing prefixGcd:
Sort prefixGcd in non-decreasing order.
Form pairs by taking the smallest unpaired element and the largest unpaired element.
Repeat this process until no more pairs can be formed.
For each formed pair, compute the gcd of the two elements.
If n is odd, the middle element in the prefixGcd array remains unpaired and should be ignored.
Return an integer denoting the sum of the GCD values of all formed pairs.
The term gcd(a, b) denotes the greatest common divisor of a and b.

Example 1:
Input: nums = [2,6,4]
Output: 2
Explanation:
Construct prefixGcd:


i
nums[i]
mxi
prefixGcd[i]




0
2
2
2


1
6
6
6


2
4
6
2


prefixGcd = [2, 6, 2]. After sorting, it forms [2, 2, 6].
Pair the smallest and largest elements: gcd(2, 6) = 2. The remaining middle element 2 is ignored. Thus, the sum is 2.
Example 2:
Input: nums = [3,6,2,8]
Output: 5
Explanation:
Construct prefixGcd:


i
nums[i]
mxi
prefixGcd[i]




0
3
3
3


1
6
6
6


2
2
6
2


3
8
8
8


prefixGcd = [3, 6, 2, 8]. After sorting, it forms [2, 3, 6, 8].
Form pairs: gcd(2, 8) = 2 and gcd(3, 6) = 3. Thus, the sum is 2 + 3 = 5.

Constraints:
1
1

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个长度为 n 的整数数组 nums。

构造数组 prefixGcd：
- 对于每个索引 i，设 mxi = max(nums[0], nums[1], ..., nums[i])
- prefixGcd[i] = gcd(nums[i], mxi)

构造完成后：
1. 将 prefixGcd 按非递减顺序排序
2. 配对：取最小未配对元素和最大未配对元素组成一对
3. 重复直到无法再配对
4. 计算每对的 GCD 并求和
5. 如果 n 是奇数，中间元素不配对，忽略

**示例 1：**
- 输入：nums = [2,6,4]
- prefixGcd: i=0: gcd(2,2)=2, i=1: gcd(6,6)=6, i=2: gcd(4,6)=2 → [2,6,2]
- 排序后：[2,2,6]
- 配对：gcd(2,6)=2，中间的2忽略
- 输出：2

**示例 2：**
- 输入：nums = [3,6,2,8]
- prefixGcd: [3,6,2,8] → 排序后 [2,3,6,8]
- 配对：gcd(2,8)=2, gcd(3,6)=3
- 输出：5

## Approach (解题思路)

**模拟过程**

1. 构建 prefixGcd 数组：遍历 nums，维护当前最大值 mxi，计算每个位置的 gcd(nums[i], mxi)
2. 排序 prefixGcd
3. 双指针配对：左指针从0开始，右指针从 n-1 开始，向中间靠拢
4. 每次计算 gcd(arr[left], arr[right]) 并累加
5. 如果 n 是奇数，中间元素会被跳过（left > right 时停止）

**时间复杂度：** O(n log n) 主要是排序
**空间复杂度：** O(n) 存储 prefixGcd
