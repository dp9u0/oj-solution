# [1538] 找出隐藏数组中出现次数最多的元素

## Description


```md
https://leetcode.cn/problems/guess-the-majority-in-a-hidden-array/description/
* algorithms
* Medium (60.17%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[0,0,1,0,1,1,1,1]'
给定一个整数数组 nums，且 nums 中的所有整数都为 0 或 1。你不能直接访问这个数组，你需要使用 API ArrayReader ，该 API 含有下列成员函数：
int query(int a, int b, int c, int d)：其中 0 <= a < b < c < d < ArrayReader.length() 。此函数查询以这四个参数为下标的元素并返回：

4 : 当这四个元素相同（0 或 1）时。
2 : 当其中三个元素的值等于 0 且一个元素等于 1 时，或当其中三个元素的值等于 1 且一个元素等于 0 时。
0 : 当其中两个元素等于 0 且两个元素等于 1 时。


int length()：返回数组的长度。
你可以调用 query() 最多 2 * n 次，其中 n 等于 ArrayReader.length()。
返回 nums 中出现次数最多的值的任意索引，若所有的值出现次数均相同，返回 -1。

示例 1：
输入: nums = [0,0,1,0,1,1,1,1]
输出: 5
解释: API 的调用情况如下：
reader.length() // 返回 8，因为隐藏数组中有 8 个元素。
reader.query(0,1,2,3) // 返回 2，查询元素 nums[0], nums[1], nums[2], nums[3] 间的比较。
// 三个元素等于 0 且一个元素等于 1 或出现相反情况。
reader.query(4,5,6,7) // 返回 4，因为 nums[4], nums[5], nums[6], nums[7] 有相同值。
我们可以推断，最常出现的值在最后 4 个元素中。
索引 2, 4, 6, 7 也是正确答案。
示例 2:
输入: nums = [0,0,1,1,0]
输出: 0
示例 3:
输入: nums = [1,0,1,0,1,0,1,0]
输出: -1

提示:
5 <= nums.length <= 105
0 <= nums[i] <= 1

进阶：要找到出现次数最多的元素，需要至少调用 query() 多少次？
Hint 1: If you find that 2 indexes in the array (id1, id2) have the same value (nums [id1] == nums [id2]), you could infer the values of (x, y) based on the results of query (id1, id2, x, y).

```

## Solution

[SourceCode](./solution.js)

## Translation

Hidden 0/1 array behind query(a,b,c,d) (returns 4/2/0 by composition) and length(). Return ANY index of the majority value, or -1 on exact tie. ≤ 2n queries.

## Approach

**基准分类 + 同值对判别**。r3 = query(0,1,2,3);对每个 i≥4,query(0,1,2,i)==r3 ⟺ nums[i]==nums[3](可穷举验证所有组合)→ 分为 A(同类)/B(异类)。n=5 两个角落用额外一次 query 直接判定多数类。否则 n≥6 必有同值对(A 或 B 内两元素),用它 + 一个异类索引判别 0/1/2 各自是否同类:query(p,q,t,fourth) 的 4/2/0 恰好区分。得 k(前三者同类数)→ 两类规模 → 返回多数类任一索引或 -1。共 1+(n−4)+3 = n 次查询。
