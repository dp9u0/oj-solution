# [面试题 17.16] 按摩师

## Description


```md
https://leetcode.cn/problems/the-masseuse-lcci/description/
* lcci
* Easy (52.20%)
* Likes:    335
* Dislikes: -
* Testcase Example:  '[1,2,3,1]'
一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。
注意：本题相对原题稍作改动

示例 1：
输入： [1,2,3,1]
输出： 4
解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
示例 2：
输入： [2,7,9,3,1]
输出： 12
解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。
示例 3：
输入： [2,1,4,5,3,1,1,3]
输出： 12
解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。
Hint 1: 此题有递归和遍历两种解法，但从递归开始可能更容易一些。
Hint 2: 递归解法：每个预约都有两个选择（接受预约或拒绝预约）。作为一种蛮力方法，你可以在所有可能性的地方递归。但是请注意，如果接收了预约请求i，那么你的递归算法应该跳过预约请求i + 1。
Hint 3: 递归解法：你可以通过制表法优化这种方法。这种方法的运行时间是多少？
Hint 4: 递归解法：记忆法的时间复杂度为O(N)，空间复杂度也为O(N)。
Hint 5: 迭代法：对递归法进一步研究。你可以迭代地实现类似的策略吗？
Hint 6: 迭代法：从数组的末尾开始，然后向后计算可能是最简单的。
Hint 7: 迭代法：注意，你永远不会连续跳过3个预约。为什么不会？因为你总是可以接受中间的预约。
Hint 8: 迭代法：如果你选择i，那么将永远不会选择i + 1，但是总会选择i + 2或i + 3。
Hint 9: 迭代法：使用一个例子并从后往前计算。你可以很容易地找到子数组{rn}、{rn-1, rn}和{rn-2, ..., rn}。如何使用这些结果快速找到{rn-3, ..., rn}的最优解？
Hint 10: 迭代法：如果你预约某一时间段，那就不能预约紧邻的下一时间段，但可以预约之后的任何时间。因此，optimal(ri, ..., rn) = max(ri + optimal(ri+2, ..., rn)，optimal(ri+1, ..., rn))。你可以通过从后往前迭代来解决这个问题。
Hint 11: 迭代解法：如果你仔细考虑真正需要的数据，应该能够在O(n)时间复杂度和O(1)额外空间复杂度内解出它。

```

## Description (English)

A famous masseuse receives a stream of appointment requests; each can be accepted or declined. She cannot accept adjacent appointments (break time needed). Given a sequence of requests, find the optimal set (longest total minutes) and return the total.

Example 1: [1,2,3,1] → 4 (requests 1 and 3)
Example 2: [2,7,9,3,1] → 12
Example 3: [2,1,4,5,3,1,1,3] → 12

## 思路

打家劫舍型 DP O(n)/O(1)：滚动维护"接受当前可达值 take"与"跳过当前可达值 skip"——新请求 x：take = skip + x（接则前一个必须跳），skip = max(skip, take_prev)（跳则取两态较大者）；答案 max(take, skip)。

## Solution

[SourceCode](./solution.js)
