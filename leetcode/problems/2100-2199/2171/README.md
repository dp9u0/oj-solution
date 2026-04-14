# [2171] Removing Minimum Number of Magic Beans

## Description

[LeetCode Problem Description](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/description/)

* algorithms
* Medium (44.51%)
* Likes:    942
* Dislikes: 49
* Testcase Example:  '[4,1,6,5]'

```md
You are given an array of positive integers beans, where each integer represents the number of magic beans found in a particular magic bag.
Remove any number of beans (possibly none) from each bag such that the number of beans in each remaining non-empty bag (still containing at least one bean) is equal. Once a bean has been removed from a bag, you are not allowed to return it to any of the bags.
Return the minimum number of magic beans that you have to remove.

Example 1:

Input: beans = [4,1,6,5]
Output: 4
Explanation:
- We remove 1 bean from the bag with only 1 bean.
This results in the remaining bags: [4,0,6,5]
- Then we remove 2 beans from the bag with 6 beans.
This results in the remaining bags: [4,0,4,5]
- Then we remove 1 bean from the bag with 5 beans.
This results in the remaining bags: [4,0,4,4]
We removed a total of 1 + 2 + 1 = 4 beans to make the remaining non-empty bags have an equal number of beans.
There are no other solutions that remove 4 beans or fewer.

Example 2:

Input: beans = [2,10,3,2]
Output: 7
Explanation:
- We remove 2 beans from one of the bags with 2 beans.
This results in the remaining bags: [0,10,3,2]
- Then we remove 2 beans from the other bag with 2 beans.
This results in the remaining bags: [0,10,3,0]
- Then we remove 3 beans from the bag with 3 beans.
This results in the remaining bags: [0,10,0,0]
We removed a total of 2 + 2 + 3 = 7 beans to make the remaining non-empty bags have an equal number of beans.
There are no other solutions that removes 7 beans or fewer.


Constraints:

1 <= beans.length <= 105
1 <= beans[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 beans，每个数代表一个袋子里魔法豆的数量。你可以从每个袋子里移除任意数量的豆子（可以不移除），使得所有非空袋子里剩余的豆子数量相等。返回需要移除的最少豆子总数。

## 解题思路

排序 + 枚举。将 beans 排序后，枚举最终保留的非空袋子中的豆子数量等于 beans[i]（排序后第 i 个值）。
对于以 beans[i] 为目标值的情况，所有 < beans[i] 的袋子全部清空（贡献其全部豆子），所有 >= beans[i] 的袋子保留 beans[i] 个。
移除数 = totalSum - beans[i] × (n - i)，枚举所有 i 取最小值。
排序后用前缀和或直接用总和减去后缀贡献即可，O(n log n)。
