# [面试题 16.10] 生存人数

## Description


```md
https://leetcode.cn/problems/living-people-lcci/description/
* lcci
* Medium (66.79%)
* Likes:    80
* Dislikes: -
* Testcase Example:  '[1900,1901,1950]\n[1948,1951,2000]'
给定 N 个人的出生年份和死亡年份，第 i 个人的出生年份为 birth[i]，死亡年份为 death[i]，实现一个方法以计算生存人数最多的年份。
你可以假设所有人都出生于 1900 年至 2000 年（含 1900 和 2000 ）之间。如果一个人在某一年的任意时期处于生存状态，那么他应该被纳入那一年的统计中。例如，生于 1908 年、死于 1909 年的人应当被列入 1908 年和 1909 年的计数。
如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。

示例：
输入：
birth = [1900, 1901, 1950]
death = [1948, 1951, 2000]
输出： 1901

提示：
0 < birth.length == death.length <= 10000
birth[i] <= death[i]
Hint 1: 方案 1：你能计算出每年有多少人活着吗？
Hint 2: 方案1：用散列表或数组试试，将出生年份映射到该年还有多少人活着。
Hint 3: 解法2：如果对年份排序会如何？你会根据什么排序？
Hint 4: 解法2：你真的有必要匹配出生年份和死亡年份吗？当一个特定的人死了，会有什么关系，或者你只是需要一份死亡年份的清单？
Hint 5: 解法2：观察到人是“可替代的”，不管谁出生，何时死亡。你需要的只是一份出生年份和死亡年份的列表。这可能会使你对人员列表的排序变得更加容易。
Hint 6: 解法2：尝试创建一份排序的出生列表和一份排序的死亡列表。通过遍历两个列表，你能追踪任意时间活着的人的数量吗？
Hint 7: 每个出生增加一个人，每个死亡移除一个人。尝试编写一份人员列表（出生年份和死亡年份）示例，然后将其重新格式化为每年的列表，出生时加1，死亡时减1。
Hint 8: 解法3：如果你创建了一个年份数组并保存每个年份的人口变化会如何？你能找到人口最多的那一年吗?
Hint 9: 解法3：注意这个问题中的细节。你的算法/代码是否考虑一个在出生的同一年去世的人？这个人应该被计算为人口总数中的一人。

```

## Description (English)

Given the birth and death years of N people (birth[i], death[i] for person i), implement a method to find the year with the most people alive. Everyone is born between 1900 and 2000 inclusive. A person alive at any time in a year counts for that year (e.g. born 1908, died 1909 counts for both 1908 and 1909). If multiple years tie for the maximum, return the smallest.

Example:
Input: birth = [1900,1901,1950], death = [1948,1951,2000]
Output: 1901

Notes: 0 < birth.length == death.length <= 10000; birth[i] <= death[i].

## 思路

差分数组 O(n + 101)：出生年 +1、死亡次年 −1（死亡当年仍计入），对 1900..2000 前缀求和取最大；严格大于才更新，并列自动取最小年份。

## Solution

[SourceCode](./solution.js)
