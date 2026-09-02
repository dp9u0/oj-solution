# [LCR 187] 破冰游戏

## Description


```md
https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/description/
* algorithms
* Easy (65.09%)
* Likes:    889
* Dislikes: -
* Testcase Example:  '7\n4'
社团共有 num 位成员参与破冰游戏，编号为 0 ~ num-1。成员们按照编号顺序围绕圆桌而坐。社长抽取一个数字 target，从 0 号成员起开始计数，排在第 target 位的成员离开圆桌，且成员离开后从下一个成员开始计数。请返回游戏结束时最后一位成员的编号。

示例 1：
输入：num = 7, target = 4
输出：1
示例 2：
输入：num = 12, target = 5
输出：0

提示：
1 <= num <= 10^5
1 <= target <= 10^6

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

`num` members numbered 0..num-1 sit in a circle. Count starting from member 0; the member at count `target` leaves, and counting resumes from the next member. Return the last remaining member's number.

**Example:** num=7,target=4 → 1; num=12,target=5 → 0.

**Constraints:** num ≤ 1e5, target ≤ 1e6.

---

## Approach

**Josephus** recurrence: `f(1)=0`, `f(i) = (f(i-1) + target) % i` for i=2..num. Answer `f(num)`.

Complexity: `O(num)` time, `O(1)` space.
