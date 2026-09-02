# [LCP 40] 心算挑战

## Description


```md
https://leetcode.cn/problems/uOAnQW/description/
* algorithms
* Easy (40.17%)
* Likes:    142
* Dislikes: -
* Testcase Example:  '[1,2,8,9]\n3'
「力扣挑战赛」心算项目的挑战比赛中，要求选手从 `N` 张卡牌中选出 `cnt` 张卡牌，若这 `cnt` 张卡牌数字总和为偶数，则选手成绩「有效」且得分为 `cnt` 张卡牌数字总和。
给定数组 `cards` 和 `cnt`，其中 `cards[i]` 表示第 `i` 张卡牌上的数字。 请帮参赛选手计算最大的有效得分。若不存在获取有效得分的卡牌方案，则返回 0。
**示例 1：**
>输入：`cards = [1,2,8,9], cnt = 3`
>
>输出：`18`
>
>解释：选择数字为 1、8、9 的这三张卡牌，此时可获得最大的有效得分 1+8+9=18。
**示例 2：**
>输入：`cards = [3,3,1], cnt = 1`
>
>输出：`0`
>
>解释：不存在获取有效得分的卡牌方案。
**提示：**
- `1 <= cnt <= cards.length <= 10^5`
- `1 <= cards[i] <= 1000`

```

## Solution

[SourceCode](./solution.js)

### English Translation

In the "LCP Challenge" mental arithmetic competition, a contestant must select `cnt` cards from `N` cards. If the sum of the numbers on the selected `cnt` cards is **even**, the score is "valid" and equals that sum.

Given an array `cards` and an integer `cnt`, where `cards[i]` is the number on the `i`-th card, compute the **maximum valid score**. Return `0` if there is no valid selection.

**Example 1:**
> Input: `cards = [1,2,8,9], cnt = 3`
>
> Output: `18`
>
> Explanation: Select cards 1, 8 and 9, the maximum valid score is 1+8+9=18.

**Example 2:**
> Input: `cards = [3,3,1], cnt = 1`
>
> Output: `0`
>
> Explanation: There is no valid selection.

**Constraints:**
- `1 <= cnt <= cards.length <= 10^5`
- `1 <= cards[i] <= 1000`

### Approach (贪心)

1. 降序排序,取前 `cnt` 张,求和 `sum`。
2. 若 `sum` 为偶数,直接返回。
3. 若 `sum` 为奇数,必须通过「替换」把总和调成偶数,两种方案取较大:
   - 去掉已选中**最小的奇数**,补入剩余卡牌中**最大的偶数**:`sum - minOdd + maxEven`
   - 去掉已选中**最小的偶数**,补入剩余卡牌中**最大的奇数**:`sum - minEven + maxOdd`
4. 两种方案都不可行则返回 `0`。

时间复杂度 O(n log n)(排序),空间复杂度 O(n)。
