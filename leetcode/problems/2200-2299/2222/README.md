# [2222] Number of Ways to Select Buildings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-select-buildings/description/)

* algorithms
* Medium (50.86%)
* Likes:    1061
* Dislikes: 54
* Testcase Example:  '"001101"'

```md
You are given a 0-indexed binary string s which represents the types of buildings along a street where:

s[i] = &#39;0&#39; denotes that the ith building is an office and
s[i] = &#39;1&#39; denotes that the ith building is a restaurant.

As a city official, you would like to select 3 buildings for random inspection. However, to ensure variety, no two consecutive buildings out of the selected buildings can be of the same type.

For example, given s = '001101', we cannot select the 1st, 3rd, and 5th buildings as that would form '011' which is not allowed due to having two consecutive buildings of the same type.

Return the number of valid ways to select 3 buildings.

Example 1:

Input: s = '001101'
Output: 6
Explanation:
The following sets of indices selected are valid:
- [0,2,4] from '001101' forms '010'
- [0,3,4] from '001101' forms '010'
- [1,2,4] from '001101' forms '010'
- [1,3,4] from '001101' forms '010'
- [2,4,5] from '001101' forms '101'
- [3,4,5] from '001101' forms '101'
No other selection is valid. Thus, there are 6 total ways.

Example 2:

Input: s = '11100'
Output: 0
Explanation: It can be shown that there are no valid selections.


Constraints:

3 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个由 '0' 和 '1' 组成的字符串 s，选择 3 个建筑（索引递增），要求相邻选择的建筑类型不同（即选出的 3 个字符不能有相邻两个相同）。返回有效选择方案数。

## Approach

合法的 3 个建筑模式只有 "010" 和 "101"。对每个位置 i 作为中间元素：
- 若 s[i]='0'：贡献 = 左侧 '1' 的个数 * 右侧 '1' 的个数（形成 101）
- 若 s[i]='1'：贡献 = 左侧 '0' 的个数 * 右侧 '0' 的个数（形成 010）

用前缀和预处理 left1[i] 和 right1[i] 即可 O(n) 求解。
