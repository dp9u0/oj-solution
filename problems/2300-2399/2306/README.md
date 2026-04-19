# [2306] Naming a Company

## Description

[LeetCode Problem Description](https://leetcode.com/problems/naming-a-company/description/)

* algorithms
* Hard (46.50%)
* Likes:    1967
* Dislikes: 74
* Testcase Example:  '["coffee","donuts","time","toffee"]'

```md
You are given an array of strings ideas that represents a list of names to be used in the process of naming a company. The process of naming a company is as follows:

Choose 2 distinct names from ideas, call them ideaA and ideaB.
Swap the first letters of ideaA and ideaB with each other.
If both of the new names are not found in the original ideas, then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
Otherwise, it is not a valid name.

Return the number of distinct valid names for the company.

Example 1:

Input: ideas = ['coffee','donuts','time','toffee']
Output: 6
Explanation: The following selections are valid:
- ('coffee', 'donuts'): The company name created is 'doffee conuts'.
- ('donuts', 'coffee'): The company name created is 'conuts doffee'.
- ('donuts', 'time'): The company name created is 'tonuts dime'.
- ('donuts', 'toffee'): The company name created is 'tonuts doffee'.
- ('time', 'donuts'): The company name created is 'dime tonuts'.
- ('toffee', 'donuts'): The company name created is 'doffee tonuts'.
Therefore, there are a total of 6 distinct company names.
The following are some examples of invalid selections:
- ('coffee', 'time'): The name 'toffee' formed after swapping already exists in the original array.
- ('time', 'toffee'): Both names are still the same after swapping and exist in the original array.
- ('coffee', 'toffee'): Both names formed after swapping already exist in the original array.

Example 2:

Input: ideas = ['lack','back']
Output: 0
Explanation: There are no valid selections. Therefore, 0 is returned.


Constraints:

2 <= ideas.length <= 5 * 104
1 <= ideas[i].length <= 10
ideas[i] consists of lowercase English letters.
All the strings in ideas are unique.


```

## 题目翻译

给定字符串数组 ideas。选两个不同字符串，交换首字母，若两个新字符串都不在原数组中，则为一个有效公司名。返回不同有效公司名的数量。

## 解题思路

**按首字母分组 + 集合差**

1. 按首字母将字符串分为 26 组，每组存后缀 Set
2. 对每对组 (i, j)，计算：
   - ci = 组 i 中后缀不在组 j 中的个数
   - cj = 组 j 中后缀不在组 i 中的个数
3. 交换 (ideaA, ideaB) 和 (ideaB, ideaA) 产生不同公司名，贡献 = 2 × ci × cj

时间 O(26² × n/26) = O(26n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
