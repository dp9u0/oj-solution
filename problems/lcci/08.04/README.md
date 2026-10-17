# [面试题 08.04] 幂集

## Description


```md
https://leetcode.cn/problems/power-set-lcci/description/
* lcci
* Medium (82.21%)
* Likes:    117
* Dislikes: -
* Testcase Example:  '[1,2,3]'
幂集。编写一种方法，返回某集合的所有子集。集合中 不包含重复的元素。
说明：解集不能包含重复的子集。
示例：
输入：nums = [1,2,3]
输出：
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
Hint 1: 如何从子集{a, b}中构建{a, b, c}的所有子集？
Hint 2: 任何属于{a, b}的子集都是{a, b, c}的子集。哪个集合是{a, b, c}的子集却不是{a, b}的子集。
Hint 3: 包含c的子集是{a, b, c}，而非{a, b}。你能使用子集{a, b}构建这些子集吗？
Hint 4: 通过把c加到所有{a, b}的子集里，你可以构建剩余的子集。
Hint 5: 你也可以将每个子集映射成二进制数。第i位可以表示元素是否在集合中的“布尔”标志。

```

## Description (English)

Power set. Write a method to return all subsets of a set. The set contains no duplicate elements, and the solution must not contain duplicate subsets.

Example:
Input: nums = [1,2,3]
Output: [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]

## 思路

位掩码枚举 O(n·2ⁿ)：n 个元素对应 n 位布尔标志，遍历 0..2ⁿ−1 每个掩码展开成子集——2ⁿ 个子集一个不重不漏。

## Solution

[SourceCode](./solution.js)
